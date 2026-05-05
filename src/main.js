import "./style.css";
import { Header } from "./components/Header";
import { BookList } from "./components/BookList";
import { fetchBooks } from "./utils/api";
import { Footer } from "./components/Footer";
import { getFavorites, saveFavorite } from "./utils/storage";
import { Favorites } from "./components/Favorites";

document.querySelector("#app").innerHTML = `
    <header id="header-container"></header>
    <main id="main-container">
        <!-- Hero Section (title + search bar) -->
        <section class="default-px">
            <div class="hero-content">
                <h1 class="hero-title title">Discover Your Next Great Read</h1>
                <p>Search millions of books, build your personal library, and never lose track of what to read next.</p>
                <div class="search-wrapper">
                    <div>
                        <button class="search-icon"><img src="/assets/search.svg" alt="Search" /></button>
                        <input class="search-input" type="text" placeholder="Search for books by title or author...">
                    </div>
                    <button class="search-btn">Search</button>
                </div>
            </div>
        </section>

        <!-- Content Section (books + favorites) -->
        <section class="content-layout default-px">
            <div id="book-list"></div>
            <div id="favorites"></div>
        </section>
    </main>
    <footer id="footer-container"></footer>
`;

Header();
Footer();
Favorites();

// Theme toggle functionality

const themeBtn = document.getElementById("theme-toggle-btn");

if (localStorage.getItem("app_theme") === "dark") {
    document.body.classList.add("dark-theme");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Save the choice to localStorage
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("app_theme", "dark");
    } else {
        localStorage.setItem("app_theme", "light");
    }
});

// Helps to manage the book key
let currentBooks = [];

async function handleSearch(query) {
    const bookListContainer = document.querySelector("#book-list");

    // Show loading while fetching the data
    bookListContainer.innerHTML = "<p>Loading...</p>";

    try {
        const books = await fetchBooks(query);

        if (books.length === 0 || !books) {
            bookListContainer.innerHTML =
                "<p>Nothing found. Try a different book.</p>";
        } else {
            currentBooks = books;
            BookList(books);
        }
    } catch (error) {
        bookListContainer.innerHTML = "<p>Error. Please try again.</p>";
        console.error(error);
    }
}

handleSearch("javascript");

// Add functionality to search icon and search button
document.querySelectorAll(".search-btn, .search-icon").forEach((button) =>
    button.addEventListener("click", () => {
        const query = document.querySelector(".search-input").value.trim();

        // If search input is empty return the messages
        if (!query) {
            document.querySelector("#book-list").innerHTML =
                "<p>Enter a query to search for books.</p>";
            return;
        }

        handleSearch(query);
    }),
);

// Function that allows you to add to favorites
document.querySelector("#book-list").addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-fav-btn");
    if (btn) {
        const bookKey = btn.dataset.bookId;
        const selectedBook = currentBooks.find((book) => book.key === bookKey);

        if (selectedBook) {
            saveFavorite(selectedBook);

            // Refresh both components
            Favorites();
            BookList(currentBooks);
        }
    }
});

// Function that allows you to remove from favorites
document.querySelector("#favorites").addEventListener("click", (e) => {
    const btn = e.target.closest(".remove-from-fav-btn");
    if (btn) {
        const bookKey = btn.dataset.bookId;
        saveFavorite({ key: bookKey });

        // Refresh both components
        Favorites();
        if (currentBooks.length > 0) {
            BookList(currentBooks);
        }
    }
});
