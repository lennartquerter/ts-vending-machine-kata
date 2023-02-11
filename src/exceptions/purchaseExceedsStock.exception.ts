export class PurchaseExceedsStock extends Error {
    constructor(available: number) {
        super(`purchase quantity has exceeded stock. remaining: ${available}`);
    }
}