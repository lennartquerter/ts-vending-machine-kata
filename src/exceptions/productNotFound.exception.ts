export class ProductNotFound extends Error {
    constructor(productName: string) {
        super(`no product found with name ${productName}`);
    }
}