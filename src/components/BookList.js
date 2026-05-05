import { BookCard } from "./BookCard";

export function BookList(books) {
    const container = document.querySelector("#book-list");

    // Generate the layout for Book Cards
    container.innerHTML = books.map((book) => BookCard(book)).join("");
}
