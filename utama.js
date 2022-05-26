// // Cara penulisan ini namanya adalah "fungsi" (function)
// // akan dipelajari nanti yah !
// function kalkulasiNilaiTotal(uts, uas, tugas) {
//     // TODO: 1. set nilaiUts dari parameter `uts`
//     const nilaiUts = uts;
  
//     // TODO: 2. set nilaiUas dari parameter `uas`
//     const nilaiUas = uas;
  
//     // TODO: 3. set nilaiTugas dari parameter `tugas`
//     const nilaiTugas = tugas;
  
//     // TODO: 4. lakukan perhitungan di sini
//     // nilaiTotal didapat dari penjumlahan sebagai berikut
//     // - 30% dari nilai UTS
//     // - 30% dari nilai Tugas
//     // - 40% dari nilai UAS
//     const nilaiTotal = (0.3 * uts) + (0.3 * tugas) + (0.4 * uas);
  
//     // JANGAN DIMODIFIKASI
//     return nilaiTotal;
//   };
  
//   function cetakHasil(total) {
//     // TODO: 5. set nilaiTotal dari parameter `total`
//     const nilaiTotal = total;
    
//     // TODO: 6. dengan menggunakan relational operator
//     // buatlah pernyataan apakah orang ini dianggap lulus atau tidak
//     // dilihat dari apakah nilaiTotal lebih besar sama dengan 70
//     const apakahLulus = nilaiTotal >= 70;
  
//     // Bagian ini tidak DIMODIFIKASI
//     let kalimatHasil = "Selamat anda lulus dengan nilai " + nilaiTotal;
  
//     // Cara penulisan ini namanya adalah `pernyataan kondisi` (conditional statement)
//     // akan dipelajari nanti yah !
//     if(apakahLulus) {
//       // TODO: 7. tuliskan hasil akhir - berhasil lulus
//       // Ganti kalimatHasil jadi [Selamat ! Anda lulus dengan nilai <nilaiTotal>.]
  
//       console.log(kalimatHasil);
//     } else {
//       // TODO: 8. tuliskan hasil akhir - tidak lulus
//       // Ganti kalimatHasil jadi [Mohon maaf... Anda dinyatakan tidak lulus karena nilai Anda kurang dari 70.]
//       kalimatHasil = "Mohon maaf, anda dinyatakan tidak lulus";
//       console.log(kalimatHasil);
//     }
//   }
  
//   // Main function
//   // JANGAN DIMODIFIKASI
//   function main() {
//     // Anak 1: Lulus
//     let nilaiAnakPertama = kalkulasiNilaiTotal(80,70,70);
//     cetakHasil(nilaiAnakPertama);
//     // Output: Selamat ! Anda lulus dengan nilai 73.
  
//     // Anak 2: Tidak Lulus
//     let nilaiAnakKedua = kalkulasiNilaiTotal(70,60,70);
//     cetakHasil(nilaiAnakKedua);
//     // Output: Mohon maaf... Anda dinyatakan tidak lulus karena nilai Anda kurang dari 70.
//   }
  
//   main();

// let hasil = (3 > 5) || (4%2 === 0);
// let hasil1 = (5 === "5") && (2 !== 2);

// console.log(hasil);
// console.log(hasil1);


// const arr = [100, 200, 300];
// const arr2 = [];

// arr2[0] = 100;
// arr2[1] = 200;
// arr2[2] = 300;

// arr2.push(400);

// console.log(arr);
// console.log(arr2);

// const BarisKolom = [];

// // Baris
// BarisKolom[0] = [];
// BarisKolom[1] = [];
// BarisKolom[2] = [];

// // Kolom
// BarisKolom[0][0] = 100;
// BarisKolom[0][1] = 200;
// BarisKolom[0][2] = 300;

// BarisKolom[1][0] = 400;
// BarisKolom[1][1] = 500;
// BarisKolom[1][2] = 600;

// BarisKolom[2][0] = 700;
// BarisKolom[2][1] = 800;
// BarisKolom[2][2] = 900;

// console.log(BarisKolom);

const roster = [];
const arrGuru = [];
const arrMurid = [];
const arrSekuriti = [];

arrGuru.push("andre", "Bima", "charles");
arrMurid.push("Dodit", "Echa", "Fina");
arrSekuriti.push("Gareng", "Hilmi", "Ina");

roster.push(arrGuru, arrMurid, arrSekuriti);
console.log(roster);