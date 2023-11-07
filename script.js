const hasil = document.getElementById("hasil");

let angkaUser;
do{
    angkaUser = parseInt(prompt("Tolong Masukan Angka Yang Diinginkan..."));
}
while(isNaN(angkaUser))

// console.log(angkaUser);
if(angkaUser % 2 == 0){
    hasil.innerText = `angka ${angkaUser} merupakan bilangan GENAP`;
}else{
    hasil.innerText = `angka ${angkaUser} merupakan bilangan GANJIL`;
}

// hasil.innerText = "asdasd";
// console.log(hasil);