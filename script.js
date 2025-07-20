document.addEventListener('DOMContentLoaded', function() {
    const funFactButton = document.getElementById('funFactButton');
    const funFact = document.getElementById('funFact');

    const funFacts = [
        "Fun fact: You might catch me listening to local R&B all day and all night.",
        "I love exploring new places during my travels.",
        "I'm a proud parent to a Persian cat named Whiskers.",
        "I enjoy hiking and being in nature whenever I can.",
        "Coding is my passion, and I'm always eager to learn new languages!"
    ];

    funFactButton.addEventListener('click', function() {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        funFact.textContent = randomFact;
        
        // Toggle display of the fun fact
        if (funFact.style.display === 'none' || funFact.style.display === '') {
            funFact.style.display = 'block';
        } else {
            funFact.style.display = 'none';
        }
    });
});
