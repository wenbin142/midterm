let moviesData = [];

async function fetchMovies(url, sectionId) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    moviesData = data.results; 
    MoviesUI(sectionId); 
  } catch (error) {
    console.error("Fetching movies failed:", error);
  }
}


function MoviesUI(sectionId) {
  const section = document.getElementById(sectionId);
  const container = section.querySelector('.grid');
  container.innerHTML = '';
  
  moviesData.forEach(movie => {
    const movieCard = createMovieCardUI(movie);
    container.innerHTML += movieCard;
  });
}


function createMovieCardUI(movie) {
  return `
    <div class="movie-tile bg-white border border-gray-300 rounded-lg overflow-hidden m-4 shadow-lg">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-full h-auto">
      <div class="p-2">
        <h3 class="text-xl font-bold">${movie.title}</h3>
        <p>Released: ${movie.release_date}</p>
        <p>${movie.overview}</p>
      </div>
    </div>
  `;
}



fetchMovies('https://api.themoviedb.org/3/movie/popular?api_key=b18f2bfef1fd87820526396b6936cb42', 'popular-movies');
fetchMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=b18f2bfef1fd87820526396b6936cb42', 'top-rated-movies');
fetchMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=b18f2bfef1fd87820526396b6936cb42', 'upcoming-movies');
