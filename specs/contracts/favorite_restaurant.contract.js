export const itActsAsFavoriteRestaurantModel = (favoriteProvider) => {
  it('should return the restaurant that has been added', async () => {
    favoriteProvider.putRestaurant({ id: 1 });
    favoriteProvider.putRestaurant({ id: 2 });

    expect(await favoriteProvider.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteProvider.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteProvider.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteProvider.putRestaurant({ uncorrect: 'property' });

    expect(await favoriteProvider.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteProvider.putRestaurant({ id: 1 });
    favoriteProvider.putRestaurant({ id: 2 });

    expect(await favoriteProvider.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteProvider.putRestaurant({ id: 1 });
    favoriteProvider.putRestaurant({ id: 2 });
    favoriteProvider.putRestaurant({ id: 3 });

    await favoriteProvider.deleteRestaurant(1);

    expect(await favoriteProvider.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteProvider.putRestaurant({ id: 1 });
    favoriteProvider.putRestaurant({ id: 2 });
    favoriteProvider.putRestaurant({ id: 3 });

    await favoriteProvider.deleteRestaurant(4);

    expect(await favoriteProvider.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteProvider.putRestaurant({ id: 1, name: 'restaurant a' });
    favoriteProvider.putRestaurant({ id: 2, name: 'restaurant b' });
    favoriteProvider.putRestaurant({ id: 3, name: 'restaurant abc' });
    favoriteProvider.putRestaurant({ id: 4, name: 'ini mah restaurant abcd' });

    expect(await favoriteProvider.searchRestaurants('restaurant a')).toEqual([
      { id: 1, name: 'restaurant a' },
      { id: 3, name: 'restaurant abc' },
      { id: 4, name: 'ini mah restaurant abcd' },
    ]);
  });
};
