import Products from './products';
export default async function About() {
      const products = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 3600 } })
          .then(response => response.json())
          .then(data => data);
  return <Products products={products} />;
}
