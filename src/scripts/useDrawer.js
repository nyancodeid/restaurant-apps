export const useDrawer = (selector) => {
  const element = document.querySelector(selector);

  if (!element) return;

  const target = document.querySelector(element.dataset.target);

  element.addEventListener("click", () => {
    target.classList.toggle("nav_list__open");
  });
};
