enum DiscountType {
    Standard,
    Seasonal,
    Weight
}

function getDiscountedPrice(cartWeight: number, totalPrice: number, discountType: DiscountType): number {
    //Declare discount variable
    let discount = 0
    let finalPrice = 0

    if(cartWeight <= 10 && discountType === DiscountType.Weight){
        discount = totalPrice * 0.06;
        finalPrice = totalPrice - discount;
    }
    else if(cartWeight > 10 && discountType === DiscountType.Weight){
        discount = totalPrice * 0.18
        finalPrice = totalPrice - discount;
    }
    else if(discountType === DiscountType.Standard) {
        discount = totalPrice * 0.06
        finalPrice = totalPrice - discount;
    }
    else if (discountType === DiscountType.Seasonal){
        discount = totalPrice * 0.12
        finalPrice = totalPrice - discount;
    }
    return finalPrice;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));

//Standard Discount, Weight any = 6%
//Seasonal Discount, Weight any = 12%
//Weight Discount, Weight <=10 = 6%
//Weight Discount, Weight >10 = 18%

