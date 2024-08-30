// src/reducers/counter.ts

import { CountEnum } from 'src/enum/count';

interface CounterState {
  count: number;
}

interface CounterAction {
  type: CountEnum;
  payload?: number;
}

const initialState: CounterState = { count: 0 };

export default function counter(
  state: CounterState = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case CountEnum.INCREMENT:
      return { count: state.count + 1 };
    case CountEnum.DECREMENT:
      return { count: state.count - 1 };
    case CountEnum.SET_COUNT:
      return { count: action.payload || 0 };
    default:
      return state;
  }
}
