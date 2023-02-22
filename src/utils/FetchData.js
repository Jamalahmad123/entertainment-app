export const apiKey = import.meta.env.VITE_API_KEY;

export const fetchTrending = async (type, page = 1) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.json();
  } catch (error) {
    throw new Error("An Error has been occurred");
  }
};

export const fetchMovieData = async (type, page = 1) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.json();
  } catch (error) {
    throw new Error("An Error has been occurred");
  }
};

export const fetchTvData = async (media, page = 1) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${media}?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.json();
  } catch (error) {
    throw new Error("An Error has been occurred");
  }
};

// Fetch movies and tv list media type
export const fetchMediaList = async (media) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/${media}/list?api_key=${apiKey}&language=en-US`
    );
    return await res.json();
  } catch (error) {
    throw new Error("An Error has been occurred");
  }
};

// Fetch Movies and TV Shows By Genres
export const fetchMediaByGenres = async (media, genresType, page = 1) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/${media}?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genresType}`
    );
    return await res.json();
  } catch (error) {
    throw new Error("An Error has been occurred");
  }
};
