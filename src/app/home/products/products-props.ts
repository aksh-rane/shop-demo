export type Products = Array<Product>;

export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
}