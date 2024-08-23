import { NextPage } from 'next';

const FormPage: NextPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    const response = await fetch('/api/submitForm', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <br />
        <label>
          Email:
          <input type='email' name='email' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
