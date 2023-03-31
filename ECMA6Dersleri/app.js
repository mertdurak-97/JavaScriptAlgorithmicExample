//?ARROW FUNCTION

        // const solution = ()=>{
        //     console.log("Burası Dünya Değil")
        // }
        // solution();

//?PARAMETRELİ 

        // const solution = (firstName,LastName)=>console.log(firstName,LastName)
        // solution("Mert","Durak");

//!NOT: Eğer ArrowFunc içi tek satır koddan oluşuyorsa direkt kıvırcık par. sil okun yanına yazdır

//?PARAMETRELİ 

        // const solution = firstName=>console.log(firstName)
        // solution("MERT")

//!NOT: Eğer ki tek bir parametreden oluşuyorsa metodun içi parantezleri dahi silebilirsin..


//PARAMETRELİ GERİYE DEĞER DÖNDÜREN

        // const solution = (x)=>{
        //     return x*x*x
        // }
        // console.log("Sonuç: "+solution(5))

//!NOT:
        // const solution = x=> x*x*x
   
        // console.log("Sonuç: "+solution(5))

//!Eğer tek satır return ile döneceğimiz yer varsa direkt süslü parantezleri ve return anahtarını da kaldırabiliyoruz         

/**********************************************************************************************/

//?DESTRUCTING
//DİZLERLE
        // const solution = (a,b)=>{
        //     const topla = a+b
        //     const cıkart = a-b
        //     const carp = a*b
        //     const bolme = a/b

        //     let serial = [topla,cıkart,carp,bolme]
        //     return serial
        // }
        // let [x,y,z,q] = solution(5,10)
        // console.log(x,y,z,q)
//OBJELERLE
        // const detail = {
        //     firstName:"Mert",
        //     lastName:"Durak",
        //     salary: 14500,
        //     age: 25
        // } 
        // let person ={firstName,lastName,salary,age} 
        // console.log(firstName,lastName,salary,age)       

//?Spread Operatörü ---> dilim dilim böler ve istediğimiz yerlerin içine ekleme yapar.Örn : dizi

            // let serial = ["MERT","DENİZ","FURKAN","FATMA"]
            // let newSerial = []

            // newSerial[0]=serial[0]
            // newSerial[1]=serial[1]
            // newSerial[2]=serial[2]
            // newSerial[3]=serial[3]

            // console.log(newSerial) //!Böyle yapmaktansa amele gibi ;

// let serial = ["MERT","DENİZ","FURKAN","FATMA"] 
// let newSerial=[...serial]
// console.log(newSerial)      

