new Vue({
    el:"app",
    data:{
        count:0,
        computedCount:0,
        result:""
    },
    methods:{
      result : function (){
        console.log("Method çalıştı")
        return this.count > 10 ? "10'dan büyüktür" : "10'dan büyük değildir"
      }
    },
    computed : {
        component : function(){
            console.log("Computed çalıştı")  
            return this.count > 10 ? "10'dan büyüktür" : "10'dan büyük değildir"
        }

    },
    watch : {
      count : function(value){
        flag= this

        setTimeout(function(){
          flag.count = 0; //bu functiona girdiği zaman yukardaki count değerini görmüyor onun için settimeout dışından bir this değişkeni belirledik
        },1500) 
      }
    }

});
 //Computed props ; İçerisinde kullanılan property'lerden biri değiştiğinde çalıştırılır. Fakat Methods her render işlemi sırasında çalışır. En temel performans farkı bu.Computed Methodu tokatlar performansta. Senkron çalışır. Asenkron çalıştırması için vue bize watch inctence'ı sunar. Data içindeki verileri gözlemlememizi sağlar.

 //Kısaltmalarda zaman kazanmak için : v-on:click ksımında v-on yerine '@click' , v-bind:href kısmında v-bind yerine de sadece ' : '

