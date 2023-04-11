
const { response } = require("express")

function loadDoc01(){

document.getElementById("p").innerHTML = 'text'
}

function loadDoc() {


    var xhr = new XMLHttpRequest()

    // xhr.open('get','http://localhost:3000/getData')

    num = document.getElementById('input').value

    // num = document.getElementById('input').value
    // fetch('http://localhost:3000/getData?number='+num)
    // .then(response){
    // console.log(response);
    // document.getElementById("p").innerHTML = response;}
    // .catch((error) => console.log(error))


    
    fetch('http://localhost:3000/getData?number='+num, {})
    .then((response) => {
      // 這裡會得到一個 ReadableStream 的物件
      console.log(response);
      response.text().then(function (text) {
        
        document.getElementById("p").innerHTML = text;
      });
      // 可以透過 blob(), json(), text() 轉成可用的資訊
      
    }).catch((err) => {
      console.log('錯誤:', err);
      
  });
    // src = 'http://localhost:3000/getData?number=' + num.value
    // document.getElementById("p").innerHTML = response.text()

}

