//Soal 1


// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 1;
let j = 1;

while(i < 2){
    console.log("Looping Pertama ");
    while(j <= 3){
        console.log("Lopping maju " + j + " kali");
        j++;
    }
    console.log("Looping Kedua ");
    while(j >= 1){
        console.log("Lopping mundur " + j + " kali");
        j--;
    }
    i++;
    console.log("Looping Selesai ");
}
