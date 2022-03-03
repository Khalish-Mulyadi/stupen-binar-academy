// 1  aku mempunyai  4 ekor kambing dan 10 ekor sapi lalu 2 ekor kambing di makan oleh serigala
function sisaTernak(sapi, kambing) {
    return sapi + (kambing -2)
}
let hasil1 = sisaTernak(10, 4)
console.log(hasil1)

// 2 aku ingin menghitung linkaran  jari jari 15cm  ? hasilnya berapa
function luasLingkaran(jari) {
    return 3.14 * jari * jari
}
let hasil2 = luasLingkaran(15)
console.log(hasil2)

/* 3 aku mempunyai kelereng 30 , 
nina mempnyai kelereng 29  , aku ingin membandingkan klerengku dengan nina 
apakah kelerengku lebih banyak darip pada nina , 
jika lebih bnayak tampilkan  "Hore lebih banyak" */

function bandingKelereng(kelerengSaya, kelerengNina) {
    if (kelerengSaya > kelerengNina) {
        return "Punyaku lebih banyak, cupu Nina"
    }
    else if(kelerengSaya < kelerengNina) {
        return "Iyaa dah si paling banyak kelereng"
    }
    else{
        return "Lah??"
    }
}
let hasil3 = bandingKelereng(30, 29)
console.log(hasil3)