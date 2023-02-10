import {Product} from "./models/product.interface";

export class VendingMachine {
    public listProducts(): Product[] {
        return [
            {
                name: 'chocolate',
                priceInCent: 100
            },
            {
                name: 'chips',
                priceInCent: 120
            },
            {
                name: 'yfood',
                priceInCent: 399
            },

        ]
    }
}