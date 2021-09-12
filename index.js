function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  //use reduce method to total the pages
  //number 5 book
  //1031st character
  //fetch request to url, return jSON
  //second function renderBooks pass in JSON as arg
  //returns fetch
  return fetch("https://anapioficeandfire.com/api/books")
    .then(function(response) {
      return response.json(); 
    })
    .then(renderBooks); 
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
