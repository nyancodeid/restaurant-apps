/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const assert = require('assert');

Feature('Search Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Searching Restaurant', async ({ I }) => {
  I.see("Whopss! it's look like you doesn't have any favorite restaurant.", '.restaurant__empty_result > span');

  I.amOnPage('/');

  I.waitForElement('.restaurant_item__title', 2);
  I.seeElement('.restaurant_item__title');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.waitForElement('.restaurant_item__title', 2);
    I.click(locate('.restaurant_item__title').at(i));
    I.seeElement('#favorite-button');
    I.click('#favorite-button');
    titles.push(await I.grabTextFrom('.detail_content__description h3'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#search-query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#search-query', searchQuery);

  const visibleFavoritedRestaurants = await I.grabNumberOfVisibleElements('.restaurant_item__title');
  assert.strictEqual(matchingRestaurants.length, visibleFavoritedRestaurants);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant_item__title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
