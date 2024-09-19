for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  // output
//2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

  // soal 2
const a = 10;
const b = 25;
const c = 15;
// i sini, kita memeriksa apakah nilai a lebih besar dari b dan c. Jika kondisi ini benar (true), maka nilai dari terbesar akan di-set menjadi a.
let terbesar;

if (a > b && a > c) {
  terbesar = a;
} else if (b > a && b > c) {
  terbesar = b;
} else {
  terbesar = c;
}

console.log(`Bilangan terbesar adalah ${terbesar}`);
// Bilangan terbesar adalah 25

// soal 3
const bilangan = 12345;
let jumlahDigit = 0;
let temp = bilangan;

while (temp > 0) {
  temp = Math.floor(temp / 10);
  jumlahDigit++;
}

console.log(`Jumlah digit dari ${bilangan} adalah ${jumlahDigit}`);
// Jumlah digit dari 12345 adalah 5

// soal 4

const angka = 5;
for (let i = 1; i <= 10; i++) {
 console.log(`${angka} x ${i} = ${angka * i}`);}
 // output
 //5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50 

//saol 5

const tahun = 2024;

if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
  console.log(`${tahun} adalah tahun kabisat.`);
} else {
  console.log(`${tahun} bukan tahun kabisat.`);
}
// 2024 adalah tahun kabisat.

// soal 6

const n = 5;
let faktorial = 1;

for (let i = 1; i <= n; i++) {
  faktorial *= i;
}

console.log(`Faktorial dari ${n} adalah ${faktorial}`);
// Faktorial dari 5 adalah 120

// soal 7

const jumlahBilangan = 10;
let ast = 0, bst = 1;

for (let i = 0; i < jumlahBilangan; i++) {
  console.log(a);
  let temp = a;
  ast = b;
  bst = temp + b;
}
//
// saal 8

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let jumlahGenap = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    jumlahGenap += array[i];
  }
}

console.log(`Jumlah bilangan genap adalah ${jumlahGenap}`);
//Jumlah bilangan genap adalah 30

// soal 9
const tinggi = 5;

for (let i = 1; i <= tinggi; i++) {
  let baris = '';
  for (let j = 1; j <= i; j++) {
    baris += '*';
  }
  console.log(baris);}
 //*
// **
// ***
// ****
// *****
// saol 10

const nilai = [80, 90, 85, 70, 95];
let total = 0;

for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}

const rataRata = total / nilai.length;
console.log(`Rata-rata nilai adalah ${rataRata}`);
//Rata-rata nilai adalah 84

  // soal  generator string acak

  function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
  
    return result;
  }
  
  console.log(generateRandomString(10)); // Menghasilkan string acak dengan 10 karakter
  //YJXDAOIJZN






