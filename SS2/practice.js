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

// Duyệt qua 1 chuỗi
result += text[0].toUpperCase();

for (let i = 1; i < text.length; i++){
    if (text[i - 1] == " ") 
        result += text[i].toUpperCase();
    else
        result += text[i];
}

console.log(result)