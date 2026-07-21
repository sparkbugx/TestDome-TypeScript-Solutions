# 🛒 Mega Store

**Difficulty:** Easy | **Tags:** Arithmetic, Conditional Statements

## 📝 Problem Statement

A megastore offers three types of discounts, which are represented as a `DiscountType` object.

The objective is to implement the `getDiscountedPrice` function. This function must take the following parameters to calculate the final cost:
*   The total weight of the shopping cart.
*   The total price.
*   The discount type.

It must return the final discounted price based on the megastore's specific discount schemes.

*(Note: In the original TestDome environment, the exact discount rates and logic were provided via a video. The TypeScript solution in this repository implements those corresponding conditional statements).*

## 💡 Example

For example, executing the following code:

```typescript
console.log(getDiscountedPrice(12, 100, DiscountType.Weight));

should print: 82

## Initial Code

enum DiscountType {
    Standard,
    Seasonal,
    Weight
}

function getDiscountedPrice(cartWeight: number, totalPrice: number, discountType: DiscountType): number {
    // Write your code here
    return 0;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));
