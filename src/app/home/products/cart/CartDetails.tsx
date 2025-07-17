"use client";
import { Card, CardActions, CardBody } from "@progress/kendo-react-layout";
import { CartContext } from "../../../../context/CartContext";
import { useContext } from "react";
import Image from "next/image";
import { Button } from "@progress/kendo-react-buttons";
import { plusIcon, minusIcon } from "@progress/kendo-svg-icons";

export default function CartDetails() {
    const { products, updateProductQuantity } = useContext(CartContext);
    return (
        <div style={{ padding: '20px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <h1>Shopping Cart</h1>
            {products.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <Card style={{ width: '100%', padding: '20px' }}>
                    <CardBody>
                        <h2>Items in Cart</h2>
                        <ul>
                            {products.map((product) => (
                                <div key={product.id} style={{ display: 'flex', flexDirection:"row", alignItems: 'center', marginBottom: '10px' }}>
                                    <Image src={product.image} alt={product.title} width={50} height={50} style={{ objectFit: 'contain' }} />
                                    <li><h3>{product.title}</h3></li>
                                    <Button fillMode="solid" themeColor={'primary'} type="button" svgIcon={plusIcon} onClick={() => updateProductQuantity(product, product.quantity, 'increase')}></Button>
                                    <span style={{ margin: '0 10px' }}>{product.quantity}</span>
                                    <Button fillMode="solid" themeColor={'primary'} type="button" svgIcon={minusIcon} onClick={() => updateProductQuantity(product, product.quantity, 'decrease')}></Button>
                                </div>
                            ))}
                        </ul>
                    </CardBody>
                    <CardActions>
                        <Button fillMode="solid" themeColor={'primary'} type="button" onClick={() => alert('Proceeding to checkout')}>
                            Checkout
                        </Button>
                    </CardActions>
                </Card>
            )}
        </div>
    );
}
