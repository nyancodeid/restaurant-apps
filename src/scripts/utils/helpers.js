export const when = (statements, then, otherwise = () => {}) => Promise.resolve(
  ((statements) ? then() : otherwise()),
);

export const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

export const hash = (str) => window.btoa(Array.from(str).reduce((hash, char) => 0 | (31 * hash + char.charCodeAt(0)), 0));
