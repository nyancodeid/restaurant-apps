export const when = (statements, then, otherwise) => Promise.resolve(
  ((statements) ? then() : otherwise()),
);
export const delay = (time) => new Promise(resolve => setTimeout(resolve, time));