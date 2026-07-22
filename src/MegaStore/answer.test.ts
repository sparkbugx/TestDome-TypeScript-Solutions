import {DiscountType, getDiscountedPrice} from "./answer";

describe("Mega Store Discount Logic", () => {
    it('Should apply a 6% discount regardless of weight', () => {
        expect(getDiscountedPrice(5, 100, DiscountType.Standard)).toBe(94);
        expect(getDiscountedPrice(20, 100, DiscountType.Standard)).toBe(94);
    });
});

describe('Seasonal Discount', () => {
 it('should apply at 12% discount regardless of weight', () => {
     expect(getDiscountedPrice(5, 100, DiscountType.Seasonal)).toBe(88);
     expect(getDiscountedPrice(20, 100, DiscountType.Seasonal)).toBe(88);
 })
})

describe('Weight Discount', () => {
 it('should apply a 6% discount if weight is less than 10', () =>{
     expect(getDiscountedPrice(5,100, DiscountType.Weight)).toBe(94);
 });
it('should apply a 6% discount if weight is equals to 10', () => {
    expect(getDiscountedPrice(10,100, DiscountType.Weight)).toBe(94);
});
it('should apply a 18% discount if weight is greater than 10', () => {
    expect(getDiscountedPrice(11,100, DiscountType.Weight)).toBe(82);
    expect(getDiscountedPrice(50,100, DiscountType.Weight)).toBe(82);
});
});