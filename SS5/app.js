// Bài 1 tính tổng
function tinh_tong(n){
    let sum = 0;

    for (let i = 1; i <= n; i++)
        sum += i;

    return sum;
}

console.log(tinh_tong(100))

// Bài 2 tìm số nguyên tố

function prime(x){
    let count = 0;

    for (let i = 2; i < x/2; i++){
        if (x % i == 0) {
            count++;
        }
    }

    console.log(count)

    if (count == 0)
        return true
    else
        return false
}

console.log(prime(7))