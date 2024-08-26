// Mengakses elemen tombol dan elemen h1
const button = document.getElementById("ubahteks");
const judul = document.getElementById("judul");

// Menambahkan event listener untuk mengubah teks saat tombol diklik
button.addEventListener("click", function() {
    judul.textContent = "Selamat datang di website buatan anak XI RPL 2";
});
