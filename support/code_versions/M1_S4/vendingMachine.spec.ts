import {VendingMachine} from "./vendingMachine";
import {ProductNotFound} from "./exceptions/productNotFound.exception";
import {PurchaseExceedsStock} from "./exceptions/purchaseExceedsStock.exception";

describe('vendingMachine', () => {
    let sut: VendingMachine

    beforeEach(() => {
        sut = new VendingMachine()
    })

    it('I should be able to view the list of products, with prices and units in stock', () => {
        // -- Arrange

        // -- Act
        const products = sut.listProducts()

        // -- Assert
        expect(products).toBeDefined()
        expect(products.length).toEqual(3)
        expect(products).toEqual(expect.arrayContaining([{name: 'chocolate', priceInCent: 100, unitsInStock: 10}]))
        expect(products).toEqual(expect.arrayContaining([{name: 'chips', priceInCent: 120, unitsInStock: 10}]))
        expect(products).toEqual(expect.arrayContaining([{name: 'yfood', priceInCent: 399, unitsInStock: 10}]))
    });

    it('can purchase a product, and get a receipt', () => {
        // -- Arrange

        // -- Act
        const receipt = sut.purchaseProduct(1, 'chocolate')

        // -- Assert
        expect(receipt).toBeDefined()
        expect(receipt.priceInCent).toEqual(100)
        expect(receipt.quantity).toEqual(1)
        expect(receipt.productName).toEqual('chocolate')
    })

    it('will throw an error when the product is not found', () => {
        // -- Arrange
        // -- Act
        // -- Assert
        expect(() => sut.purchaseProduct(1, 'product-not-found')).toThrowError(ProductNotFound)
    })

    it('Should inform the user that he has requested more items than available, with the remaining quantity', () => {
        // -- Arrange
        const errorFn = () => sut.purchaseProduct(100, 'chocolate')
        // -- Act
        // -- Assert
        expect(errorFn).toThrowError(PurchaseExceedsStock)
        expect(errorFn).toThrowError('purchase quantity has exceeded stock. remaining: 10')
    })
});