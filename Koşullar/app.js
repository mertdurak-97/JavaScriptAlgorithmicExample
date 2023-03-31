// let sinav1 = 70;
// let sinav2 = 45;
// let ortalama = (sinav1+sinav2)/2;
// if (ortalama>=50) {
//     console.log("Başarılı Dönem Sonu: " +ortalama);
// }
// else{
//     console.log("Dönem Tekrarı");
// }

// let yas = Number(prompt("Yaşınız: "));
// let para = Number(prompt("Para Miktarı: "));
// if (yas>18 && para>3500) {
//    alert("Başarılı Şekilde Katılım Sağladınız")
// }
// else{
//     alert("Üzgünüz şartları karşılamıyorsunuz")
// }

// let vize1 = Number(prompt("1.Vize Sınavınız: "));
// let vize2 = Number(prompt("2.Vize Sınavınız: "));
// let final = Number(prompt("Final Sınavınız: "));

// let ortalama = (vize1*0.3)+(vize2*0.3)+(final*0.5);

// if (ortalama>50) {
//     alert("Dönemi Başarıyla Bitirdiniz");
// } else {
//     alert("Dönem Tekrarı");
// }
/***************************************************************************************************** */

// let kilo = Number(prompt("Kilonuzu yazın: "));
// let boy = Number(prompt("Boyunuzu girin: "));
// let sonuc = kilo/(boy*boy);

// if (sonuc<18.5) {
//     alert("İdeal Kilonun Altında");
// } else if(sonuc>=18.5 && sonuc<=24.9) {
//     alert("İdeal Kilonun Üstünde");
// }
// else if(sonuc>=30  && sonuc<=39.9){
//     alert("İdeal Kilonun Çok Üstünde");
// }
// else if(sonuc>=40){
//     alert("İdeal Kilonun Çok Çok Üstünde (Obez)");
// }

/************************************************************************** */
/*
Dizel : 24.53
Benzin : 22.25
LPG : 11.10

Yakıt Tipi ?
Yüklenecek Yakıtın Litresi ?
*/

// let dizel = 24.53 , benzin = 22.75 , lpg = 11.20;
// const yeniSatir = "\n\r";
// let yakitMetin = "1-Dizel"+yeniSatir+"2-Benzin"+yeniSatir+"3-Lpg"+yeniSatir+"Yakıt Türünüzü Seçiniz";
// let yakitTipi = prompt(yakitMetin);

// if(yakitTipi=="1"||yakitTipi=="2"||yakitTipi=="3"){
// let yakitLitre = Number(prompt("Kaç Litre Akaryakıt: "))
// let bakiye = Number(prompt("Bakiye: "))
//     if (yakitTipi=="1"){
//         let odenecekTutar = dizel*yakitLitre;
//             if (odenecekTutar<bakiye) {
//                 bakiye = bakiye - odenecekTutar;
//                 alert("Yakıt Alma İşlemi Başarılıdır"+yeniSatir+"Kalan Bakiye: "+bakiye);
//             }
//             else{
//                 alert("Bakiye Yetersiz"+yeniSatir+"Ödenmesi Gereken: "+odenecekTutar+yeniSatir+"Güncel Bakiye: "+bakiye+yeniSatir+"Eksik Tutar: "+(odenecekTutar-bakiye)+"₺");
//             }
//     }
//     if (yakitTipi=="2"){
//         let odenecekTutar = dizel*yakitLitre;
//             if (odenecekTutar<bakiye) {
//                 bakiye = bakiye - odenecekTutar;
//                 alert("Yakıt Alma İşlemi Başarılıdır"+yeniSatir+"Kalan Bakiye: "+bakiye);
//             }
//             else{
//                 alert("Bakiye Yetersiz"+yeniSatir+"Ödenmesi Gereken: "+odenecekTutar+yeniSatir+"Güncel Bakiye: "+bakiye+yeniSatir+"Eksik Tutar: "+(odenecekTutar-bakiye)+"₺");
//             }
//     }
//     if (yakitTipi=="3"){
//         let odenecekTutar = dizel*yakitLitre;
//             if (odenecekTutar<bakiye) {
//                 bakiye = bakiye - odenecekTutar;
//                 alert("Yakıt Alma İşlemi Başarılıdır"+yeniSatir+"Kalan Bakiye: "+bakiye);
//             }
//             else{
//                 alert("Bakiye Yetersiz"+yeniSatir+"Ödenmesi Gereken: "+odenecekTutar+yeniSatir+"Güncel Bakiye: "+bakiye+yeniSatir+"Eksik Tutar: "+(odenecekTutar-bakiye)+"₺");
//             }
//     }
// }
// else{
//     alert("Lütfen Geçerli Numaralar Giriniz !");
// }
/***************************************************************************************************************************************************************** */

// let write = "Bugün canımın en çok sıkkın olduğu gün, hiçbir zaman mutlu olamadım ve hayalimi yaşayamadım";
// let question = prompt("Bulmak istediğiniz harfi yazınız: ")


// function search(question){
//     let toplam = 0;
//     for (let i = 0; i <write.length; i++) {
//         if (write.charAt(i)==question) {
//             toplam+=1;
//         }
//     }
//     return toplam;
// }
// let sonuc = search(question);
// alert("Toplam Harf Sayısı: "+sonuc);
//******************************************************************************************************************************************************************************* */

