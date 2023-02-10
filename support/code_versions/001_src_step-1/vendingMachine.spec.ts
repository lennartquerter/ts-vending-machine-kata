import {VendingMachine} from "./vendingMachine";

describe('vendingMachine', () => {
    const sut = new VendingMachine()
    it('I should be able to view the list of products', () => {
        // -- Arrange

        // -- Act
        const products = sut.listProducts()

        // -- Assert
        expect(products).toBeDefined()
        expect(products.length).toBeGreaterThan(0)
        expect(products).toContain('chocolate')
        expect(products).toContain('chips')
        expect(products).toContain('yfood')
    });
});