
const { response } = require("express")

function loadDoc() {

    num = document.getElementById('input').value

    let url = '../getData?number=' + num;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("p").innerHTML = data;
        })
        .catch(error => {
            console.error('！）錯誤:', error);
            ;
        });


}

