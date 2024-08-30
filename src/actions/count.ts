// src/actions/count.ts

import { CountEnum } from 'src/enum/count';

export const increment = () => ({
  type: CountEnum.INCREMENT,
});

export const decrement = () => ({
  type: CountEnum.DECREMENT,
});

export const setCount = (payload: number) => ({
  type: CountEnum.SET_COUNT,
  payload,
});
