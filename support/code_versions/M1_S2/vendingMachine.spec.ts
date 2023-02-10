import {VendingMachine} from "./vendingMachine";

describe('vendingMachine', () => {
    const sut = new VendingMachine()
    it('I should be able to view the list of products, with prices', () => {
        // -- Arrange

        // -- Act
        const products = sut.listProducts()

        // -- Assert
        expect(products).toBeDefined()
        expect(products.length).toEqual(3)
        expect(products).toEqual(expect.arrayContaining([{name: 'chocolate', priceInCent: 100}]))
        expect(products).toEqual(expect.arrayContaining([{name: 'chips', priceInCent: 120}]))
        expect(products).toEqual(expect.arrayContaining([{name: 'yfood', priceInCent: 399}]))
    });
});