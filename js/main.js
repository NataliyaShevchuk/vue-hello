
const  {createApp} = Vue;

createApp({
    data (){ 
    return{
        messaggio: "Ciao! Scegli una destinazione!",
        fotoVietnam: "https://i.picsum.photos/id/46/3264/2448.jpg?hmac=ZHE8nk-Q9uRp4MxgKNvN7V7pYFvA-9BCv99ltY3HBv4",
        fotoBali: "img/bali.jpg",
        fotoNepal: "img/nepal.jpg",
        fotoGiappone: "img/giappone.jpg",
        textWhite: "text-white text-center my-4"
        }
    }
}).mount("#app")
