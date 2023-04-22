
const { response } = require("express")

function loadDoc() {

    num = document.getElementById('input').value



    // fetch('http://localhost:3000/getData?number=' + num, {} || 'https://remote-assignments.onrender.com/getData?number=' + num, {})
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




    // let url = 'https://remote-assignments.onrender.com/getData?number=' + num;

    // function CheckError(response) {
    //   if (response.status !== 200) {
    //     url = 'http://localhost:3000/getData?number=' + num;
    //     return Promise.reject(new Error('Network response was not ok'));
    //   }
    //   return response;
    // }

    // fetch(url)
    //   .then(CheckError)
    //   .then(response => response.text())
    //   .then(data => {
    //     document.getElementById("p").innerHTML = data;
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     console.log('使用後備 URL 重新發送請求...');
    //     url = 'http://localhost:3000/getData?number=' + num;
    //     fetch(url)
    //       .then(CheckError)
    //       .then(response => response.text())
    //       .then(data => {
    //         document.getElementById("p").innerHTML = data;
    //       })
    //       .catch(error => {
    //         console.error('Error:', error);
    //       });
    //   });


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





    // Now call the function inside fetch promise resolver


}

