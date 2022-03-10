var sapiPakBudi = 10
var sapiPakDayat = 20
var sapiPakAmin = 30

if (sapiPakBudi >= sapiPakDayat) {
    console.log("Pak Budi sugih")
}
else if (sapiPakBudi <= sapiPakAmin) {
    console.log("Sapi Pak Amin lebih banyak daripada sapi Pak Budi")
}
else {
    console.log("Au amat dah")
}


var sepatuPakAdi = 32
var sepatuPakRahmat = 40
const sepatuToko= [32, 23, 80, 54, 33, 43, 65]

switch (sepatuToko) {
    case sepatuPakAdi:
        console.log("Sepatu Pak Adi tersedia di toko")
        break;
    
        case sepatuPakRahmat:
        console.log("Sepatu Pak Rahmat tersedia di toko")
        break;
    
    default:
        console.log("Gatau lah")
        break;
}

