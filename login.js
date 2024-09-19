const readline = require('readline');  

const rl = readline.createInterface({  
  input: process.stdin,  
  output: process.stdout  
});  

const password = "123456"; // Password tetap  
let orders = []; // Array untuk menyimpan pesanan  
let orderIdCounter = 1; // Counter untuk ID pesanan  

function askQuestion(query) {  
  return new Promise((resolve) => rl.question(query, resolve));  
}  

async function login() {  
  while (true) {  
    let userPassword = await askQuestion('Masukkan password: ');  

    if (userPassword === password) {  
      console.log("Login berhasil!\n");  
      showMenu();  
      return; // Keluar dari loop setelah login berhasil  
    } else {  
      console.log("Password salah, coba lagi.");  
    }  
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
  const customerName = await askQuestion('Masukkan nama customer: ');  
  const productName = await askQuestion('Masukkan nama produk: ');  
  const quantity = await askQuestion('Masukkan jumlah: ');  

  if (!customerName || !productName || isNaN(quantity) || quantity <= 0) {  
    console.log("Input tidak valid. Pastikan semua data diisi dengan benar.");  
    return;     
  }  

  const order = {  
    id: orderIdCounter++, // ID order unik  
    customerName,  
    productName,  
    quantity: parseInt(quantity)  
  };  

  orders.push(order);  
  console.log("Pesanan berhasil dibuat:", order);  
}  

function viewOrders() {  
  if (orders.length === 0) {  
    console.log("Tidak ada pesanan.");  
    return;  
  }  
  console.log("Daftar Pesanan:");  
  orders.forEach(order => {  
    console.log(`ID: ${order.id}, Pelanggan: ${order.customerName}, Produk: ${order.productName}, Jumlah: ${order.quantity}`);  
  });  
}  

async function updateOrder() {  
  const orderId = await askQuestion('Masukkan ID pesanan yang ingin diperbarui: ');  
  const order = orders.find(o => o.id === parseInt(orderId));  

  if (!order) {  
    console.log("Pesanan tidak ditemukan.");  
    return;  
  }  

  const newCustomerName = await askQuestion('Masukkan nama pelanggan baru (tekan enter untuk tetap): ');  
  const newProductName = await askQuestion('Masukkan nama produk baru (tekan enter untuk tetap): ');  
  const newQuantityStr = await askQuestion('Masukkan jumlah baru (tekan enter untuk tetap): ');  

  if (newCustomerName) order.customerName = newCustomerName;  
  if (newProductName) order.productName = newProductName;  
  if (newQuantityStr && !isNaN(newQuantityStr) && newQuantityStr > 0) {  
    order.quantity = parseInt(newQuantityStr);  
  }  

  console.log("Pesanan berhasil diperbarui:", order);  
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

// Memulai aplikasi dengan login  
login();