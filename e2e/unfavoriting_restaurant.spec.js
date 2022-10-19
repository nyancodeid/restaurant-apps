const assert = require('assert');

Feature('Unfavoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unfavoriting an restaurant', async ({ I }) => {
  I.seeElement('.restaurant__empty_result');
  I.see("Whopss! it's look like you doesn't have any favorite restaurant.", '.restaurant__empty_result > span');

  I.amOnPage('/');

  I.waitForElement('.restaurant_item__title', 1.5);
  I.seeElement('.restaurant_item__title');

  const favRestaurant = locate('.restaurant_item__title').first();
  const favRestaurantTitle = await I.grabTextFrom(favRestaurant);
  I.click(favRestaurant);

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant_item__title');

  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant_item__title');

  assert.strictEqual(favRestaurantTitle, favoritedRestaurantTitle);

  const restaurant = locate('.restaurant_item__title').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.seeElement('#favorite-button');
  I.seeTextEquals('Cancel Favorite', '#favorite-button');

  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__empty_result');
  I.dontSee(restaurantTitle);
});
