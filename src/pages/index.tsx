import { useEffect, useState } from 'react';
import { ProdData } from './api/ruten';

export default function Home() {
  const [prodList, setProdList] = useState<ProdData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/ruten');
      const data: ProdData[] = await res.json();

      setProdList(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <table border={1}>
        <tbody>
          {prodList.map((prod, index) => (
            <tr key={index}>
              <td>{prod.ProdName}</td>
              <td>{prod.PriceRange[0]}</td>
              <td> </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {`https://gcs.rimg.com.tw${prod.Image.replace('_m', '')}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
