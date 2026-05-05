import { isFavorite } from "../utils/storage";

export function BookCard(book) {
    // Check if book cover exists
    const coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://placehold.co/400x600?text=No+Cover";

    // Helps to handle if there is more than one author
    const authors = book.author_name
        ? book.author_name.join(", ")
        : "Unknown Author";

    // Check if publish_year exists
    const year = book.first_publish_year || "Year unknow";

    // Check if a book is in favorites
    const activeClass = isFavorite(book.key) ? "active" : "";

    return `
        <div class="book-card">
            <div class="book-card__image">
                <img src="${coverUrl}" alt="${book.title}" loading="lazy">
                <button class="add-to-fav-btn ${activeClass}" data-book-id="${book.key}">
                    <img src="/assets/heart.svg" alt="Heart" />
                </button>
            </div>
            <div class="book-card__content">
                <p class="book-card__title">${book.title}</p>
                <p class="book-card__author">${authors}</p>
                <p class="book-card__year">${year}</p>
            </div>
        </div>
    `;
}
