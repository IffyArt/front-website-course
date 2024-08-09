import React, { useState } from 'react';

const NativeForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFormError(true);
      return;
    } else {
      setFormError(false);
    }

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {formError && !email && '帳號為必填欄位'}
      <input
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {formError && !password && '密碼為必填欄位'}

      <input type='submit' />
    </form>
  );
};

export default NativeForm;
