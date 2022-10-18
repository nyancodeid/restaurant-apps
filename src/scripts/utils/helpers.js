export const when = (statements, then, otherwise) => Promise.resolve(
  ((statements) ? then() : otherwise()),
);
