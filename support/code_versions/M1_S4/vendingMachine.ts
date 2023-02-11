import {Product} from "./models/product.interface";
import {Receipt} from "./models/receipt.interface";
import {ProductNotFound} from "./exceptions/productNotFound.exception";
import {PurchaseExceedsStock} from "./exceptions/purchaseExceedsStock.exception";

export class VendingMachine {

    private productList: Product[] = [
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

    public listProducts(): Product[] {
        return this.productList
    }

    public purchaseProduct(purchaseQuantity: number, productName: string): Receipt {
        const foundProduct = this.productList.find(product => product.name === productName)

        // throw an error if we don't find this product
        if (foundProduct == null) {
            throw new ProductNotFound(productName)
        }

        // if we don't have enough in stock to serve this request
        if (foundProduct.unitsInStock < purchaseQuantity) {
            throw new PurchaseExceedsStock(foundProduct.unitsInStock)
        }

        // reduce the stock by 1
        foundProduct.unitsInStock -= purchaseQuantity

        // to prevent build-time errors
        return {
            priceInCent: foundProduct.priceInCent,
            productName: foundProduct.name,
            quantity: purchaseQuantity
        }
    }
}