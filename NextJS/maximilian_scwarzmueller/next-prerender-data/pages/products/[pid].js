// This file represents a product detail page that handles dynamic routing.
// The [pid] in the file name indicates that it accepts dynamic parameters for the product ID (pid).
// The ProductDetailPage component receives props as a parameter and renders the product title and description.
// The product details are obtained through the getStaticProps function, which reads data from a JSON file
// and finds the product matching the provided pid parameter.
// If the product is not found, it returns a 404 page.
// The getStaticPaths function is responsible for generating the paths for all the available products
// based on the data from the JSON file.

import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h2>Title: {loadedProduct.title}</h2>
      <h2>Description: {loadedProduct.description}</h2>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  //if no product found (ex. p4) we don't get error, we get a 404 page
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams,
    fallback: true, //true, false, 'block'
  };
}

export default ProductDetailPage;
