# Step 4

_learned: refactoring to internal properties_

Now that we can get a list, see the price & know the stock, it is time
to actually buy something from our vending machine. When someone does a purchase, they expect
to get a receipt of the purchased item, the price and quantity.

Let's see how we can easily write a test, and refactor our code so it keeps working at all times.


### Write the expected outcome

```typescript

it('can purchase a product, and get a receipt', () => {
        // -- Arrange

        // -- Act
        const receipt = sut.purchaseProduct(1, 'chocolate')

        // -- Assert
        expect(receipt).toBeDefined()
        expect(receipt.priceInCent).toEqual(100)
        expect(receipt.quantityPurchased).toEqual(1)
    })


```

### See the test Fail

![failing test](../../img/4_fail.png)

### Implement the code

### See the test Pass

![success test](../../img/4_success.png)

## Onwards!

[Continue to step 5](./5_.md)