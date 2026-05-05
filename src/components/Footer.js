export function Footer() {
    const container = document.getElementById("footer-container");
    container.innerHTML = `
        <footer class="footer-container default-px">
            <p class="footer-text">Powered by <a href="https://openlibrary.org/" target="_blank" rel="noopener noreferer">Open Library</a></p>
        </footer>
    `;
}
