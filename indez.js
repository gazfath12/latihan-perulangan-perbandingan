// optional chaining()
const user = {
    address : {
        city:"solo"
    }
};
const city = user?.address?.city;
if (!city) {
    console.log("kota tidak di temuakan")
}
console.log(city);

const newCity = city ?? "online";
console.log("kota",newCity);

function factorial(n) {
    if (n===0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5))

// matrik
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for (let i in matrix) {
    for (let j in matrix[i]) {
        console.log(matrix[i][j])
    }
}

