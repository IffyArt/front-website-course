import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<null | { message: string }>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();

      setTimeout(() => {
        setData(data);
      }, 1000);
    };

    fetchData();
  }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
