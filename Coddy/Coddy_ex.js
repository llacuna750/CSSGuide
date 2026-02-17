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

function manageFestival(actions, data) {
  let results = [];

  actions.forEach((action, index) => {
    const currentData = data[index];

    switch (action) {
      case "listMovies":
        results.push(festivalData.movies);
        break;

      case "listVenues":
        results.push(festivalData.venues);
        break;

      case "listTickets":
        results.push(festivalData.tickets);
        break;

      case "listScreenings":
        results.push(festivalData.screenings);
        break;

      case "addMovie":
        const newMovie = {
          id: festivalData.movies.length + 1,
          title: currentData.title,
          director: currentData.director,
          year: currentData.year,
          mainGenre: currentData.mainGenre,
          secondGenre: currentData.secondGenre,
          avgRating: 0,
          available: true,
        };
        festivalData.movies.push(newMovie);
        results.push("Movie added successfully!");
        break;

      case "addVenue":
        const newVenue = {
          id: festivalData.venues.length + 1,
          name: currentData.name,
          capacity: currentData.capacity,
        };
        festivalData.venues.push(newVenue);
        results.push("Venue added successfully!");
        break;

      case "addScreening":
        const movie = festivalData.movies.find(
          (m) => m.id === currentData.movieId,
        );
        const venue = festivalData.venues.find(
          (v) => v.id === currentData.venueId,
        );

        if (!movie || !venue) {
          results.push("Movie or venue not found!");
          break;
        }

        const existingScreening = festivalData.screenings.find(
          (s) =>
            s.venueId === currentData.venueId &&
            s.date === currentData.date &&
            s.time === currentData.time,
        );

        if (existingScreening) {
          results.push("Screening already exists at this time!");
          break;
        }

        const newScreening = {
          id: festivalData.screenings.length + 1,
          movieId: currentData.movieId,
          venueId: currentData.venueId,
          date: currentData.date,
          time: currentData.time,
          availableSeats: venue.capacity,
        };

        festivalData.screenings.push(newScreening);
        results.push("Screening added successfully!");
        break;

      default:
        results.push("Invalid action!");
    }
  });

  return results;
}

console.log(
  manageFestival(
    ["addScreening", "listMovies", "listVenues", "listScreenings"],
    [
      { movieId: 999, venueId: 1, date: "2023-12-27", time: "19:30:00" },
      {},
      {},
      {},
    ],
  ),
);
