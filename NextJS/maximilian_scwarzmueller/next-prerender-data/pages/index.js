// Static generation with getStaticProps and getStaticPaths (SG) - [uid].js
// Server side rendering getServerSideProps (SSR) - [pid].js
// Client side rendering useEffect (CSR) - last-sales.js
// alternatively useSWR  (Stale-While-Revalidate)

import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  return (
    <>
      <h2>Next Pre-Render and Data Fetching Practice</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;
