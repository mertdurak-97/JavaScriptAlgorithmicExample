/*
! push    : Dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner.
! unshift : Dizinin başına eleman ekler , eleman sayısını geriye döner.

! pop   : Dizinin sonundan eleman siler , eleman sayısını döner.
! shift : Dizinin başındaki elemanı siler , eleman sayısını döner.

! splice(index,incdex)  : eleman eklemek ve silmek için kullanılır

! toString : diziyi stringe çevirebilir
! join     : diziyi stringe çevirir farkı ise araya eleman eklenmesidir



? concat                : dizileri birleştirmek için kullanılır.
? slice(dilimlemek)     : diziyi istenilen yerlerden bölüp yeni bir dizi oluşturmak için kullanılır.
? legth                 : dizinin uzunluğunu verir.
? reverse               : dizinin elemanlarını tersine çevirir.
? split(bölmek)         : belirli bir ifadeye göre bölüp diziye çevirmek.
? indexOf               : elemanın index numarasını verir.
? includes              : verilen elemanı içeriyor mu ona bakar. 


*/
// let arabalar = ["Seat","Wolksvagen","Opel","Mercedes","Nissan"]
// let yedekArac=["Renoult","Auidi","Fıat"]

// arabalar.push("Toyota");
// console.log(arabalar);

// arabalar.unshift("Toyota");
// console.log(arabalar);

// arabalar.pop();
// console.log(arabalar);

// arabalar.shift();
// console.log(arabalar);

// arabalar.splice(0,0,"Auidi") dizinin index numaralarına diledğimiz yerlere ekleme yapabiliriz.
// console.log(arabalar); 
// arabalar.splice(2,0,"Auidi"); dizinin hiç bir elemanını silme sadece ekle.
// console.log(arabalar);
// arabalar.splice(1,3); 1.diziden başla 3 eleman uçur.
// console.log(arabalar);

// let sonuc = arabalar.concat(yedekArac);
// console.log(sonuc);

// let ters = arabalar.reverse();
// console.log(ters);

// let isimler = "Mert , Deniz , Furkan"; ------>virgülden sonrasını arrayList'e çevirir.
// let a = isimler.split(",");
// console.log(a);

// let a = arabalar.indexOf("a");
// if (a==0) {
//     console.log("Belirtilen Eleman Vardır."); ------> Listede varsa : 0 , yoksa : -1 döner 
// }else()=>{

//     console.log("Eleman Yok")
// }

// let a = arabalar.includes("Bmw"); ------> aynı işlemi yapar indexOf'la bu sadece true false döner.
// console.log(a);

// let a = arabalar.includes("Bmv");
// if (a==true) {
//     console.log("Araba galeride mevcut")
// }
// else()=>{
//     console.log("Araba yoktur")
// }
/********************************************************************************************************************************************************************************************* */
// let product1 = {
    
//     productName: "Iphone 12",
//     productPrice: 12.500,
//     productCategory: "Phone"
// }
// let product2 = {
    
//     productName: "Iphone 13 Pro Max 64 Gb",
//     productPrice: 20.500,
//     productCategory: "Phone"
// };
// let product3 = {
    
//     productName: "Iphone 14 Pro Max 128 Gb",
//     productPrice: 40.500,
//     productCategory: "Phone"
// };
// let product4 = {
    
//     productName: "Asus Gaming TUF RTX 3060 16GB RYZEN 5600",
//     productPrice: 26.000,
//     productCategory: "Pc Gaming"
// };
// let product5 = {
    
//     productName: "Msi GamingX RTX 3050 16GB RYZEN 3600",
//     productPrice: 19.750,
//     productCategory: "Pc Gaming"
// };
// let product6 = {
    
//     productName: "LG OLED CURVED 4K TV",
//     productPrice: 50.000,
//     productCategory: "TV"
// };

// let products = [product1,product2,product3,product4,product5,product6];
// let newProductList = [];
// let anseverProduct = prompt("Ürün Ara");

// function getFilterProductFill(products){
//     products.forEach(function(product){
//          if (product.productName.toUpperCase().includes(anseverProduct.toUpperCase())) {
//             newProductList.push(product);
//          }   
   
//     });
   
// };

// function getFilterProductWrite(products){
//     products.forEach(function(product){
//         console.log("------------------------------------");
//         console.log("| "+product.productName+" |"+product.productPrice+" |"+product.productCategory+" |");
//         console.log("------------------------------------");

//     });
// };

// getFilterProductFill(products);
// getFilterProductWrite(newProductList);
/********************************************************************************************************************************************************** */
                                                        /* STRING SINIFININ ÖZEL METOTLARI */ 
/*
! charAt() 
! concat()
! indexOf()
! lastindexof()
! toUpperCase()
! toLowerCase()
! trim()
! slice()
! substring()
! replace()
! split()
! valueOf()
! startsWith()
! endsWith()
*/
// let write = "Selamlar ben talihsiz bir gencim";
// let date = "2023";


// let a = write.charAt(5);
// console.log(a);------->seçili numararlı karakteri seçer.

// let a = write.concat(date);------>birden fazla string ifadeleri birleştirir.
// console.log(a);

// let a = write.indexOf("r");-------->string ifadenin kaçıncı kelimesinde olduğunu belirtir.
// console.log(a);

// console.log(write.trim()); ---->metinlerin arasında boşluk dahi olsa bile .trim() metodu aralarındaki boşlukları siler.

// console.log(write.substring(0,9)); ------>seçilen aralıklardaki kelimeyi söküp alır.

// console.log(write.replace("Selamlar","Merhaba")); ------>ilgili kelimenin yeni versiyonuyla değiştirmesini sağlar.

// console.log(write.split(" "));------------------->splitler string ifadeleri gelir dizinin içine alır.Lakin aralarda referans göstereceğimiz boşluklar vs olmalı.

// console.log(write.startsWith("S"));------------------------>Başlangıçtaki metin ilgili harflemi başlıyorun true ya da false dönmesinde yardımcı olur.

/**************************************************************************************************************************************************************************************** */
//                                                         MATH SINIFI ÖZEL METOTLAR


/*

! flor
! ceil
! round

! max
! min

! random
! abs
! sqrt
! pow

------> PI sayısı
*/
// let books = {
//     bookName: "İnce Memet",
//     bookShelf: "1.Bölüm - 1.Sıra",
//     bookPrice: 25
// }
// let books1 = {
//     bookName: "İki Şehrin Hikayesi",
//     bookShelf: "1.Bölüm - 2.Sıra",
//     bookPrice: 35
// }
// let books2 = {
//     bookName: "İnsan Neyle Yaşar",
//     bookShelf: "1.Bölüm - 3.Sıra",
//     bookPrice: 20
// }
// let books3 = {
//     bookName: "Suç ve Ceza",
//     bookShelf: "1.Bölüm - 4.Sıra",
//     bookPrice: 40
// }
// let books4 = {
//     bookName: "Sefiller",
//     bookShelf: "2.Bölüm - 1.Sıra",
//     bookPrice: 35
// }
// let books5 = {
//     bookName: "1984",
//     bookShelf: "2.Bölüm - 2.Sıra",
//     bookPrice: 50
// }
// let books6 = {
//     bookName: "Fareler ve İnsanlar",
//     bookShelf: "3.Bölüm - 1.Sıra",
//     bookPrice: 35
// }

// let kitapDizi = [books,books1,books2,books3,books4,books5,books6];
// let kitapSec = prompt("Lütfen Aradığınız Kitabı Yazınız.");
// let yeniKitapListe = [];

// function kitapListe(kitapDizi){
//     kitapDizi.forEach(function(kitap){
//         if (kitap.bookName.toUpperCase().includes(kitap.toUpperCase())) {
//             yeniKitapListe.push(kitap);
//         }
//     });
// }
// function kitapBilgiGetir(yeniKitapListe){
//     yeniKitapListe.forEach(function(getir){
//     console.log("-------------------------");
//     console.log("| "+getir.bookName+" |"+getir.bookShelf+" |"+getir.bookPrice+" |");
//     console.log("-------------------------");
//    });
// }
// kitapBilgi(kitapDizi);
// kitapBilgiGetir(yeniKitapListe);




// let sayi =1;
// let toplam = 0; 
// for (let sayi = 1; sayi < 101; sayi++) {
  
//     toplam +=(sayi*sayi*sayi);
// }
// console.log(toplam)





// let maasBilgi = Number(prompt("Lütfen maaş bilginizi yazınız: "));
// let cocukSayisi = Number(prompt("Lütfen çocuk sayısını yazınız: "));

// function ekZam(){
//     let yeniZam = 0;
    
//     if (cocukSayisi==1) {
//         yeniZam = (maasBilgi*15)/100;
//         let toplamMaas= (maasBilgi+yeniZam);
//         alert("1 Çocuğa düşen zam miktarı: "+yeniZam+"₺");
//         alert("Toplam Net Maaş: "+toplamMaas);

//     }
//     else if(cocukSayisi==2){
//         yeniZam = (maasBilgi*20)/100;
//         let toplamMaas= (maasBilgi+yeniZam);
//         alert("2 Çocuğa düşen zam miktarı: "+yeniZam+"₺");
//         alert("Toplam Net Maaş: "+toplamMaas);

//     }
//     else if(cocukSayisi==3){
//         yeniZam = (maasBilgi*25)/100;
//         let toplamMaas= (maasBilgi+yeniZam);
//         alert("3 Çocuğa düşen zam miktarı: "+yeniZam+"₺");
//         alert("Toplam Net Maaş: "+toplamMaas);

//     }
//     else()=>{
//         alert("Zam sınırlarını aştınız...")
//     }
// }
// ekZam();

// let a = Number(prompt("1.Kenar Uzunluk: "));
// let b = Number(prompt("2.Kenar Uzunluk: "));
// let c = Math.sqrt(a*a + b*b);
// alert("Hipotenüs: "+c);

// for (let i = 1; i < 101; i++) {
//     if (i%3==0 && i%5==0) {
//         console.log(i);
//     }
    
// }

// for (let index = 1; index < 101; index++) {
//     if (index%5!==0 && index%7!==0) {
//         console.log(index);
//     }
    
// }

// let number1 = Number(prompt("1.SAYI: "));
// let number2 = Number(prompt("2.SAYI: "));

// function sayi(){
// if (number1>number2) {
//     alert("1.SAYI 2.SAYIDAN BÜYÜKTÜR");
// }
// else if(number1==number2){
//     alert("1.SAYI 2 SAYIYA EŞİT")
// }
// else(number1<number2)
//     alert("2.SAYI 1.SAYIDAN BÜYÜK");
// }
// sayi();





// let number = Number(prompt("1.SAYI: "));
// let sayac = 1;
// let toplam = 0;
// let mod = []

// function sonuc(number){
//     if (sayac>number) {
//         for (let sayac = 1; sayac > number.length; sayac++) {
    
//             toplam = (toplam+sayac);
//             sayac++
//         }
//     }
//     else(sayac<number%2==0)
//     mod.push();
// }
// function diziGöster(mod){
//     alert("Sayının modları: "+mod);
// }
// sonuc(number);
// diziGöster(mod);

// let productPrice = Number(prompt("Ürün Fiyatı:  "));
// let productKdv = (productPrice*18)/100;
// let newPrice = (productKdv+productPrice);
// alert("Ürünün KDV'li fiyatı: "+newPrice+" ₺");

// let positiveNumber = Number(prompt("Tam Bölenlerin Sayısı :  "));
// let i = 1;
// for (let i = 1; i < positiveNumber.length; i++) {
//     if (i%2==0) {
//         alert(i+" tanedir...")
//         i++
//     }
// }

// let katSayi1 = Number(prompt("1.Dereceden ilk katsayı :  "));
// let katSayi2 = Number(prompt("1.Dereceden ikinci katsayı :  "));
// let katSayi3 = Number(prompt("1.Dereceden üçüncü katsayı :  "));
// let sonuc = Math.pow((katSayi3-katSayi2)/katSayi1);
// console.log(sonuc);

// let sayi1 = Number(prompt("1.Katsayı :  "));
// let sayi2 = Number(prompt("2.Katsayı :  "));
// let sayi3 = Number(prompt("3.Katsayı :  "));
// let diskriminant = ((sayi2*sayi2)-4*(sayi1*sayi3));

// let boy = Number(prompt("Boyunuz :  "));
// let kilo = Number(prompt("Kilonuz : "));
// let sonuc =(boy*boy)/kilo;
// if (sonuc< 18,5 ) {
//     alert("Zayıf")
// }
// else if(18,5 <=sonuc < 24,9 ){
//     alert("Normal")
// }
// else if(25 <= sonuc  < 29,9){
//     alert("kilolu")
// }
// else if(30 <= sonuc  < 34,9){
//     alert("I. derece obez")
// }
// else if(35 <= sonuc  < 39,9){
//     alert(" II. derece obez")
// }
// else if( sonuc > 40){
//     alert(" III. derece obez")
// }


/* ARMSTRONG SAYISI
let sayi = prompt("Lütfen Sayı Giriniz: ");
let toplam = 0;
for (let i = 0; i < sayi.length; i++) {
   let rakam = sayi.charAt(i);
   toplam += (rakam*rakam*rakam); 
}
if (sayi==toplam) {
    alert("Armstrong Sayısıdır :)");
}
else{
    alert("Armstrong Sayısı Değildir :(");
}
*/

// let isimler = ["MertFB","DenizFB","Furkan","Murat","FatmaFB","Hazal","Ayşe","Hicran"];
// for (let i = 0; i < isimler.length; i++) {
//     if (isimler[i].includes("FB")){
//         console.log(isimler[i])
//     }
    
// }



// let isimler = ["Mert","Deniz","Furkan"];
// isimler.splice(isimler.indexOf("Deniz"),1)
// for (const isim of isimler) {
//     console.log(isim);
// }




// let personInfo = {
//     name: "Deniz",
//     age: 25
// };
// let personInfo2 = {
//     name: "Mert",
//     age: 25
// };
// let personInfo3 = {
//     name: "Furkan",
//     age: 30
// };
// let personInfo4 = {
//     name: "Hasan",
//     age: 75
// };
// let newList = [personInfo,personInfo2,personInfo3,personInfo4];
// for (const list of newList) {
//     if (list["age"]>30) {
//         console.log(newList.indexOf("Hasan"))
//     }
// }


// let personInfo = {
//     kisi1:{
//         name:'Deniz',
//         age:25
//     },
//     kisi2:{
//         name:'Mert',
//         age:30
//     },
//     kisi3:{
//         name:'Furkan',
//         age:45
//     },
//     kisi4:{
//         name:'Hasan',
//         age:95
//     },
    
// };

// for (const info of Object.values(personInfo)) {
//     if (info.age>30) {
//         console.log(info.name);
//     }

// }Math.random()











// const tahminiSayi = 77;
// const sayilar = [];
// const tahminiFark = [];

// for(let i = 0; i<5;i++){
//     sayilar.push(Math.ceil(Math.random()*100))
// }

// for (const sayi of sayilar) {
//     let fark = tahminiSayi - sayi;
//     if(fark < 0 ){
//         tahminiFark.push(fark * -1);
//     }
//     else{
//         tahminiFark.push(fark );
//     }
// }

// const minFark = Math.min(...tahminiFark);


// console.log("tahmini sayı: " + tahminiSayi)


// console.log("--------------------------------------------------------------")

// for (const sayi of sayilar) {
//     console.log(sayi)
    
// }
// console.log("--------------------------------------------------------------")
// for (const sayi of sayilar) {

//     if(sayi == tahminiSayi){
//         console.log("Bildiniz, nasıl bildin aq");
//         break;
//     }
//     else{
//         let sonuc = null;
//         if((tahminiSayi - minFark) == sayi){
//             sonuc = tahminiSayi - minFark;
            
//         }
//         else if ((tahminiSayi + minFark) == sayi){
//             sonuc = tahminiSayi + minFark;
//         }
//        if(sonuc){
//         console.log("bilemediniz, En yakın sayı: "+ sonuc);
//         break;
//        }
//     }
 
    
// }






// const tahminiSayi = 77;
// const randomSayi = [];
// for (let i = 0; i <5; i++) {
//     randomSayi.push((Math.ceil(Math.random()*100)));
// }
// for (let i = 0; i < randomSayi.length; i++) {
//     if (tahminiSayi==randomSayi[i]) {
//         console.log("Doğru Tahmin")
//         break;
//     }
//     else{
//         console.log("Bilemedin")
//     }
    
// }
// console.log("------------------------------------------")
// for (let i = 0; i < randomSayi.length; i++) {
//     console.log(randomSayi[i]);
    
// }
// console.log("Tahmini Sayı: "+tahminiSayi);







/* 
1) bir array içine kullanıcının istediği kadar random sayı pushlansın (kullanıcı kod içinden girsin (tahmini sayı örneğindeki gibi.)). Bu array içindeki sayıların toplamını, minimum değerini, max değerini çıktıda göstersin.

2) Bir obje tanımlansın içinde rastgele 5 şehrin adları ve plaka kodları tutulsun. Kullanıcı bir plaka girsin ( kod içinden ), Girilen plaka kodu objede var ise o şehrin ismini getirsin yoksa bu şehir bulunmadı yazsın.

3) bir array içine kullanıcının istediği kadar random sayı pushlansın (kullanıcı kod içinden girsin (tahmini sayı örneğindeki gibi.)). Array içindeki çift sayıların toplamından tek sayıların toplamının farkı çıktısı gösterilsin.

Not: en az kod ile ve js özel kodları kullanılmasın.

 Elemanları tam sayı olan bir A dizisinin(20 elemanlı) rastgele sayılar atayan, sonra dizi elemanlarının aritmetik ortalamasını hesaplayan ve elemanlardan kaç tanesinin bu ortalamadan büyük ve küçük olduğunu sayan programın js. kodlarını yazınız.

 
*/





// const randomSayi = 6;
// const randomDizi = []; 
// let toplam = 0;
// for (let i = 0; i < randomSayi; i++) {
//     randomDizi.push((Math.ceil(Math.random()*100)));
//     console.log(i+1+')' +  randomDizi[i] );
//        toplam += randomDizi[i] 
// }
// console.log("Toplam Değer : "+toplam);

// console.log("Max değer: " + Math.max(...randomDizi) )

// console.log("Minimum değer: "+Math.min(...randomDizi));


// let country1 = {
//     cityName: "Ankara",
//     cityId: 06
//     };
// let country2 = {
//     cityName: "İstanbul",
//     cityId: 34
//     };
// let country3 = {
//     cityName: "İzmir",
//     cityId: 35
//     };    
// let country4 = {
//     cityName: "Yozgat",
//     cityId: 66
//     };    
// let country5 = {
//     cityName: "Niğde",
//     cityId: 51
//     };    
// let flag = false;
// let citySeries = [country1,country2,country3,country4,country5];      
// let user = Number(prompt("Lütfen sorgulatacağınız şehrin plaka kodunu giriniz: "));
// for (const cityDetail of citySeries) {
//     if (user==cityDetail.cityId){
//         alert("Şehrinizin bilgisi: "+cityDetail.cityName)
//         flag =true;
//     }
//     if(flag){
//         break;
//     }
// }
// if(!flag){
//  alert("Girmiş olduğunuz şehire ait bilgiler bulunmadı...")
// }



// let kullaniciSayi = 10;
// let randomSayi = [];
// let toplamCift = 0;
// let toplamTek = 0;
// for (let i = 0; i < kullaniciSayi; i++) {
//     randomSayi.push((Math.ceil(Math.random()*100)));
//     if (randomSayi[i]%2==0){
//         toplamCift += randomSayi[i];
//     }
//     else{
//         toplamTek += randomSayi[i];
//     }
// }
// console.log("Çift ve Tek Farkı: "+(toplamCift-toplamTek));



// let a = 1;
// let b = 1;
// let sonuc = 0;

// for (let i = 0; i < 20; i++) {

//     sonuc = (a+b);
//     a=b;
//     b=sonuc;
//     console.log(sonuc)
// }



// let randomSayi = [];
// let aritmetikOrt =0;
// for (let i = 0; i < 3; i++) {
//     randomSayi.push((Math.ceil(Math.random()*100)));
//     console.log(randomSayi[i])
// }

// let toplam = 0;
// for (const sayi of randomSayi) {
//     toplam+= sayi;
// }

// aritmetikOrt = (toplam/3);
// console.log(aritmetikOrt);

// let kucukSayi = 0;
// let buyukSayi = 0;
// for (const sayi of randomSayi) {
//     if(sayi > aritmetikOrt){
//         buyukSayi++;
//     }
//     else{
//         kucukSayi++;
//     }
    
// }


// console.log(`büyük Sayı= ${buyukSayi }  Küçük Sayı= ${kucukSayi}`)

// if (randomSayi>aritmetikOrt){
//     console.log("Dizi aritmetik dizi içinde en büyüğü "+randomSayi[i])
    
// }
// else{
//     console.log("Dizi aritmetik dizi içinde en küçüğü "+randomSayi[i])
   
// }       

// const kralArray = ['Kral1','Kral2','Kral3','Kral4'];
// const agaArray = [];
// for (let i = 0; i < kralArray.length; i++) {
//     let user = prompt("Lütfen aganın ismini girin: ");
//     console.log(user+kralArray[i]);
// }


/*
Bir array içerisine 3 tane random sayı atayalım sıra sıra, adı= randomArray
prompt kullanarak 3 tane kullanıcıdan sayı alalım.
Bunları bir array'a atalım sıra sıra.
Girilen sayılardan herhangi biri randomArray'in elemanına eşit ise bildiniz yazsın ve o sayıyı + index numarasını getirsin. ( birden fazla bilirse aynı döngü tekrarlansın.)
*/

// const randomArray = [7,13,21];
// const userRandom = []
// const bulunanSayi = []

// alert("Başlıyoruz !")
// for (let i = 0; i < 3; i++){
//     let user= Number(prompt("Lütfen bir sayı giriniz: "));
//     userRandom.push(user);
//     console.log(""+user);
// }
// userRandom.forEach(function(sayi){
//     if (randomArray.find(x=>x==sayi)!=null){
//         bulunanSayi.push({sayi:sayi,bulunanIndex:randomArray.indexOf(sayi)});
//         // object => key -> value
//     }
// });
// if (bulunanSayi.length == 0 ) {
//     alert("Sayıları Bulamadınız :(");
// }
// else{
//     bulunanSayi.forEach((itemInfo)=>{
//         console.log('bulunan sayı: ' + itemInfo.sayi + ' '+ 'bulunan index: ' + itemInfo.bulunanIndex)
//     })
// }



// const array = [];
// array.push({yas:30,isim:'mert'});
// for (const item of array) {
//     console.log(item.yas,item.isim)

// }


// let mesaj = prompt("Lütfen Cümlenizi Yazınız: ");
// let sorgu = prompt("Şimdi aratmk istediğiniz harfi yazınız: ");
// let kacHarf = 0;
// for (let i = 0; i < mesaj.length; i++) {
//     if (mesaj.charAt(i)==sorgu) {
//         kacHarf++;
//     }
// }
// console.log(kacHarf);

/*
1.Kendisine parametre olarak gönderilen iki tam sayının OBEB (Ortak Bölenlerin En Büyüğü) ini bulan program kodunu yazınız.
2.Kullanıcının girdiği tam sayının tam bölen pozitif sayıları ekrana bastıran program kodunu yazınız.(30=>: 1 2 3 5 6 10 15 30)
3.Girilen 3 basamaklı sayının basamaklarına ayıran örnek (Birler,Onlar,Yüzler Basamağındaki sayılar)
4.Klavyeden girilen bir cümledeki kelime sayısını bulunuz.
5.C# Console uygulamasında Elemanları kullanıcı tarafından dışarıdan girilen 10 elemanlı bir dizinin elemanlarını %10 arttıran ve ekrana yazdıran örnek
6.Girilen sayının asal olup olmadığını bulan program kodunu yazınız.
7.Girilen 2 sayının aralarında asal olup olmadığını bulan program kodunu yazınız.
8.Kullanıcının girdiği rakamlar ile oluşturalabilecek en büyük ve en küçük sayıyı yazan program kodunu yazınız.
9.Girilen Sayının güçlü sayı olup olmadığını bulan program kodunu yazınız.(145->1!+4!+5!=145)

















let array = [1,3,4,5,8,9];
let enkucuk ="";
array.forEach(element => {
    enkucuk+=element;
});
console.log(enkucuk);
*/

// let odenecekTutar = 0;
// let aracTipi = 0;
// let soru = Number(prompt("1-Taksi \r\n 2-Minibüs \r\n 3-Ticari \r\n Lütfen sorgulatın: "));
// let süre = Number(prompt("Otopark kalış sürenizi yazınız: "))
// if (süre<2) {
//     if (aracTipi=="1") {
//         odenecekTutar = süre*15;
//         alert("Ödenecek Tutar: "+odenecekTutar);
//     }
//     else if(aracTipi=="2"){
//         odenecekTutar = süre*20;
//         alert("Ödenecek Tutar: "+odenecekTutar);
//     }
//     else if(aracTipi=="3"){
//         odenecekTutar = süre*30;
//         alert("Ödenecek Tutar: "+odenecekTutar);
//     }
// }
// else{
//     if (aracTipi=="1") {
//         odenecekTutar = ((süre*15)*20)/100;
//         alert("Ödenecek Tutar: "+odenecekTutar);
//     }
//     else if(aracTipi=="2"){
//         odenecekTutar = ((süre*20)*21)/100;
//         alert("Ödenecek Tutar: "+odenecekTutar);
//     }
//     else if(aracTipi=="3"){
//         odenecekTutar = ((süre*30)*25)/100;
//         alert("Ödenecek Tutar: "+odenecekTutar);
//     }
// }

// mükemmelSayi(28);

// function mükemmelSayi(number){
//     let toplam = 0;
//     for (let i = 0; i < number; i++) {
//        if (number%i==0) {
//             toplam+=i
//        }

//     }
//     if (toplam==number*2) {
//         alert("Mükemmel Sayıdır...");
//     }
//     else{
//         alert("Mükemmel Sayı Değildir :(");
//     }
// } 


// let sayi = Number(prompt("Sayıyı girin: "));
// let sonuc = true;
// for (let i = 2; i < Math.floor(sayi/2); i++) {
//     if (sayi%i==0) {
//         sonuc = false;
//         break;
//     }
    
// }
// if (sonuc) {
//     alert(sayi+ " Asaldır !")
// }
// else{
//     alert(sayi+" Asal Değildir !");
// }


// let sayi1 = 10;
// let sayi2 = 5;
// let kalan = 0;
// let ebob = 0;
// if (sayi1>sayi2) {
//     kalan = (sayi1/sayı2);
//     if (kalan==0) {
//         ebob = sayi2
//     }
    
// }

// console.log("Ortak katların en büyüğü: "+ebob);



// let sayi = Number(prompt("Lütfen sayıyı giriniz..."));
// let sayac = 0 ;
// for (let i = 0; i < sayi; i++) {
//    if (sayi%i==0){
//        alert("Girdiniğiniz sayının tam bölenleri:  "+i)
//         sayac++;
//    } 
// }
// alert("Girmiş olduğunuz sayının tam sayı bölenlerinin sayısı ise: "+sayac);

// const product = [
//     {
//         id: 1,
//         category: "Electroncis",
//         type: "Mobil",
//         name: "Iphone",
//         price: 20000,
//     },
//     {
//         id: 2,
//         category: "Electroncis",
//         type: "Computer",
//         name: "Asus",
//         price: 30000,
//     },
//     {
//         id: 3,
//         category: "Electroncis",
//         type: "Mobile",
//         name: "Samsung",
//         price: 17500,
//     },
// ];

// function productList(product){
//     let sonuc = 0;
//     for (const list of product) {
//         if (list.type==="Mobile") {
//             sonuc = list.price*2
//             console.log("Telefonların Toplam Maliyeti: "+sonuc+" ₺")
//         }
//     }
// }
// productList(product);


// let tahmin , randomSayi , hak = 1; i=0;
//     sayi=Math.round(Math.random()*100); 
// do {

//     tahmin = Number(prompt("Lütfen Tahmini Sayınızı Giriniz: "));
//     if (tahmin>sayi) {
//         alert("Lütfen tahmininizi azaltın...");
//     }
//     if(tahmin<sayi){
//         alert("Lütfen tahmininizi arttırın...");
//     }
//     if(tahmin==sayi){
//         alert("Tahminler Doğrudur :)"+"\r\n"+hak+".Hakkınızda bildiniz...")  
//     }
    
//     hak++;    
//     }

//  while ((tahmin!=sayi)&&hak<10){
//     if (hak>10) {
//         alert("Haklarınız sona erdi... Doğru sayılar: "+"\r\n"+randomSayi)
//     }
//  }

// const randomArray = [];
// const array = [2,3];
// const newArray = [];
// let sonuc = 0;
// for (let i = 0; i < 5; i++) {
//     randomArray.push(Math.round(Math.random()*100)); 
//     console.log(randomArray[i]);
//     for (let j = 0; j < array.length; j++) {
//         sonuc = randomArray[i]*array[j];
//         newArray.push(sonuc);
//     }
// }
// console.log(newArray);




// let c = 1 ;
// for (let i = 15; i <= 20; i++) {
    
//     c *=i; 
// }
// console.log(c)

// 213
// (145->1!+4!+5!=145)

// 2!+3!

// 213  => 2 1 3 ==> numberArray => 



// const sayi = Number(prompt("Sayıyı girin: "));
// const sayiArray = sayi.toString().split('');
// const numberArray = []

// for (const sayi of sayiArray) {
//     numberArray.push(Number(sayi));
// }

// let toplamDeger = 1;
// let asilToplam = 0;
// for(const arrayElement of numberArray){
//     for(let k = 1; k <= arrayElement ; k++){
//         toplamDeger *= k;
//     }
//     asilToplam += toplamDeger;
//     toplamDeger = 1;
// }

// if(sayi == asilToplam){
//     console.log('güçlü sayi');
// }
// else{
//     console.log('güçlü sayı değil');
// }






// 4-2-1-6-8

// const array = [];
// for (let i = 0; i< 5;i++) {
//     const sayi = Number(prompt("Sayıyı girin: "));
//     array.push(sayi);
// }

// let kucukSayi = 0;
// let buyukSayi = 0;

// for (const sayi of array) {
//     kucukSayi = sayi;
//     buyukSayi = sayi;
//     for (const sayi of array) {
//         if(sayi < kucukSayi){
//             kucukSayi = sayi;
//         }
//         if(sayi > buyukSayi){
//             buyukSayi = sayi;
//         }
//     }
// }


// console.log('kucuksayi: '+kucukSayi, 'buyukSayi: '+ buyukSayi);


// let isimler = ["Mert","Deniz","Furkan","Betül"];
// isimler.forEach(name=>console.log(name)); --->ErrorFunction. Eğer içerde tek satırdan oluşan kod blokalrı varsa süslü parantezler açmadan döngü.

//For in  --> ELemanların isimlerini değil sadece elemanların index numarasını verir.
// for (let isim of isimler) {
//     if (isim.includes("Hazal",0)) {
//        alert("Var")
//        break;
//     } 
//     else{
//         alert("YOK")
//         break;
//     }
// }

// for (let isim of isimler) {
//     console.log(isim) ------->Dizinin elemanlarının kendisinin verir.
//     ;
// }

// for (const isim in isimler) {
//     console.log(isim+"|"+isimler[isim]) ------>Dizinin index Numarasıyla birlikte yanında dizinin elemanlarını string algılıyor.
// }

// for (const isim of isimler) {
//     console.log(isim+" |"+isimler.indexOf(isim)) ------> Bu sefer dizinin elemanalrının sağında index numaralarını yazdırdıkç. 
// }


// MAPPING------------------//

// let value;
// const map = new Map();

// map.set(06,"Ankara");
// map.set(35, "İzmir");
// map.set(34, "İstanbul");
// map.set([1,2,3], "Adana") ------->

//get
// console.log(map.get(35));

//size
// value = map.size;

//delete
// value = map.delete(34);
// value = map.size()

//has
// value = map.has(34);
// console.log(value);

//for of'la dönme
// for (const [key,value] of map) {
//     console.log(key,value) ------->destructing kullandık bir nevi
// }

//map'leri Array formatında Foreach ile yazamama sebebi : Map bir Array Türü değil. Çözümü de yukardaki kodda

// for (const value of map.values()) {
//     console.log(value) -------------------> sadece value yazdırma
//     ;
// }

// for (const key of map.keys()) {
//     console.log(key); ------------------> sadece key yazdırdık.
// }


//Mapi Array olarak çevirme
// const array = Array.from(map)
// console.log(array)



//Array'i Map'e çevirme;
// const Array = [
//     [34 ,"İstanbul"],
//     [06, "Ankara"],
//     [35, "İzmir"]
// ]
// const myMap = new Map(Array);
// console.log(myMap);

// const bul = [7,12,78,6,8,0,11]
// const tahminArr = [];
// const bilinenSayi = [];
// let adet = 1;
// for (let i = 0; i < 7; i++) {
//     let tahmin = Number(prompt("Lütfen Tahminlerinizi Giriniz..."));
//     tahminArr.push(tahmin);
// }
// for (let j= 0; j < bul.length; j++) {
//     for (let x = 0; x < tahminArr.length; x++){
//         if (bul[j]==tahminArr[x]) {
//             bilinenSayi.push()
//             adet++
//         }
//     }
// }
// console.log(adet-1+" tane sayıyı doğru tahmin ettiniz :)");
// console.log("--------------------------------------------")


//!!input[[4,3,2,-1], [3,-2,-1,6],[5,-4,0,-8]] output = kaç eksili değer vardır ?


            // const arr = [[4,3,2,-1], [3,-2,-1,6],[5,-4,0,-8]];
            // const newArr = [];

            // for (let i = 0; i < arr.length; i++) {
            //     for (let j = 0; j < arr[i].length; j++) {
            //         if (arr[i][j]<0) {
            //             newArr.push(arr[i][j]).length
            //         }
            //     }
                
            // }

            // console.log(newArr);


//!input[557,874,451,1878,2023,45,50,2,0,1] output = kaç adet çift sayı vardır ? 

            // const newArr = [557,874,451,1878,2023,45,50,2,0,1];
            // const array = [];
            // for (let i = 0; i < newArr.length; i++) {
            //     if (newArr[i]%2==0) {
            //         array.push(newArr[i]);
            //     }
            // }
            // console.log(array);

//!input = bir sayı gir(455). sayıları kendi aralarında çarp(4*5*5). bu sayıyı kendi arasında topla(4+5+5) çıkan sonuçları çıkart.

            // function solution(sayi){
            //     let degisiklik = sayi.toString().split('').map(Number)
            //     return degisiklik.reduce((a,b)=>a*b,1)-degisiklik.reduce((a,b)=>a+b,0);
            // }
            // console.log(solution(455));

//! nums[1,2,3,4,4,3,2,1] , n=4
//! output = [1,4,2,3,3,4,1] => 4 birim ötele ve 4. değeri  koy yanına.

            // function sayi(arr,num){
            //     let newArr = []
            //     for (let i = 0; i < num; i++) {
            //         newArr.push(arr[i])
            //         newArr.push(arr[i+num])
                    
            //     }
            //     return newArr;
            // }
            // console.log(sayi([1,2,3,4,4,3,2,1],4))

//!input = [-2,1,-3,-4,-1,-2,1,-5,4] tekrar eden sayıları sil ! 
//!output = çıkan yeni diziyide kendi aralarında topla !

            // function solution(num){
            //     let newArray = [... new Set(num)]
            //     return newArray.reduce((a,b)=> a+b,0);
            // }
            // console.log(solution([-2,1,-3,-4,-1,-2,1,-5,4]))




//!input = kullanıcıya string bir şeyler yazdır.
//!output = arkasından tekrar eden harfleri sildir.
            // function solution(harf){
            //     let newArr = [...new Set(harf)]
            //     return newArr.reduce((a,b)=> a+b);
            // }
            // console.log(solution("merhaba ben mert durak"))



//!input = sayı girilicek. Sayılar tek tek basamaklarına ayrılacak ve ayrılan basamaklar kendi aralarında çarpılacak. Çıkan değer tek ya da çiftlik kontrolünden geçecek.

                    // function solution(sayi){
                    //     let degisiklik = sayi.toString().split('').map(Number)
                    //     if (degisiklik.reduce((a,b)=> a*b,1) % 2 == 0){
                    //         alert('Çifttir');
                    //     }
                    //     return degisiklik
                    // }
                    // console.log(solution(125678))


//!input = [1,3,5,7,9,4,5,6,7,8,0,2,4,6,8]
//!output = içinde kaç adet tek sayı ve çift sayı olduğıunu yazdır

                // const sayi = [1,3,5,7,9,4,5,6,7,8,0,2,4,6,8];
                // const tekSayi = [];
                // const ciftSayi = [];
                // const ciftCarp = [];

                // for (let i = 0; i < sayi.length; i++) {
                //     if (sayi[i]%2==0){
                //         ciftSayi.push(sayi[i])
                //     }
                //     else{
                //         tekSayi.push(sayi[i])
                //     }
                // }
                // for (let j = 0; j < ciftSayi.length; j++){
                //     ciftCarp.push(ciftSayi[j].toString().split('').map(Number).reduce((a,b)=>a*b,1))
                // }
                // console.log(ciftCarp)

//!input = [2,7,11,15] dizinin elemanlarından toplamları 9' a eşit olanların index numarasını yazdır.

// const solution = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i]+arr[j]==9 &&  i!=j) {
//                 return [i , j]
//             }
            
//         }
//     }
// }
// console.log(solution([2,7,11,15],9))

//!input1=[2,4,3] !input2=[5,6,4] 
//!output=[7,0,8]
//!ama biz böyle istiyoruz ; 
//!exp= 342 + 465 = 807

// const solution = (arr1 , arr2 )=>{
//     return Number(arr1.reverse().join('')) + Number(arr2.reverse().join(''))
// }
// console.log(solution([2,4,3],[5,6,4]))


// !nums1=[1,3] !nums2=[2] 
// !output = 2
// !exp = [1,2,3] median = 2
// !exp = [1,2,3,4] median ,= 2+3/2 = 2,5

// const solution =(arr1 , arr2)=>{
//      arr1.push(...arr2)                                    //! SPREAD OPERATÖRÜ DİZİLERİ ARRAYLİ ŞEKİLLERİNİ SÖKÜP DİĞER DİZİNİN İÇİNE GÖMMEMİZİ SAĞLAR...
//      arr1.sort((a,b)=>a-b)                                           //todo:sıralama metodu 'sort'. Eğer büyükten küçüğe deseydi (b-a) diyecektik.
//      let median = arr1.length/2 - Math.floor(arr1.length/2)
//      if (arr1.length % 2 == 1) {
//         return arr1[arr1.length/2-median]
//      }
//      else{
//         return (arr1[arr1.length/2-median] + arr1[arr1.length/2-median - 1]) / 2
//      }

// }
// console.log(solution([1,3],[2,4] ))

//! 5.5.5.5.5 =>>>>>>>> "5[.]5[.]5[.]5[.]5"

// const solution = (dex)=> {
//  return dex.replaceAll('.','[.]') //TODO: replaceAll() dizilerin saf halinin şeklini alır , istediğin şekle soktuğun simgenin işaretini vb alır. 'Dönüştürür'
// }
// console.log(solution("5.5.5.5.5"))


//!input = [1,3,5,7,9,4,5,6,7,8,0,2,4,6,8]
//!output = içinde kaç adet tek sayı ve çift sayı olduğıunu yazdır

// let num = [1,3,5,7,9,4,5,6,7,8,0,2,4,6,8]
// let cift = []
// let tek = []
// let sayac = 0
// for (let i = 0; i < num.length; i++) {
//     if (num[i]%2==0) {
//         cift.push(num[i])
//     }
//     else{
//         tek.push(num[i])
//     }
// }
// const solution = (arr1)=>{
//     let replay = [...new Set(arr1)]  //todo: new Set =>>>>>>>> tekrar eden dizileri söküp alır.
//     return replay
// }
// console.log(solution(cift))

//! input = bir sayı gir(455). sayıları kendi aralarında çarp(4*5*5). bu sayıyı kendi arasında topla(4+5+5) çıkan sonuçları çıkart.

// const solution = (num)=>{
//     let change =  num.toString().split('').map(Number);
//     return change.reduce((a,b)=> a*b,1) - change.reduce((a,b)=>a+b,0)
        
    
// }
// console.log(solution(455))