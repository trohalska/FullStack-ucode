'use strict'

function getInput() {
  let hero = {},
      regexName = /^[a-zA-Z]{1,20}$/,
      regexGender = /^(male|female|)$/i,
      regexAge = /^[1-9]{1,5}$/;

  hero.name = prompt('What animal is the superhero most similar to?');
  if (!hero.name || !regexName.exec(hero.name)) {
    alert('Error input, try again.');
    return;
  }

  hero.gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
  if (regexGender.exec(hero.gender) === null) {
    alert('Error input, try again.');
    return;
  }

  hero.age = prompt('How old is the superhero?');
  if (!hero.age || !regexAge.exec(hero.age)) {
    alert('Error input, try again.');
    return;
  }

  alert('The superhero name is: '.concat(hero.name,
        '-', getDescription(hero), '!'));
}

function getDescription(hero) {
  if (hero.age < 18) {
    if (hero.gender === 'male') {
      return 'boy';
    } else if (hero.gender === 'female') {
      return 'girl';
    } else {
      return 'kid';
    }
  } else {
    if (hero.gender === 'male') {
      return 'man';
    } else if (hero.gender === 'female') {
      return 'woman';
    } else {
      return 'hero';
    }
  }
}

getInput();