function processPurchase() {
  // Simulasi proses pembelian
  var quantityInput = document.getElementById("quantity");
  var namaInput = document.getElementById("nama");
  var hpInput = document.getElementById("hp");
  var alamatInput = document.getElementById("alamat");

  // Mengambil nilai jumlah pembelian dari input
  var nama = namaInput.value.trim();
  var hp = hpInput.value;
  var alamat = alamatInput.value;
  var quantity = parseInt(quantityInput.value) || 0;
  if (nama === "") {
    alert("Masukkan nama Anda terlebih dahulu!");
  } else if (quantity <= 0) {
    alert("Isi dulu semua dengan benar!");
  } else if (hp === "") {
    alert("Isi dulu semua dengan benar!");
  } else if (alamat === "") {
    alert("Alamatnya mana nyasar aku kau buat bah");
  } else {
    // Tampilkan alert
    alert("Pembelian Anda sedang diproses. Terima kasih!");

    // Setelah alert ditutup, pindah ke halaman lain
    window.location.href = "../index.html";
  }
}
var itemPriceInput = document.getElementById("itemPrice");
var quantityInput = document.getElementById("quantity");
var totalParagraph = document.getElementById("total");

// Menambahkan event listener untuk setiap perubahan pada input jumlah pembelian
quantityInput.addEventListener("input", calculateTotal);

function calculateTotal() {
  // Mengambil nilai harga barang dari input
  var itemPrice = parseFloat(itemPriceInput.value) || 0;
  // Mengambil nilai jumlah pembelian dari input
  var quantity = parseInt(quantityInput.value) || 0;

  // Menghitung total
  var total = itemPrice * quantity;

  // Menetapkan hasil total ke elemen dengan id "totalParagraph"
  totalParagraph.innerText = "Total Pembelian: " + formatToCurrency(total);
}

// Fungsi untuk mengubah format angka menjadi format mata uang Indonesia
function formatToCurrency(amount) {
  return "Rp " + amount.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

function createBubble() {
  const section = document.querySelector("section");
  const createElement = document.createElement("span");
  var size = Math.random() * 60;

  createElement.style.width = size + "px";
  createElement.style.height = size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  section.appendChild(createElement);
  setTimeout(() => {
    createElement.remove();
  }, 4000);
}
setInterval(createBubble, 50);
