// 1
function changeWord(text, selectedText, changedText) {
    // // membuat setiap kalimat menjadi array yang dipisahkan oleh spasi
    // kalimatTerpisah = text.split(" ")
    
    // // mencari index dari kata yang ingin diubah berdasarkan kata yg kita inginkan
    // kataYangInginDiubah = kalimatTerpisah.indexOf(selectedText)
    
    // // jika index ditemukan maka
    // if (kataYangInginDiubah !== -1) {
    //     // mengubah kata pada index tersebut dengan kata yang kita inginkan
    //     kalimatTerpisah[kataYangInginDiubah] = changedText
    // }
    // else {
    //     // jika tidak ada maka tampilkan kalimat awal
    //     return (kalimatTerpisah.join(" "))
    // }

    // // kalimat akhir yang diubah ditampilkan
    // return(kalimatTerpisah.join(" "))

    return (text.replace(selectedText, changedText))    

}

// 2
checkTypeNumber = (givenNumber) => {
    // cek apakah habis dibagi 2
    if (givenNumber % 2 == 0) {
        // jika ya maka bilangan itu genap
        return "GENAP"
    }
    // jika tidak habis dibagi 2
    else if (givenNumber % 2 >= 0) {
        // jika tidak maka bilangan itu ganjil
        return "GANJIL"
    }
 
    // jika yang dimasukkan bukan angka
    else if (typeof givenNumber === "string") {
        return "Error: Invalid data type"
    }

   
    else if (givenNumber === undefined) {
        return "Error: Bro where is the parameter?"
    }
}

// 3
function checkEmail(email) {
    var validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.match(validRegex)){
        return "VALID"
    }

    else if(typeof email === "number"){
        return "Error: Invalid input type"
    }

    else if(email === undefined) {
        return "Error: No parameter input"
    }

    else {
        return "INVALID"
    }
}

// 4
function isValidPassword(sandi) {
    if (typeof sandi === "number") {
        return "Error: Invalid input type"
    }
    else if (typeof sandi === "undefined"){
        return "Error: No input"
    }
    else if (sandi.match(/[a-z]/g) && sandi.match(
        /[A-Z]/g) && sandi.match(
        /[0-9]/g) && sandi.match(
        /[^a-zA-Z\d]/g) && sandi.length >= 8){
            return true
    }

    else {
        return false
    }

}

// 5
function getSplitName(personName) {
    if (typeof personName === "number") {
        return "Error: Invalid data type"
    }
    else if (typeof personName === "undefined" || personName == ""){
        return "Error: No input"
    }
    namaLengkap = personName.split(" ")

    firstName = namaLengkap[0]
    middleName = namaLengkap[1]
    lastName = namaLengkap[namaLengkap.length - 1]

    switch (namaLengkap.length) {
        case 1:
            return "firstname: "+firstName + " middlename: null" + " lastname: null"
            break;
        
        case 2:
            return "firstname: "+firstName + " middlename: null" + " lastname: "+lastName
            break;

        case 3:
            return "firstname: "+firstName + " middlename: "+middleName + " lastname: "+lastName
            break;

        case namaLengkap.length > 3:
            return "Error: This function is only for 3 characters name"
            break;

        default:
            return "Error: No input"
            break;
    }
}

// 6
function getAngkaTerbesarKedua(dataAngka) {
    if (typeof dataAngka === "undefined" || dataAngka == 0 || dataAngka.length < 2) {
        return "Error: Invalid input"
    }

    dataAngka.sort()

    for (let i = dataAngka.length - 2; i >= 0; i--) {
        if (dataAngka[i] != dataAngka[dataAngka.length - 1]) {
            return dataAngka[i]
        }
        
    }
    return "Error: No second largest number"
}

let arrayAngka1 = [9,4,5,4,3,2,2,9,11]



// 7
const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

getTotalPenjualan = (dataPenjualan) => {
    let totalPenjualan = 0
    for (let i = 0; i < dataPenjualan.length; i++) {
        totalPenjualan += dataPenjualan[i].totalTerjual
       
    }
   return totalPenjualan
}

// 8
const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];


var Modal = dataPenjualanNovel.map((e) => {
    return (e.totalTerjual + e.sisaStok)*e.hargaBeli
})

var Terjual = dataPenjualanNovel.map((e) => {
    return e.totalTerjual * e.hargaJual
})

var totalModal = Modal.reduce((total, modal) => {
    return total + modal
})

var totalTerjual = Terjual.reduce((total, terjual) =>{
    return total + terjual
})

var keuntungan = totalTerjual - totalModal

var presentaseKeuntungan = Math.round((totalModal / totalTerjual)*100)

var kumpulanNovel = dataPenjualanNovel.map((e) =>{
    return e.totalTerjual
})

var novelTerlaris = kumpulanNovel.reduce((prev, current) =>{
    return (current > prev) ? current : prev;
})

var judulNovelTerlaris = dataPenjualanNovel.find((e) =>{
    return e.totalTerjual === novelTerlaris
})

getInfoPenjualan = (dataPenjualan) => {
    return {
        totalKeuntungan : "Rp. " + keuntungan,
        totalModal : "Rp. " + totalModal,
        presentaseKeuntungan : presentaseKeuntungan + "%",
        produkBukuTerlaris : judulNovelTerlaris.namaProduk,
        penulisTerlaris : judulNovelTerlaris.penulis
    }
}