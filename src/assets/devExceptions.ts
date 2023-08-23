export const devExceptions = {
  duplicateId: (id: string) => `id ${id} is duplicate. please use a unique id.`,
  videoElementNotFound: (id: string) =>
    `Can't find video element with id: ${id}`,
};
