
const pagination = document.querySelector(".pagination");
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let currentPage = 1;
pagination.innerHTML = `
    <button class="prev-btn">&laquo;</button>
    <span class="current-page">${currentPage}</span>
    <button class="next-btn">&raquo;</button>
`;

Array.from(pages).forEach(page => {
    const button = document.createElement("button");
    button.textContent = page;
    button.classList.add("page-btn");
    pagination.appendChild(button);
});

pagination.addEventListener("click", (e) => {
    if (e.target.classList.contains("prev-btn")) {
        currentPage = currentPage - 1;
        if (currentPage < 1) {
            currentPage = 1;
        }
    } else if (e.target.classList.contains("next-btn")) {
        currentPage = currentPage + 1;
        if (currentPage > pages.length) {
            currentPage = pages.length;
        }
    } else if (e.target.classList.contains("page-btn")) {
        currentPage = parseInt(e.target.textContent);
    }
    updatePagination();
});

function updatePagination() {
    const currentPageButton = pagination.querySelector(".current-page");
    currentPageButton.textContent = currentPage;
}
