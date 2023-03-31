//!  ASENKRON YAPILAR

        //todo 1) TIMING
        //todo 1) EVENTS(OLAYLAR)
        //todo 1) HTTP İSTEKLERİ

 //? JAVASCRIPT SENKRON ÇALIŞAN BİR DİLDİR. AMA YUKARDAKİLER JS'İ SENKRON YAPISINI BOZAN YAPILARDIR.   
 //? ÖRNEK ;
 


        // console.log("Mert")

        // setTimeout(() => {
        //         console.log("Asenkron Geldi") // todo: ilk önce 1. ve 4. çalışır sonra 3. en son 4. çalışır
        // }, 1500);
        // setTimeout(() => {
        //         console.log("2.Asenkron Geldi")
        // }, 500);

        // console.log("Durak")

 //!Senkron yapılar asenkron yapıları beklemezler direkt çalışırlar.
 //!CALLBACK / PROMISE / ASYNC & AWAIT / ASENKRON YAPILARI == SENKRON YAPILARA ÇEVİRİRLER...



//! ASENKRON PROBLEMİ 

        //TODO: hTTP PROBLEMİ ;

        //         const users = [
        //                 {userID: 1,
        //                 post: "Mert Post 1 "       
        //                 },
        //                 {userID: 1,
        //                 post: "Mert Post 2 "       
        //                 },
        //                 {userID: 1,
        //                 post: "Mert Post 3 "       
        //                 },
        //                 {userID: 2,
        //                 post: "Furkan Post 1 "       
        //                 },
        //                 {userID: 3,
        //                 post: "Hazal Post 1 "       
        //                 },
        //                 {userID: 3,
        //                 post: "Hazal Post 2 "       
        //                 }
        //         ]
        //         function getUserId(callback) {
        //                 setTimeout(() => {
        //                         //Servise gittiğimizi ve cevabı aldığımızı hayal edelim.
        //                         let userID = 1
        //                         callback(userID)
        //                 }, 2000);
        //         }
        

        // function getPostByUserId(userId) {
        //                 setTimeout(() => {
        //                         users.forEach((user)=>{
        //                                 if (user.userID===userId) {
        //                                         console.log(user.post);
        //                                 }
        //                         })
        //                 }, 1000);
        // }

        // getUserId(getPostByUserId);
        //!NOT: Birbiriyle alakası olan kod parçacıkları varsa bu yapıyı senkrona , birbiriyle alakası olmayan örn; Hava durumu apisi ve döviz kuru apisinden istek atılacağı zaman bunları senkrona çevirmenin manası yok çünkü bunların bir birleriyle hiç bir alakası mantığı yok...

       
       //TODO: CALLBACK NEDİR ? 

//!Callback : Bir fonksiyonu bir fonksiyona parametre olarak geçerek yapıyı asenkrondan senkrona taşımaktır. Süreler fark etmeksizin...

//        function getName(callback) {
//                 setTimeout(() => {
//                         console.log("Mert")
//                         callback()
//                 }, 1000);
//        }
//        function getSurname() {
//                 setTimeout(() => {
//                         console.log("Durak")
//                 }, 500);
//        }

//        getName(getSurname) //? callback == getSurname !



//!AJAX-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//todo: Tarayıcı ile Servis arasındaki köprüyü Ajax sağlar eski bir yöntemdir.FluentApi RestApi günceldir.

// function getData(url){
//         const xhr  = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange",()=>{
//                 if (xhr.readyState===4 && xhr.status===200) {
//                         console.log(JSON.parse(xhr.responseText));
//                 }
//         })
//         xhr.open("GET",url)
//         xhr.send();

// }
// getData("https://jsonplaceholder.typicode.com/users");


//!PROMİSE --------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
? 3 Aşaması vardır ;

? 1-Pending             ----> Beklemek (İstek Atıldığı ilk an bekleme modu)
? 2-Fullfiiled          ----> Başarılı Dönmek(Resolve parametre) -------> Çıktıyı .then(Resolveden gelen parametre , ...) şeklinde alırız
? 3-Rejected            ----> Başarısız Dönmek(Reject parametre) -----> .catch(Reject parametre , ...) şeklinde
*/

// let check = false;
// const promise = new Promise((resolve , reject )=>{
//         if (check) {
//                 console.log("Promise Başarılı")
//         }
//         else{
//                 console.log("Promise Başarısız")
//         }
// });
// console.log(promise);
//-------------------------------------------------------------------------------------
// let check = true;
// function solution() {
//     return new Promise((resolve , reject)=>{
//         if (check){
//                 console.log("Promise'de herhangi bir sıkıntı yoktur...")
//         }
//         else{
//                 console.log("Patladık")
//         }
//     })    
// }
// solution()
// .then((response)=>{
//         console.log(response);
// })
// .catch((error)=>{ 
//         console.log(error);
// })
// .finally(()=>{
//         console.log("Her zaman çalışır...")
// })
//? PROMISE + XMLHTTPREQUEST----------------------------------------------------------------



// function getStudents(url){
//         return new Promise((resolve , reject)=>{
//                 const xhr = new XMLHttpRequest();
//                 try {
//                      xhr.addEventListener("readystatechange",()=>{
//                         if (xhr.readyState===4 && xhr.status===200){
//                                 resolve(JSON.parse(xhr.responseText));
//                         }
//                      })   
//                 } catch (error){
//                         reject(error);
//                 }
//                 xhr.open("GET",url);
//                 xhr.send();
//         })
        
// }
// getStudents("app.json")
// .then((data)=>console.log(data))
// .catch((warning)=>console.log("Hata Oluştu...",warning))

