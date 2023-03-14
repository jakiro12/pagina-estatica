const allAnchor=document.querySelectorAll('a[href^="#"]')// sleccion todas la etiquetas anchor
const getModal=document.querySelector('.start')
const getBody=document.querySelector('body')
const modalAlert=document.createElement('div')
const facebookDiv=document.querySelector('.social1')
const allSocialMediaUrl={
    facebook:'https://www.google.com/',
    instagram:'',
    linkedin:''
}
const navigaToMiSocialMedia=()=>{
    window.open(`${allSocialMediaUrl.facebook}`,'_blank')
}

getModal.addEventListener('click',function(){
    modalAlert.textContent='hola'
    
    modalAlert.style.width='200px'
    modalAlert.style.height='200px'
    modalAlert.style.border='2px solid red'
    modalAlert.style.color='black'
    modalAlert.style.position='absolute'
    modalAlert.style.left='25%'
    modalAlert.style.top='10%'
    modalAlert.style.background='white'
    modalAlert.style.transition='all 3s'
    getBody.appendChild(modalAlert)
    modalAlert.addEventListener('click',function(){
        getBody.removeChild(modalAlert)
    })
})
allAnchor.forEach((e)=>{ //por cada elemento dentro del array haz lo siguiente [a,a,a,a]
    e.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({  //el this hace referencia al elemento del array
            behavior:"smooth" //movimiento suave
        });
    });
});

facebookDiv.addEventListener('mouseover',function(){
    let title=document.querySelector('.face')
    facebookDiv.style.transform='scale(1.4)'
    title.style.color='green'
    facebookDiv.style.transition='all 1s'
    title.style.setProperty('--linea','100%')
})
facebookDiv.addEventListener('mouseleave',function(){
    let title=document.querySelector('.face')
    title.style.color='red'
    facebookDiv.style.background='initial'
    facebookDiv.style.transform='scale(1)'
    facebookDiv.style.transition='all 1s'
    title.style.setProperty('--linea','0%')
})

