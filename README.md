[![Build Status](https://travis-ci.org/randfun/movies-dataset.svg?branch=master)](https://travis-ci.org/randfun/movies-dataset)

# Movies Dataset

This dataset includes a set of movies, directors, actresses and actors. The information has been extracted from the following [IMDB](http://www.imdb.com) lists:

* [Top10ner's 1001 'Greatest' Movies of All Time](http://www.imdb.com/list/ls074674014/)
* [Top 1000 Actors and Actresses](http://www.imdb.com/list/ls058011111/)

## Installation

This project is distributed through [NPM](https://npmjs.com). You can install it running the next command:

```
npm install --save movies-dataset
```

This project exports an object with three datasets:

```node
const dataset = require('movies-dataset');
/*
 * {
 *   movies: [...],
 *   directors: [...],
 *   actressesAndActors: [...],
 * }
 */

dataset.movies
/*
 * [
 *   {
 *     title: "(500) Days of Summer",
 *     directors: ["Marc Webb"],
 *     runtime: "95",
 *     year: "2009",
 *     genres: ["comedy"," drama"," romance"],
 *   },
 *   ...
 * ]
 */

dataset.directors
/*
 * [
 *   "Aamir Khan",
 *   "Abdellatif Kechiche",
 *   "Abel Gance",
 *   ...
 * ]
 */

dataset.actressesAndActors
/*
 * [
 *   "Aaron Eckhart",
 *   "Aaron Taylor-Johnson",
 *   "Abbie Cornish",
 *   ...
 * ]
 */
```

## License

This project is released under the [Apache-2.0 license](https://github.com/Angelmmiguel/movies-dataset/blob/master/LICENSE). By [Angel](https://twitter.com/laux_es)
