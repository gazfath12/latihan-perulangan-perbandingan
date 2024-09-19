
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {  
  number = await askQuestion('Masukkan nama Anda: ');

  console.log(`Selamat Siang ${number}.`);
  rl.close();
})();