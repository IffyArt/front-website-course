import React, { useState } from 'react';

function MultiInputForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // 從 event.target 中解構出 name 和 value
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default MultiInputForm;
