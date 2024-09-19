
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
  const correctPassword = "123456"; // Password yang benar

  const password = await askQuestion('Masukkan password Anda: ');

  if (password === correctPassword) {
    console.log("Password benar. Akses diterima.");
  } else {
    console.log("Password salah. Akses ditolak.");
  }

  rl.close();
})();
