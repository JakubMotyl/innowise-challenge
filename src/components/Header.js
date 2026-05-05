export function Header() {
    const container = document.getElementById("header-container");

    // Generate Navbar
    container.innerHTML = `
        <nav class="nav-container default-px">
            <div>
                <img class="nav-logo" src="/assets/book.svg" alt="Logo" />
            </div>
            <div>
                <p class="nav-name title">The Library</p>
                <span class="nav-desc">Discover your next favorite book</span>
            </div>
            
            <!-- Theme toggle button -->
            <button id="theme-toggle-btn" style="background: transparent; font-size: 24px;">🌓</button>
        </nav>
    `;
}
