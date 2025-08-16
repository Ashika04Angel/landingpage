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