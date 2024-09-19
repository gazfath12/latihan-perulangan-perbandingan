
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const password = "123456"; // Password tetap
let orders = []; // Array untuk menyimpan pesanan
let orderid = 1; // untuk id pesanan

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function login() {
  let userPassword = await askQuestion('Masukkan password: ');

  if (userPassword === password) {
    console.log("Login berhasil!\n");
    showMenu();
  } else {
    console.log("Password salah, coba lagi.");
    rl.close();
  }
}

async function showMenu() {
  console.log("===== MENU UTAMA =====");
  console.log("1. Buat pesanan baru");
  console.log("2. Lihat semua pesanan");
  console.log("3. Perbarui pesanan");
  console.log("4. Hapus pesanan");
  console.log("5. Keluar");
  console.log("======================");

  const choice = await askQuestion('Pilih opsi: ');
  handleMenu(choice);
}

async function handleMenu(choice) {  
    switch (choice) {  
      case '1':  
        await createOrder();  
        break;  
      case '2':  
        viewOrders();  
        break;  
      case '3':  
        await updateOrder();  
        break;  
      case '4':  
        await deleteOrder();  
        break;  
      case '5':  
        console.log("Keluar dari aplikasi...");  
        rl.close();  
        return; // Tidak memanggil showMenu lagi  
      default:  
        console.log("Pilihan tidak valid.");  
    }  
    showMenu(); // Tampilkan menu lagi setelah setiap aksi  
}  
async function createOrder() {
    const customerName = await askQuestion('masukan nama pelangan:');
    const productName = await askQuestion('masukan nama produk:');
    const quantity = await askQuestion('masukan jumalah:')

    if(!customerName || !productName || isNaN(quantity) || quantity <= 0) {
        console.log("inputan tidak benar ulangi ya")
        return;
    }
    const order = {
        id:orderid++, // id user
        customerName,
        productName,
        quantity:parseInt(quantity)
    };
    orders.push(order)
    console.log("pesanan sudah dibuat",order)
}

function viewOrders(){
    if(orders.length === 0 ) {
        console.log('tidak ada pesanan')
        return;
    }
 console.log("daftar tugas")
 orders.forEach(order => {
    console.log(`ID:${order.id},pelanggan: ${order.customerName},produk ${order.productName},jumlah ${order.quantity}`)
 });
}
async function  updateOrder() {
    const orderId = await askQuestion('masukan id yang pengen di update');
    const order = orders.find(o => o.id === parseInt(orderId))
    
    if(!order) {
        console.log("pesanan tidak ditemukan")
        return;
    }  
}
async function deleteOrder() {  
    // Tampilkan daftar pesanan yang ada  
    viewOrders(); // Panggil fungsi untuk melihat pesanan  
  
    const orderId = await askQuestion('Masukkan ID pesanan yang ingin dihapus: ');  
    const orderIndex = orders.findIndex(o => o.id === parseInt(orderId));  
  
    if (orderIndex === -1) {  
      console.log("Pesanan tidak ditemukan.");  
      return;  
    }  
  

    orders.splice(orderIndex, 1);  
    console.log(`Pesanan dengan ID ${orderId} berhasil dihapus.`);  
  }  
login();
// output
