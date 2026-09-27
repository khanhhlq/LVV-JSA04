// / Khởi tạo mảng
// Mảng toàn kiểu dữ liệu number
let array_number = [1, 2, 3, 4, 5]
// Mảng toàn kiểu dữ liệu string
let array_string = ["Apple", "Banana", "Cherry"]
// Mảng kiểu dữ liêu mix (Number, String, Boolean)
let array_mix = [2026, "MindX", true]

// / Truy vấn phần từ của mảng
// In ra phần tử vị trí thứ 3 của mảng array_number
console.log(array_number[3])
// In ra phần tử vị trí thứ 1 của mảng array_string
console.log(array_string[1])
// In ra phần tử vị trí thứ 2 của mảng array_string
console.log(array_mix[2])

// / Duyệt mảng (Ví dụ: duyệt mảng array_number)
// Cách lấy độ dài của mảng .length
for (let i = 0; i < array_number.length; i++){
    console.log(array_number[i])
}

console.log("--------")

// Thêm phần tử mới vào mảng (push và splice)
array_number.push(6, 7)
for (let i = 0; i < array_number.length; i++){
    console.log(array_number[i])
}

console.log("--------")

array_number.splice(5, 3, "New item")

for (let i = 0; i < array_number.length; i++){
    console.log(array_number[i])
}

console.log("--------")


// Cập nhập phần tử vị trí thứ 1 của mảng array_number
array_number[1] = "New item 2"

for (let i = 0; i < array_number.length; i++){
    console.log(array_number[i])
}

console.log("--------")

// Tìm kiếm phần tử trong mảng array_string
// Nếu có phần tử đó trong mảng thì sẽ in ra 
// vị trí của nó trong mảng
// Nếu không có trong mảng thì in ra -1
console.log(array_string.indexOf("Cherry"))
console.log(array_string.indexOf("Row"))

console.log("--------")
// Xóa phần trong mảng dùng splice
// Với số 2 là vị trí bắt đầu xóa
// Với 1 là deleteCount số lượng phần tử xóa sau đó
array_mix.splice(2,1)
for (let i = 0; i < array_mix.length; i++){
    console.log(array_mix[i])
}
console.log("--------")

// Object

// Tạo Objet
let person = {
    name: "Le Quoc Khanh",
    gender: "male"
}

// Truy vấn object
// Cách 1
console.log(person.name)
// Cách 2
console.log(person['name'])

console.log("--------")
// Duyệt object
for (let key in person){
    console.log(key)
}

console.log("--------")
// Thêm key cho object
// Cách 1
person.occupation = "developer"
// Cách 2
person["level"] = "100"
for (let key in person){
    console.log(key)
}

console.log("--------")
// Tìm kiếm xem có key trong object hay không
if ('gender' in person){
    console.log("Yes, key")
}

if (person.hasOwnProperty('level')){
    console.log("Yes, key")
}

console.log("--------")
// Xóa 1 key trong object
delete person.gender
for (let key in person){
    console.log(key)
}

// DOM
let element = document.createElement('p')
// Dùng để thêm thẻ p vào bên trong thẻ body
document.body.appendChild(element)
element.innerHTML = "Đoạn văn 1"
// Thêm số [0] vì trong HTML có 2 thẻ p riêng class nên chỉ
// định thẻ p vị thứ thứ mấy (bắt đầu từ vị trí 0)
let text_1 = document.getElementsByClassName('text-1')[0]
let text_2 = document.getElementById('text-2')

let code_1 = text_1.innerHTML
code_1 = code_1 + ' :AAA'
text_1.innerHTML = code_1

let code_2 = text_2.innerHTML
code_2 = code_2 + ' :AAA'
text_2.innerHTML = code_2