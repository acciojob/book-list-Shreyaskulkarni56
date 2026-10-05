//your JS code here. If required.
const form = document.querySelector("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const isbnValue = isbn.value.trim();

    // Don't add empty books
    if (titleValue === "" || authorValue === "" || isbnValue === "") {
        return;
    }

    // Create a new row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${titleValue}</td>
        <td>${authorValue}</td>
        <td>${isbnValue}</td>
        <td>
            <button class="delete">X</button>
        </td>
    `;

    // Add row to table
    bookList.appendChild(row);

    // Clear input fields
    title.value = "";
    author.value = "";
    isbn.value = "";
});

// Delete a book
bookList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});