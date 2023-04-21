function ajax(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}

function render(data) {
    console.log(JSON.stringify(data))
    for (let i = 0; i < 3; i++) {
        const container = document.getElementById("products" + [i]);
        // console.log(JSON.stringify(data[i].name));
        container.innerHTML = `<h1>${data[i].name}</h1><p>${data[i].price} 元</p><p>${data[i].description}</p>`;
    }

}

const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then(data => render(data));