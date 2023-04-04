function calculate(data) {
    // your code here
    var finalPrice = []
    var eachPrice = []

    const { discount, products } = data;

    for (let index = 0; index < products.length; index++) {

        var itemPrices = products[index].price * discount
        eachPrice.push(itemPrices)

    }

    let sum = 0;
    for (let n of eachPrice) {
        sum += n;
    }
    finalPrice = sum;


    return finalPrice

}
const discountedPrice = calculate({

    discount: 0.1,
    products: [

        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});

console.log(discountedPrice) // show the total price of all products after applying a discount