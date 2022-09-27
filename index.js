let valami={
    egycim:"Poker Face",
    hosszusag:230
}
class Zene{
    constructor(cim,hossz) {
        this.cím=cim;
        this.hossz=hossz;
    }
    
}
function gombnyomas(){
    let cim=document.getElementById("cim").value;
    let hossz=parseFloat(document.getElementById("hossz").value);
    let zene=new Zene(cim,hossz)
    let asd=cim +" " +hossz;
    document.getElementById("kimenet").textContent=asd;
}
let zeneszámok=[];