
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
const arabicMapping = {
  "a": "اَ", // Alif dengan fatha
  "b": "ب", // Ba
  "c": "ج", // Jim
  "d": "د", // Dal
  "e": "هَ", // Ha dengan fatha
  "f": "ف", // Fa
  "g": "غ", // Ghayn
  "h": "ح", // Ha
  "i": "يِ", // Ya dengan kasra
  "j": "يَ", // Ya dengan fatha
  "k": "ك", // Kaf
  "l": "ل", // Lam
  "m": "م", // Mim
  "n": "ن", // Nun
  "o": "و", // Waw
  "p": "ب", // Tidak ada padanan langsung, gunakan Ba
  "q": "ق", // Qaf
  "r": "ر", // Ra
  "s": "س", // Seen
  "t": "ت", // Ta
  "u": "وُ", // Waw dengan damma
  "v": "ف", // Tidak ada padanan langsung, gunakan Fa
  "w": "و", // Waw
  "x": "س", // Tidak ada padanan langsung, gunakan Seen
  "y": "ي", // Ya
  "z": "ز", // Zay
  " ": " ", // Spasi
};

// Fungsi untuk mengonversi teks Latin ke Arab dengan harokat
function textToArabicWithHarokat(text) {
  return text.split("").map(char => arabicMapping[char.toLowerCase()] || char).join("");
}

// Contoh penggunaan
const latinText = await askQuestion('Nama Anda: '); 
const arabicText = textToArabicWithHarokat(latinText);
console.log(`Teks dalam Arab: ${arabicText}`);
  rl.close();
})();
