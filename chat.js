const readline = require('readline');  

// Membuat antarmuka readline  
const rl = readline.createInterface({  
  input: process.stdin,  
  output: process.stdout  
});  

// Fungsi untuk meminta pertanyaan  
function askQuestion(query) {  
  return new Promise((resolve) => rl.question(query, resolve));  
}  

// Fungsi utama untuk menjalankan bot  
(async () => {  
  const responseMap = {  
    "halo": "Hai! Apa kabar?",  
    "siapa kamu?": "Aku adalah bot sederhana.",
    "oi":"apa lu kagak jelas",
    "selamat tinggal": "Sampai jumpa lagi!"  
  };  

  console.log("Bot: Hai! Saya adalah bot percakapan. Ketik 'exit' untuk keluar.");  

  while (true) {  
    // Menunggu input dari pengguna  
    const question = await askQuestion('Anda: ');  

    // Memeriksa apakah pengguna ingin keluar  
    if (question.toLowerCase() === 'exit') {  
      console.log("Bot: Sampai jumpa!");  
      rl.close();  
      break;  
    }  

    // Menjawab sesuai pertanyaan atau memberikan balasan default  
    const response = responseMap[question] || "Maaf, saya tidak mengerti.";  
    console.log(`Bot: ${response}`);  
  }  
})();