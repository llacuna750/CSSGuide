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




















