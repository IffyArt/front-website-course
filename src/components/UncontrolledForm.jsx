import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value); // 直接從 DOM 節點獲取值
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default UncontrolledForm;
