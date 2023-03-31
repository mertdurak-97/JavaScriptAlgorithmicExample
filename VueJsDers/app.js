new Vue({
    el: "#app", 
    data: {
        title: "Merhaba İlk Vue.Js Dersim | 2023...",
        description: "Vue.Js ile tokatlıycaz sağı solu " ,
        link: "www.google.com" ,//link vermemize rağmen bizi ilgili sayfaya götürmedi. Atribute'lara erişmek için bir yöntem var ; 'v-bind' buradan sonra stringPolition'ları silip çift tırnaklar arasında yazılacak.
        blogLink: "<a href='https://www.youtube.com'>Link </a>"
    },
    methods:{
        mert : function(){
            this.title="Merhaba !!!"
            return this.title + this.description; //Vue instance içinden data proplara ulaşmak için this. anahtar kelimesiyle erişilir.
        }
    }
});

//Directive Kullanımı: Bize Vue.Js tarafından bir işlem yapmamızı sağlayan tanımlamalardır. 'v-band' attribütlerin içine gidip bilgileri alıp vue yapısına sokmak için kullanılır.

//v-once kullanımı : Örnek verelim; metot içinde sadece data'dan title'ı çağıralım. Metotun içine this.title = 'Merhaba !!!' yazdıralım. Ama benim data'daki ilk title'ımın içindeki  "Merhaba İlk Vue.Js Dersim | 2023...", bu kısımla ve benim metodun içine sonradan eklediğim yeni bir title'ı birlikte farklı şekilde bastıracağım. v-once' ı da index.html içinde  stringPolition'unun elementinin içine v-once yazmak yeterli olacaktır. Kısacası verilerin ilk renderdan sonraki yapılarını korumalarını sağlayan anahtardır.

//v-html: datasının html üzerinden nasıl çıktı alacağımızı öğrendik.blogLink: "<a href='https://www.youtube.com'>Link </a>"
