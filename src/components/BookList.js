import { BookCard } from "./BookCard";

export function BookList(books) {
    const container = document.querySelector("#book-list");

    container.innerHTML = books.map((book) => BookCard(book)).join("");
}
