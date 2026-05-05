export async function fetchBooks(searchQuery) {
    try {
        // Iniital searchQuery prevents from empty array
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`,
        );

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        // Returns only 10 books to match the design
        return data.docs.slice(0, 10);
    } catch (err) {
        console.error("Error fetching books", err);
        return [];
    }
}
