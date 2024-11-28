/**
 * todo 1 : take a price from user (product actual price) -- 20
 * todo 2 : add vat with Actual price (20 + 4) --> 24
 * todo 3 : gave discout with priceWithVat --> (24 - 5) --> 19
 * todo 4 : display the actual price , vetPrice and discountPrice
 * @param(a , b)
 */

const takeAcualPrice = +prompt('Enter your buing price ');

// vatAdder Function implement
const vatAdder = (actualPrice = 0, vat = 10)=> {
    const vatWithPrice = actualPrice + (actualPrice*vat/100);
    return [vatWithPrice , vat]
    
}

// make discount function imlement
const discountMaker = (vatWithPrice = 0 , discountRate = 30) => {
    const discountPrice = vatWithPrice - (vatWithPrice*discountRate/100)
    return [discountPrice , discountRate]
}

const RecivedVatDetails = vatAdder(takeAcualPrice , 10)
const recivedDiscountDetails = discountMaker( RecivedVatDetails[0] , 30);

// Display the result
document.getElementById("actualPrice").innerHTML = takeAcualPrice;
document.getElementById("ProductVat").innerHTML = `${RecivedVatDetails[1]}%`;
document.getElementById("ProductPriceWithVat").innerHTML = `${RecivedVatDetails[0]}`;
document.getElementById("ProductDiscout").innerHTML = `${recivedDiscountDetails[1]}%`;
document.getElementById("FinalProductPrice").innerHTML = `${recivedDiscountDetails[0]}`;