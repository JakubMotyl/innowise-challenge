import { getFavorites } from "../utils/storage.js";

export function Favorites() {
    const container = document.querySelector("#favorites");
    const favorites = getFavorites();

    // HTML for each book in favorites
    const booksHtml = favorites
        .map((book) => {
            const coverUrl = book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                : "https://placehold.co/50x75?text=No+Cover";

            const authors = book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author";
            const year = book.first_publish_year || "Unknown";

            return `
            <div class="fav-item">
                <img src="${coverUrl}" alt="${book.title}" class="fav-item__cover">
                <div class="fav-item__info">
                    <p class="fav-item__title title">${book.title}</p>
                    <p class="fav-item__author">${authors}</p>
                    <p class="fav-item__year">${year}</p>
                </div>
                <button class="remove-from-fav-btn" data-book-id="${book.key}">
                    X
                </button>
            </div>
        `;
        })
        .join("");

    // Main Favorites HTML container
    container.innerHTML = `
        <div class="fav-header">
            <div class="fav-header__icon">
                <img src="/assets/heart.svg" alt="Header Icon" />
            </div>
            <div class="fav-header__text">
                <h2 class="title">Favorites</h2>
                <p>${favorites.length} books saved</p>
            </div>
        </div>
        <div class="fav-list">
            ${favorites.length > 0 ? booksHtml : '<p style="text-align: center; margin-top: 20px;">No favorites yet.</p>'}
        </div>
    `;
}
