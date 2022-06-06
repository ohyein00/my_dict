import useWordList from './wordList';

export * from './wordList';
const repositories: any = {
  wordList: useWordList,
};

export default {
  get: (name: string) => repositories[name],
};
