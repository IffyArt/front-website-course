import React, { useState } from 'react';

function BasicForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 防止表單提交後頁面刷新
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default BasicForm;
