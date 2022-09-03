let isim = prompt("İsminizi giriniz");
myName = document.querySelector("#myName");
myName.innerHTML = `${isim}`

let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function clockInfo (){
    let tarih = new Date ();
    let gun = days[tarih.getDay()];
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    let tamSaat = document.querySelector("#myClock");
    tamSaat.innerHTML = `${saat}:${dakika}:${saniye} ${gun}`
}
setInterval(clockInfo, 100);