import ProductDetails from './products-details';
import type { Product } from '../products-props';

export default async function Product({
    params,
}: {
    params: Promise<{ productId: string }>
}) {

    const { productId } = await params;
    const product = await fetch(`https://fakestoreapi.com/products/${productId}`, { cache: 'force-cache' })
        .then(response => response.json())
        .then(data => data as Product);
    return (
        <ProductDetails product={product} />
    );
}
