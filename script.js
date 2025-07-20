document.addEventListener('DOMContentLoaded', function() {
    const funFactButton = document.getElementById('funFactButton');
    const funFact = document.getElementById('funFact');

    funFactButton.addEventListener('click', function() {
        if (funFact.style.display === 'none' || funFact.style.display === '') {
            funFact.textContent = "Fun fact: You might catch me listening to local R&B all day and all night.";
            funFact.style.display = 'block';
        } else {
            funFact.style.display = 'none';
        }
    });
});
