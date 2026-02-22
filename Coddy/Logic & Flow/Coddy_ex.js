const festivalData = {
  movies: [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      mainGenre: "Sci-Fi",
      secondGenre: undefined,
      avgRating: 0,
      available: true,
    },
  ],
  venues: [
    {
      id: 1,
      name: "Main Theater",
      capacity: 200,
    },
  ],
  screenings: [
    {
      id: 1,
      movieId: 1,
      venueId: 1,
      date: "2023-10-29",
      time: "13:35:00",
      availableSeats: 200,
    },
  ],
  tickets: new Set(),
};



let fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, remove 2 items (Apple and Mango)
// console.log('Before',fruits)

fruits.splice(2, 1);
// fruits is now ["Banana", "Orange"]
// console.log('After',fruits)
