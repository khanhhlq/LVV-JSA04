// Bài 2:
var text_1 = "Hello";
var text_2 = "World!"

console.log(text_1 + " " + text_2)

// Bài 1:
let text = "lvv jsb04";
let result = "";

// Hàm viết hoa: toUpperCase
// Vòng lặp
// Điều kiện

for (let i = 0; i < text.length; i++){
    if (i == 0){
        result = result + text[i].toUpperCase();
    }
    else if (text[i - 1] == " "){
        result = result + text[i].toUpperCase();
    }
    else{
        result = result + text[i];
    }
}
console.log(result)