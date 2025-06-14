function tampilkan(id) {
  const halaman = document.querySelectorAll('.halaman');
  const tombol = document.querySelectorAll('.menu button');

  // Sembunyikan semua halaman
  halaman.forEach(h => h.classList.remove('aktif'));
  // Hilangkan status aktif di tombol
  tombol.forEach(t => t.classList.remove('aktif'));

  // Tampilkan halaman yang dipilih
  document.getElementById(id).classList.add('aktif');
  document.getElementById(`btn-${id}`).classList.add('aktif');
}
