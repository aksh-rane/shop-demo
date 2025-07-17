
"use client";
import {
    Card,
    CardHeader,
    CardTitle,
    CardImage,
    CardSubtitle
} from '@progress/kendo-react-layout';
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { starIcon, starOutlineIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';
import ProductSearch from './ProductSearch';

import { useRouter } from 'next/navigation';

import type { Products } from './products-props'; // Adjust the import path as necessary
import { useState } from 'react';

type Props = {
    products: Products;
}

export default function Products({ products }: Props) {
    const router = useRouter();

    const [filteredProducts, setFilteredProducts] = useState<Products>(products);

    const handleSearchChange = (value: string) => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };
    return (
        <>
        <ProductSearch onChange={handleSearchChange} />
        <GridLayout
            rows={[{ height: '400px' }, { height: '400px' }, { height: '400px' }]}
            cols={[{ width: '33%' }, { width: '33%' }, { width: '33%' }]}
            gap={{ rows: 5, cols: 5 }}
        >

            {filteredProducts.map((product, index) => (
                <GridLayoutItem key={product.id} col={index % 3} row={Math.floor(index / 3)} style={{ padding: '0 5px 5px' }}>
                    <Card style={{ height: '400px', padding: "20px" }} onClick={() => (router.push(`/home/products/${product.id}`))}>
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
                        </div>
                    </Card>
                </GridLayoutItem>
            ))}
        </GridLayout>
        </>
    );
}