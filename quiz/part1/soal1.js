// Soal 1
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "", peran = "";

function buatPemain(nama = "", peran = ""){
    return {
        nama: nama,
        peran: peran
    }
}

function cekPeran(pemain){
    if(pemain.nama === ""){
        return "Nama wajib diisi!"
    }
    else if(pemain.peran === ""){
        return "Pilih peranmu untuk memulai game!"
    }
    else{
        switch(pemain.peran){
                    case 'Ksatria':
                        return `Halo Ksatria ${pemain.nama}, kamu dapat menyerang dengan senjatamu!`
                    case 'Tabib':
                        return `Halo Tabib ${pemain.nama}, kamu akan membantu temanmu yang terluka`
                    case 'Penyihir':
                        return `Halo Penyihir ${pemain.nama}, ciptakan keajaiban yang membantu kemenanganmu!`
                    default:
                        return "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
                }
    }
}

let pemain1 = buatPemain("", "Ksatria");
let pemain2 = buatPemain("Nina", "");
let pemain3 = buatPemain("Nana", "Penyihir");
//code disini gunakan console.log untuk outputnya

console.log("Selamat Datang di Proxytia!");
console.log(cekPeran(pemain3));
