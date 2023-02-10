## Step 1: Listing products

What should the application do?

We want to build an application where we can insert money, and get out a drink or snack.
so... let's build this iterativly!

1. Write the test first!

vendingMachine.spec.ts

```typescript
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
```

2. See the test fail!

![failing test](../img/1_fail.png)

3. implement the method

vendingMachine.ts
```typescript
export class VendingMachine {
    public listProducts(): string[] {
        return ['chocolate', 'chips', 'yfood']
    }
}
```


4. pass the test


![success test](../img/1_success.png)

