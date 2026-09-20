// Các phép toán: + - * / %
// Các phép so sánh: > < >= <= == != ---> === !==
// Các phép logic: && (và) || (hoặc) ! (khác hoặc đảo)
// Vòng lặp: for , while (kiểm tra điều kiện trước), do while (thực hiện trước và kiểm tra điều kiện sau)

// Yêu cầu nhập giá trị bàn phím: promp()
// Hàm thông báo: alert()

// Câu lệnh điều kiện: if else, if else if else if ..... else
// Lưu ý: nếu bên trong câu lệnh của mình chỉ có 1 block lệnh thì có thể bỏ đi dấu { }

// Bài Vòng lặp
let n; 
do{
    n = prompt("Enter value")
} while(n < 0)
S
console.log("n is positive")

// Bài 1
let a = prompt("Enter value a:")
let b = prompt("Enter value b:")
if (a > b)
    console.log("A is greater")
else
    console.log("B is greater")

// Bài 2 
let a = prompt("Enter value a:")
let b = prompt("Enter value b:")
let c = prompt("Enter value b:")

if (a < 0){
    console.log("Dấu -");
}
else if (b < 0){
    console.log("Dấu -")
}
else if (c < 0) {
    console.log("Dấu -")
}
else {
    console.log("Dấu +")
}


// Bài 3
for (let i = 0; i <= 15; i++){
    if (i % 2 == 0){
        console.log(i, " even");
    } else{
        console.log(i, "odd")
    }
}
