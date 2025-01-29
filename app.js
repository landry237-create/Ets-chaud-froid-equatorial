

//fonction pour afficher le message d'alerte

function showmessage(){
    const messagealerte = document.getElementById('messagealerte');
    messagealerte.style.display='block';
    setTimeout(()=>{
        messagealerte.style.display = 'none';
    }, 3000); //le message apparait après 3 secondes
}

const btn_responsive = document.getElementById('btn-responsive');
const secondNav = document.getElementById('secondNav');
let toggle = false;
btn_responsive.addEventListener('click',function(){
    if(toggle){
        secondNav.style.transform ="translateX(300px)";
    }else{
        secondNav.style.transform ="translateX(-50px)";
    }
    toggle = !toggle;
    
})