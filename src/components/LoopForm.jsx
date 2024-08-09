import React from 'react';
import { useForm } from 'react-hook-form';

const formFields = [
  {
    label: '電子信箱',
    name: 'email',
    type: 'email',
    rules: { required: '帳號為必填欄位', maxLength: 80 },
  },
  {
    label: '密碼',
    name: 'password',
    type: 'password',
    rules: { required: '密碼為必填欄位' },
  },
];

const LoopForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((field) => (
        <React.Fragment key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name, field.rules)}
          />
          {errors[field.name] && errors[field.name].message}
        </React.Fragment>
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default LoopForm;
