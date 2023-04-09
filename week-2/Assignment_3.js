function calculate(data) {
    // your code here
    let result = 0

    const { discount, products } = data;

    for (let index = 0; index < products.length; index++) {

        let itemPrices = products[index].price * (1 - discount)
        result += itemPrices


    }

    return result

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