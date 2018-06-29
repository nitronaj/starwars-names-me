import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const mainExport = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};

export default mainExport;
