"use client";
import { useContext } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardActions,
    CardImage,
    CardSubtitle
} from '@progress/kendo-react-layout';
import { useRouter } from 'next/navigation';
import { starIcon, starOutlineIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';
import { Button } from '@progress/kendo-react-buttons';
import { CartContext } from '../../../../context/CartContext';
import type { Product } from '../products-props';

type Props = {
    product: Product;
}

export default function ProductDetails({ product }: Props) {
    const router = useRouter();
    const { onAdd, onRemove, isProductInCart } = useContext(CartContext);
    return (
        <Card style={{ height: '500px' }}>
            <CardImage src={product.image} style={{ width: '300px', height: '250px', objectFit: 'contain' }} />
            <div>
                <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardSubtitle>
                        <span className="reviews">
                            {Array.from({ length: 5 }, (_, i) => {
                                return (
                                    <SvgIcon key={i} icon={i < Math.floor(product.rating.rate) ? starIcon : starOutlineIcon} style={{ color: i < Math.floor(product.rating.rate) ? '#ffce2a' : 'gray' }} />
                                );

                            })}
                            <div>{`${product.rating.rate}/5`} ({product.rating.count})</div>
                        </span>
                    </CardSubtitle>
                </CardHeader>
                <CardBody>
                    <p>
                        {product.description}
                    </p>
                </CardBody>
                <CardActions>
                    <Button fillMode="solid" themeColor={'primary'} type="button" onClick={() => (isProductInCart(product.id) ? onRemove(product.id) : onAdd(product))}>
                        {isProductInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
                    </Button>
                    {isProductInCart(product.id) && (
                        <Button fillMode="solid" themeColor={'primary'} type="button" onClick={() => router.push('/home/products/cart')}>
                            Buy Now
                        </Button>
                    )}
                </CardActions>
            </div>
        </Card>
    );
}
