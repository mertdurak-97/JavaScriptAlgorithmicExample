/*      SCOPE TÜRLERİ (Kapsam)


--> Global Scope --> her yerden erişebilen değişkenler
--> Function Scope -->
--> Block Scope


*/

// function method()
// {
//     var sayi = 10;
//     console.log(sayi);
// }

// method();

//basit bir function örneği.Kıvırcık parantezlerin içinde geçerlidir.console.log(sayi); dışarıya alırsak console patlar.

// function method()
// {
//     var b = 6;--------> // function scope
//     if (true)
//     {
//         var a = 5; -------->// block scope
//     }
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//-------->// block scope
//     }
//     while (condition) {
// -------->// block scope
//     }
// }



/*                 Değişkenler

    'var - let - const'
    var değişkeni ile tanımlanan her değişken birer function olmaktadır.

*/
// function metod(){
//     var x = "Merhaba";
//     console.log(x);
//     if (true) {
//         var y = 10;  ---->  block scope içinde dahi var değişkeni tanımlansa bile bu yine bir function özelliği taşımaktadır. Var içinde bulunduğu her durumu function özelliğine geçirir.
//         console.log(y);
//     }
// }
// metod();
//**************************************************************************************** */
/*
 peki let ve const farkı nedir ? 
 aslında bu iki değişken block scope özelliği taşıyor 
*/
// function metod(){
    
//     if (true) {
//         const x = "Burası Dünya Değil";
//         console.log(x);
//     }
    
// }
// metod();
//****************************************************************************************** */
/*
var ile aynı değişken ismi ile iki defa bir çıktıda çağırabilir.
ama let ve const ta farklı değişkenlerde atamalar söz konusudur.
*/
// var a = 1;
// var a = 2;
// console.log(a);

// let a = 1;
// let b = 2;
// console.log(a);
//**************************************************************************************** */
/*
    Let ve Const arasındaki fark ?
*/
// const a = 10;
// a = 15; ------------> değişkenlerin ataması aynı olmak zorundadır. 
// console.log(a);

// let a = 10;
// a = 20; -------------> değişken atamalarının sonucu ne olursa olsun son değeri yazdırır. 
// console.log(a);