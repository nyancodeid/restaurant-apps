export const useSearch = ({ restaurants }, callback) => {
  const form = document.querySelector(".search_widget__inner");
  const input = form.querySelector(".search_widget__input");
  const reset = form.querySelector(".search_widget__clear");

  const emptyElement = document.querySelector(".restaurant__empty_result");

  const setCount = (count, keyword) => {
    const element = document.querySelector(".restaurant_count");

    if (count === 0) {
      emptyElement.classList.add("active");
    } else {
      emptyElement.classList.remove("active");
    }

    element.innerHTML = `Showing ${count} items out of ${
      restaurants.length
    } total${keyword !== "" ? ` for <b>"${keyword}"</b>` : ""}`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const keyword = input.value || "";

    if (keyword === "") {
      return callback(restaurants);
    }

    const filtered = restaurants.filter((restaurant) => {
      return (
        restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.city.toLowerCase().includes(keyword.toLowerCase())
      );
    });

    setCount(filtered.length, keyword);

    callback(filtered);
  });

  input.addEventListener("input", (event) => {
    const keyword = input.value || "";

    if (keyword !== "" && !reset.classList.contains("active")) {
      reset.classList.add("active");
    } else if (keyword === "" && reset.classList.contains("active")) {
      reset.classList.remove("active");
    }
  });

  reset.addEventListener("click", (event) => {
    reset.classList.remove("active");
    input.value = "";

    setCount(restaurants.length, "");
    callback(restaurants);
  });

  setCount(restaurants.length, "");
  callback(restaurants);
};
