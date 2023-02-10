import {Product} from "./models/product.interface";

export class VendingMachine {
    public listProducts(): Product[] {
        return [
            {
                name: 'chocolate',
                priceInCent: 100,
                unitsInStock: 10,
            },
            {
                name: 'chips',
                priceInCent: 120,
                unitsInStock: 10,
            },
            {
                name: 'yfood',
                priceInCent: 399,
                unitsInStock: 10,
            },

        ]
    }
}