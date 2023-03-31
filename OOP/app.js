//?Class


// class solution{

// constructor(firstName,lastName,salary,age){

//     this.firstName = firstName
//     this.lastName = lastName
//     this.salary = salary
//     this.age = age
// }
// profileSubject(){
 
//     console.log("İsim: "+this.firstName+" Soyisim: "+this.lastName+" Maaş: "+this.salary+" Yaş: "+this.age)
// }
// }
// const sol = new solution("Mert","Durak",15000,25);
// const comp = new solution("Betül","Ahlatlı",14.750,24)
// sol.profileSubject()
// comp.profileSubject()



// class solution{
//     constructor(a,b,c){
//         this.a = a
//         this.b = b
//         this.c = c
//     }
//     parameter(){
//         console.log("İşlem sonuc: "+((this.a*this.b)/this.c))
//     }
// }
// const math = new solution(5,10,5)
// math.parameter();


//?Static Kavramı
//! Static class newlenemez. Türetimi olmaz. Sadece Class'ın isminden çağırılır.
//! Static olarak tanımlama olmamışsa newlenerek türetilerek işlemler yapılır.

    // class solution{
    //     static topla(a,b){
    //         console.log(a+b)
    //     }
    //     cıkart(a,b){
    //         console.log(a-b)
    //     }
    //     carp(a,b){
    //         console.log(a*b)
    //     }
    //     bolme(a,b){
    //         console.log(a/b)
    //     }
    // }

// const sol = new solution();
// sol.topla(5,10);

// solution.topla(20,77)

//?Inheritance Kavramı

    // class person{
    //     firstName = "Mert Durak"

    //     Subject(){
    //         console.log(this.firstName)
    //     }

    // }
    // class student extends person{

    //     Subject(){
    //         console.log("Kayıt student üzerinden geldi"+ this.firstName)
    //     }

    // }

// const person1 = new person();
// person1.Subject()

// const student1 = new student();
// student1.Subject();

//? this , super , super() Kavramları

// class person{
//     firstName = "Mert"
//     write(){
//         console.log(this.firstName);
//     }
// }
// class student extends person{
//     write(){
//         super.write()
//     }
// }
// const student1 = new student();
// student1.write()

// //TODO: THIS İÇİNDE BULUNDUĞU O SINIFI , SUPER BİR ÜST SINIFI ÇAĞIRIR.