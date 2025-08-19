function handleSubmit(event){
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    const feedback = document.getElementById('feedback');

    if(email.includes('@')){
        feedback.classList.remove('hidden');
        setTimeout(() =>{
            feedback.classList.add('hidden');
            document.getElementById('emailInput').value = '';
        })
    }
}
const hero = document.getElementById('hero');
const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic3.jpg"
];

let index = 0 ;

function changeBackground(){
        hero.style.backgroundImage = `url('${images[index]}')`;
         index = (index + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 5000);