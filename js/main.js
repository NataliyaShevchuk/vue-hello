
const  {createApp} = Vue;

createApp({
    data (){ 
    return{
        messaggio: "Ciao! Scegli una destinazione!",
        fotoHawaii: "img/hawaii.jpg",
        fotoBali: "img/bali.jpg",
        fotoNepal: "img/nepal.jpg",
        fotoGiappone: "img/giappone.jpg",
        textWhite: "text-white text-center my-4"
        }
    }
}).mount("#app")
