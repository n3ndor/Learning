import { useEffect, useState } from "react";
// import useSWR from 'swr';

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const {data, error} = useSWR("https:...")

  // useEffect(() => {
  //   if (data) {
  //     const transformedSales = []; //transform an object into an array
  //     for (const key in data) {
  //       transformedSales.push({
  //         id: key,
  //         username: data[key].username,
  //         volume: data[key].volume,
  //       });
  //     }
  //     setSales(transformedSales);
  //   }
  // });

  useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-course-c81cc-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = []; //transform an object into an array
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales();
        setIsLoading(false);
      });
  }, []);

  // if (error){
  //   return <p>Failed to load.</p>
  // }

  // if(!data || !sales){
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
