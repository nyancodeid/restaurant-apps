const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Submit a new restaurant review', async ({ I }) => {
  const review = {
    name: 'KalApps E2E Testing',
    content: 'Ini review yang dibuat menggunakan E2E Testing',
  };

  I.waitForElement('.restaurant_item__title', 2);
  I.seeElement('.restaurant_item__title');
  I.click(locate('.restaurant_item__title').at(1));

  I.seeElement('form.review__form');
  I.fillField('name', review.name);
  I.fillField('review', review.content);
  I.click('.form_content__action button');

  I.waitForResponse('https://restaurant-api.dicoding.dev/review');

  const lastReviewName = await I.grabTextFrom(locate('review-item .review__item_name').last());
  const lastReviewContent = await I.grabTextFrom(locate('review-item .review__item_content').last());

  assert.strictEqual(review.name, lastReviewName.trim());
  assert.strictEqual(review.content, lastReviewContent.trim());
});

Scenario('Submit a new restaurant review without review content filled', async ({ I }) => {
  const review = {
    name: 'KalApps E2E Testing',
  };

  I.waitForElement('.restaurant_item__title', 2);
  I.seeElement('.restaurant_item__title');
  I.click(locate('.restaurant_item__title').at(1));

  const numberOfReviewItemBefore = await I.grabNumberOfVisibleElements('review-item');

  I.seeElement('form.review__form');
  I.fillField('name', review.name);
  I.click('.form_content__action button');

  const numberOfReviewItemAfter = await I.grabNumberOfVisibleElements('review-item');
  // should no different
  assert.strictEqual(numberOfReviewItemBefore, numberOfReviewItemAfter);
});
