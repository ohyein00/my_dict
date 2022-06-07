import useWordList from './useWordList';

export * from './useWordList';
const repositories: any = {
  wordList: useWordList,
};

export default {
  get: (name: string) => repositories[name],
};
