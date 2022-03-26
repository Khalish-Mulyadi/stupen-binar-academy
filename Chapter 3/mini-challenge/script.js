const sepatu = [
  {
    nama: "jordan A",
    warna: "biru",
    ukuran: 32,
  },
  {
    nama: "jordan B",
    warna: "merah",
    ukuran: 31,
  },

  {
    nama: "jordan C",
    warna: "hijau",
    ukuran: 32.5,
  },

  {
    nama: "jordan D",
    warna: "pink",
    ukuran: 26,
  },

  {
    nama: "jordan E",
    warna: "gray",
    ukuran: 29,
  },
];

var urutanSepatu = sepatu.sort((a, b) => {
  return a.ukuran - b.ukuran;
});

var ukuranSepatu = sepatu.map((e) => {
  return e.ukuran;
});

var sepatuTerbesar = Math.max.apply(null, ukuranSepatu);

console.log(urutanSepatu);
console.log("Ukuran sepatu terbesar adalah: " + sepatuTerbesar);
