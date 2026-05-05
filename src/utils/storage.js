const STORAGE_KEY = "book_favorites";

export function getFavorites() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveFavorite(book) {
    const favorites = getFavorites();

    const isInFav = favorites.some((fav) => fav.key === book.key);

    if (isInFav) {
        // If a book is in fav, we remove it
        const updatedFav = favorites.filter((fav) => fav.key !== book.key);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFav));
        return updatedFav;
    } else {
        // If a book is NOT in fav, we add it
        favorites.push(book);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        return favorites;
    }
}

export function isFavorite(bookKey) {
    const favorites = getFavorites();
    return favorites.some((fav) => fav.key === bookKey);
}
