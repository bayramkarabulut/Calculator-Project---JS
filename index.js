// genel değişkenler
var durum = false , opt = "" , sonuc = 0;

// Nesnelerin tanımlanması

let rakam = document.querySelectorAll(".rakam");
let islem = document.querySelector("#islem");
var opr = document.querySelectorAll(".opr");
let gosterge = document.querySelector("#gosterge");
let btnC = document.querySelector(".btnC");
let btnCE = document.querySelector(".btnCE");
let esit = document.querySelector(".esit");
let nokta = document.querySelector(".nokta");

// foreach ile tüm elemanları gezmesini sağlıuor ve 
// element parametresiyle hangisine tıklandıysa ona işlem 
// yapmasını sağlıyoruz.

rakam.forEach(function(element){
    element.onclick = function(){
        // bastakik sifiri kaldırmak icin
        if(islem.textContent == "0" || durum){
            islem.textContent = "";
        } 
        islem.textContent += this.textContent;
    }
})

opr.forEach(function(element){
    element.onclick = function(){
        durum = true; //durum hatalı mı, basılıp basılmadıgını kontrol eder.
        let opr = this.textContent;
        gosterge.textContent = gosterge.textContent + " " + islem.textContent + " " + opr;
    
    switch(opt) //hafızaya alınan işlem
    // switch case ==> işlem bir döner ve benim istediğim kısmı döndürür.
    {
        case"+":islem.textContent = (sonuc+ Number(islem.textContent));break;
        case"-":islem.textContent = (sonuc- Number(islem.textContent));break;
        case"/":islem.textContent = (sonuc/ Number(islem.textContent));break;
        case"x":islem.textContent = (sonuc* Number(islem.textContent));break;
    }
    sonuc = Number(islem.textContent);
    opt = opr;
    }
})
btnC.onclick = function(){
    islem.textContent="0";
}
btnCE.onclick = function(){
    islem.textContent="0";
    gosterge.textContent="0";
    sonuc=0;
    opt="";
}

esit.onclick = function(){
    gosterge.textContent="";
    durum = true;
    switch(opt){
        case"+":islem.textContent = (sonuc+ Number(islem.textContent));break;
        case"-":islem.textContent = (sonuc- Number(islem.textContent));break;
        case"/":islem.textContent = (sonuc/ Number(islem.textContent));break;
        case"x":islem.textContent = (sonuc* Number(islem.textContent));break;
        default:break;
    }
    sonuc=Number(islem.textContent);
    islem.textContent = sonuc;
    sonuc = 0;
    opt="";
}

nokta.onclick=function(){
    if(!durum && !islem.textContent.includes(".")){
        islem.textContent += ".";
    }
    else if(durum){
        islem.textContent += "0";
    }
    else if(!islem.textContent.includes(".")){
        islem.textContent += ".";
    }

    durum = false;
}