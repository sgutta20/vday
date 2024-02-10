document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const message = document.getElementById('message');
    const messages = ["oopsies! looks like you clicked the wrong button!", "oh, was that not an accident?", "hmmmm, try again?", "hmmph! try again.", "pls no :(", "stop being a meanieeeee", "you're my girlfriend you can't not be my valentine (╥﹏╥)", "it's so joever", "i beg you to reconsider", "fine! i'm done trying to convince you. the yes button will stay right there tho... :)"];
    let yesClickCount = 0;
    let noClickCount = 0;

    const jsConfetti = new JSConfetti();
    

    yesButton.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 50);
        yesClickCount++;
        document.getElementById('pic1').style.display='block';
        document.getElementById('pic2').style.display='block';
        document.getElementById('pic3').style.display='block';
        if (yesClickCount = 1) {
            message.textContent = "Best decision you've ever made! P.S. I love you❣ 🌈💕";
        }
        if (yesClickCount = 2) {
            message.textContent = "You're the greatest thing that could have ever happened to me. Thank you for saying yes :)";
        }
        jsConfetti.addConfetti({
            emojis: ['🌈', '💕', '💞', '✨', '💖', '🌸'],
            confettiNumber: 75,
         })
        document.getElementById('heart').className = 'beatheart';
    });

    noButton.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 50);
        document.getElementById('pic1').style.display='none';
        document.getElementById('pic2').style.display='none';
        document.getElementById('pic3').style.display='none';
        
        noClickCount++;
        if (noClickCount <= 7) {
            yesButton.style.transform = `scale(${1 + 0.1 * noClickCount})`;
            noButton.style.transform = `scale(${1 - 0.1 * noClickCount})`;
            message.textContent = messages[noClickCount - 1];
        }
        if (8 <= noClickCount < 10) {
            yesButton.style.transform = `scale(${1 + 0.1 * noClickCount})`;
            noButton.style.transform = `scale(${1 - 0.1 * noClickCount})`;
            message.textContent = messages[noClickCount - 1];
        }
        if (noClickCount <= 10) {
            yesButton.style.transform = `scale(${1 + 0.1 * noClickCount})`;
            noButton.style.transform = `scale(${1 - 0.1 * noClickCount})`;
            message.textContent = messages[noClickCount - 1];
        }

        document.getElementById('heart').className = 'stopheart';

    });
});
