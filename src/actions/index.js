export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

// 增加 value 参数 用於設定 count 的值
export const setCount = (value) => ({
  type: 'SET_COUNT',
  value,
});
