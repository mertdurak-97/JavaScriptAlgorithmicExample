new Vue({
    el:"#app",
    data:{
        sayac:0,
        x :0,
        y :0,
        name:"Mert"
    },
    methods: {
        showAlert: function(){
            alert('Deniz,Furkan')
        },
        coordinatorValf: function(step ,event){
            this.sayac += step
            this.x = event.clientX;
            this.y = event.clientY;
        },
        sayacArttır: function(step){
            this.sayac +=step;
        },
        alert : function(event){
            alert(event.target.value);
        }
    }
});

//Event Objesinden Event Verisini almak nasıl olur ? 'koordinasyon örneği'
//Event Objesinden İstediğim Event verisini kendim nasıl yollarım ?
//Event Modifer ? Kısıtlama yaparız. '.stop'
//Klavye Eventleri ? = '<input type="text" v-on:keyup.enter.space="alert"> .enter .space'
//Template içerisinde JavaScripts kodu yazmak ? = vue datalarından gelenleri template içerisindeki alanlara defalarca aktarmak mümkün (yani vue tarafında tanımlamaları yapılmış html kısmında aynı değişkeni defalarca kullanmak yazmak mümkün lakin tek bir şart var ! tek bir satıra bağlı kalarak.)

//Two-Way-Data(İki yönlü veri iletişimi);