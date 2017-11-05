const movies = require('../index');

describe('Dataset', () => {
  it('exports three arrays', () => {
    expect(Array.isArray(movies.movies)).toBe(true);
    expect(Array.isArray(movies.directors)).toBe(true);
    expect(Array.isArray(movies.actressesAndActors)).toBe(true);
  });

  it('movies export title, directors, runtime...', () => {
    const movie = movies.movies[0];
    const movieKeys = Object.keys(movie);

    ['title', 'directors', 'runtime', 'year', 'genres'].forEach((k) => {
      expect(movieKeys).toContain(k);
    });
  });

  it('movies directors and genres export an array', () => {
    const movie = movies.movies[0];

    expect(Array.isArray(movie.directors)).toBe(true);
    expect(Array.isArray(movie.genres)).toBe(true);
  });
});
