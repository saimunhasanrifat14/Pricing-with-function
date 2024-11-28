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
    const vatDetails = [vatWithPrice , vat];
    return vatDetails;
    
}

// make discount function imlement
const discountMaker = (vatWithPrice =0 , discountRate = 30) => {
    const discountPrice = vatWithPrice - (vatWithPrice*discountRate/100)
    const discountDetails = [discountPrice , discountRate]
    return discountDetails;
}

// make a display function 
const display = (PactualPrice , pVatWihtPrice , pVat , pDiscountPrice, pDiscountrate) => {
console.log(`
    -----------------Invoice-------------------
    Actual Price    : ${PactualPrice}
    Vat             : ${pVat}
    vat Price       : ${pVatWihtPrice}
    discount rate   : ${pDiscountrate}
    discount price  : ${pDiscountPrice}
    `);

}
const RecivedVatDetails = vatAdder(takeAcualPrice , 10)
const recivedDiscountDetails = discountMaker(recivedDiscountDetails[0], 30);
display(takeAcualPrice , RecivedVatDetails[0], RecivedVatDetails[1], recivedDiscountDetails[0], recivedDiscountDetails[1])