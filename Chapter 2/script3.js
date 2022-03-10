var penumpang = []
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if ( penumpang.length == 0 ) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang)

        // kembalikan isi array & keluar dari function
        return penumpang
    }
    else {
        // telusuri seluruh kursi dari awal
        for (let i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if( penumpang[i] == undefined ) {
                // tambahkan penumpang ke kursi kosong tersebut
                penumpang[i] = namaPenumpang
                // kembalikan nilai array dan keluar dari function 
                return penumpang
            }
            
            // jika ada penumpang yang namanya sama
            else if( penumpang[i] == namaPenumpang ) {
                console.log(namaPenumpang + " sudah ada di dalam angkot.")
                return penumpang
            }

            // jika kursi penuh
            else if ( i == penumpang.length - 1 ) {
                penumpang.push(namaPenumpang)

                return penumpang
            }

        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot masih kosong
    if ( penumpang.length == 0 ) {
        console.log ("Angkot masih kosong")
        return penumpang
    }

    else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang){
                penumpang[i] = undefined
                return penumpang
            }

            else if (i == penumpang.length -1) {
                console.log(namaPenumpang + " tidak ada di dalam angkot")
            }
            
        }
    }

}