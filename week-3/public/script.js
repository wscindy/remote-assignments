
const { response } = require("express")

function loadDoc() {

    num = document.getElementById('input').value



    fetch('http://localhost:3000/getData?number=' + num, {} || 'https://remote-assignments.onrender.com/getData?number=' + num, {})
        .then((response) => {
            // 這裡會得到一個 ReadableStream 的物件
            console.log(response);
            response.text().then(function (text) {

                document.getElementById("p").innerHTML = text;
            });
            // 可以透過 blob(), json(), text() 轉成可用的資訊

        }).catch((err) => {
            console.log('錯誤:', err);

            // fetch('https://remote-assignments.onrender.com/getData?number=' + num, {})
            //     .then((response) => {
            //         // 這裡會得到一個 ReadableStream 的物件
            //         console.log(response);
            //         response.text().then(function (text) {

            //             document.getElementById("p").innerHTML = text;
            //         });
            //         // 可以透過 blob(), json(), text() 轉成可用的資訊

            //     }).catch((err) => {
            //         console.log('錯誤:', err);

            //     });
        });


}

