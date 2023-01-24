function startCount(){
    const num = document.getElementById("number")
    if(Number(num.value.length) == 0){
        window.alert("I need a number!!!!!!")
    }
    else{
        document.getElementById("answer").style.cssText = 'height: 450px;' +
'width: 400px;' + "margin: auto;" + "border-radius: 10px;"
+ "box-shadow: 2px 2px 2px black;" + "border: 5px solid #998eee;" + "font-size: 15px;" + "font-weight: bold;" + "padding: 20px;"
        document.getElementById("answer").innerHTML = "MULTIPLICATION TABLE <br> <br> "
        for(let i = 0; i <= 10; i++){
            document.getElementById("answer").innerHTML += `${i} x ${Number(num.value)} = ${Number(num.value)*i} <br> <br>`
        }
    }
}
