import { useEffect } from 'react';
import { getWordApi } from '../redux/wordReducer';
import { useAppDispatch } from './storeHooks';

// eslint-disable-next-line import/prefer-default-export
export const checkSelectorGetApi = (selector: any, getApi: Function, setData?: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selector.length < 1) {
      dispatch(getApi());
    }
  }, []);
};
