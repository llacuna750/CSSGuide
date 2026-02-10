console.log(
  `\n\n${"*".repeat(20)}--( Library Management System  _Search By Title )--${"*".repeat(20)}`,
);

/*   Search By Title


Challenge  (Easy):
Create a new case searchByTitle in your switch statement. 
This action should search for books by their title.

For the searchByTitle case:

1. The currentData parameter is a string to search for
2. Create an empty array searchResults to store the search results
3. Loop through all books in the library
4. For each book, check if its title includes the search string
5. The search should be case-insensitive (convert both strings to lowercase before comparing)
6. If a match is found, add the book to the searchResults array
7. Add the searchResults array to the main results array
*/

// Initial library data
let libraryData3 = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: "",
    },
  ],
  readers: [
    {
      name: "John Smith",
      favoriteGenre: "Fiction",
    },
  ],
};

function manageLibrary3(actions, data) {
  let results = [];

  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];
    const currentData = data[i];

    switch (currentAction) {
      case "printBooks":
        results.push(libraryData3.books); // add the library books properties into results array
        break;

      case "printReaders":
        results.push(libraryData3.readers);
        break;

      case "addBook":
        // Add a new book to the library
        let newBook = {
          id: libraryData3.books.length + 1,
          title: currentData.title,
          author: currentData.author,
          year: currentData.year,
          genre: currentData.genre,
          isRead: false,
          rating: 0,
          borrowed: false,
          borrowedBy: "",
          borrowDate: "",
        };
        libraryData3.books.push(newBook);
        results.push("Book added successfully!");
        break;

      case "searchByTitle":
        let searchResults = [];
        let theSearchString = "";

        for (const v of data) {
          if (typeof v === "string") theSearchString = v;
        }

        for (const i of libraryData3.books) {
          let regex = new RegExp(theSearchString, "ig");

          if (regex.test(i.title)) searchResults.push(i);
        }

        results.push(searchResults);
        break;

      case "filterByGenre":
        let filteredResults = [];

        for (const v of libraryData3.books) {
          if (v.genre.toLowerCase().includes(currentData.toLowerCase()))
            filteredResults.push(v);
        }
        results.push(filteredResults);
        break;

      default:
        results.push("Invalid action!");
    }
  }

  return results;
}

console.log(
  manageLibrary3(
    ["addBook", "addBook", "filterByGenre", "printBooks"],
    [
      {
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997,
        genre: "Fantasy",
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy",
      },
      "Fantasy",
      null, 
    ],
  ),
);
