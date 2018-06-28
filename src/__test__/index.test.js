const starWarsNames = require('../index');

function isArrayOfStrings(array) {
  return array.every(item => typeof item === 'string');
}

function isIncludedIn(array) {
  return function itemIncluded(item) {
    return array.includes(item);
  };
}

describe('starwars-names', () => {
  test('should work', () => {
    expect(true).toBe(true);
  });

  test('should have a list of all vaiable names', () => {
    // starWarsNames.all
    const starWarsAllName = isArrayOfStrings(starWarsNames.all);
    expect(starWarsAllName).toBeTruthy();
  });

  test('should allow me to get random name', () => {
    // starWarsNames.random
    expect(isIncludedIn(starWarsNames.all)(starWarsNames.random())).toBeTruthy();
  });
});
