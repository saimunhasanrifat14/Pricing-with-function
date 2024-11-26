/**
 * todo 1 : take a price from user (product actual price) -- 20
 * todo 2 : add vat with Actual price (20 + 4) --> 24
 * todo 3 : gave discout with priceWithVat --> (24 - 5) --> 19
 * todo 4 : display the actual price , vetPrice and discountPrice
 * @param(a , b)
 */

const takeAcualPrice = +prompt('Enter your buing price ');


const vatAdder = (actualPrice = 0, vat = 10)=> {
    const vatFurmula = actualPrice + (actualPrice*vat/100);
    const vatDetails = [vatWithPrice , vat];
    return vatDetails
    
}


const discountMaker = (vatWithPrice =0 , discountRate = 30) => {
    const discountPrice = 100 - (100*10/100)
    const discountDetails = [discountPrice , discountRate]
    return discountDetails
}


const RecivedVatDetails = vatAdder(400 , 10)
console.log(RecivedVatDetails);
