document.addEventListener("DOMContentLoaded", function () {
    const playerOnePower = document.getElementById("playerOnePower");
    const playerTwoPower = document.getElementById("playerTwoPower");
    const sonGoku = document.getElementById("sonGoku");
    const vegeta = document.getElementById("vegeta");

    // Player One Methoden (Son Goku)
    window.onPlayerOnePower = function () {
        if (getWidth(playerTwoPower) <= 0) {
            alert("Player One gewinnt!");
            gameOver();
        } else {
            sonGoku.style.backgroundImage = "url('https://qph.cf2.quoracdn.net/main-qimg-1e988214b93b21ef64d12e17e4c99e49')";
            decreaseWidth(playerTwoPower, 6);
            checkWinCondition();

            // Nach 7 Sekunden zurück zur Ursprungsanimation
            setTimeout(function() {
                sonGoku.style.backgroundImage = "url('https://i.gifer.com/origin/38/38fe168959a1c6ad51693c7e028389e0_w200.gif')";
            }, 9000); 
        }
    };

    window.onPlayerOnePunch = function () {
        if (getWidth(playerTwoPower) <= 0) {
            alert("Player One gewinnt!");
            gameOver();
        } else {
    
        
            sonGoku.style.backgroundImage = "url('https://i.seadn.io/gae/pbwJ_YDig6Igdsbk-xRD2QNTbmf6gkrp7QGKMem0OhZf57tBS8YUgl_QHo5FcIZmI6QRhJiQp9RahkXc37Q_kIiOFcPDNx_ub8qSxw?auto=format&dpr=1&w=1000')";
            sonGoku.style.transform = "scale(1) translateY(-20px)";
            
            sonGoku.style.transition = "background-image 0.5s ease, transform 0.5s ease"; 
            decreaseWidth(playerTwoPower, 2);
            checkWinCondition();
    
            // Nach 3 Sekunden auf das zweite GIF wechseln
            setTimeout(function() {
                sonGoku.style.backgroundImage = "url('https://media1.tenor.com/m/kl8ZFYe5BrYAAAAd/goku-vegeta.gif')";
                sonGoku.style.transform = "scale(1) translateY(-20px)"; // Position beibehalten
                
            }, 2000);
    
            // Nach weiteren 4 Sekunden zurück zur Ursprungsanimation
            setTimeout(function() {
                sonGoku.style.backgroundImage = "url('https://i.gifer.com/origin/38/38fe168959a1c6ad51693c7e028389e0_w200.gif')";
                
                
            }, 6000);
        }
    
    
    
    
    };

    window.onPlayerOneKick = function () {
        if (getWidth(playerTwoPower) <= 0) {
            alert("Player One gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerTwoPower, 4);
            sonGoku.style.backgroundImage = "url('https://media.tenor.com/7HTQnebtrOsAAAAi/dbz-pixel.gif')";
            checkWinCondition();

            // Nach 7 Sekunden zurück zur Ursprungsanimation
            setTimeout(function() {
                sonGoku.style.backgroundImage = "url('https://i.gifer.com/origin/38/38fe168959a1c6ad51693c7e028389e0_w200.gif')";
            }, 7000);
        }
    };

    window.onPlayerOneSuper = function () {
        if (getWidth(playerTwoPower) <= 0) {
            alert("Player One gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerTwoPower, 10);
            sonGoku.style.backgroundImage = "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnlxYWdwNWw5aWdhNGNtMGczaHV6OG9wbTJtaTFxMnFjZzEzNHcwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NXjxwCoPmCvNQpsVjR/giphy.webp')";
            checkWinCondition();

            // Nach 7 Sekunden zurück zur Ursprungsanimation
            setTimeout(function() {
                sonGoku.style.backgroundImage = "url('https://i.gifer.com/origin/38/38fe168959a1c6ad51693c7e028389e0_w200.gif')";
            }, 7000);
        }
    };

    
    window.onPlayerTwoPower = function () {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerOnePower, 6);
            vegeta.style.backgroundImage = "url('https://media.tenor.com/7HTQnebtrOsAAAAi/dbz-pixel.gif')";
            checkWinCondition();

            
            setTimeout(function() {
                vegeta.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7466c4-1133-46eb-a3fd-886300058975/dgv9e69-3fe5e7d6-3c50-4e31-8e12-b3f9dcec560b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViNzQ2NmM0LTExMzMtNDZlYi1hM2ZkLTg4NjMwMDA1ODk3NVwvZGd2OWU2OS0zZmU1ZTdkNi0zYzUwLTRlMzEtOGUxMi1iM2Y5ZGNlYzU2MGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IrLP1oz26N-inQ3uATZCkdW8m_KJ1tOdev4BcvVlTnE')";
            }, 7000);
        }
    };

    window.onPlayerTwoPunch = function () {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerOnePower, 2);
            vegeta.style.backgroundImage = "url('https://i.makeagif.com/media/3-09-2016/WjHGFm.gif')";
            checkWinCondition();

            // Nach 7 Sekunden zurück zur Ursprungsanimation
            setTimeout(function() {
                vegeta.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7466c4-1133-46eb-a3fd-886300058975/dgv9e69-3fe5e7d6-3c50-4e31-8e12-b3f9dcec560b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViNzQ2NmM0LTExMzMtNDZlYi1hM2ZkLTg4NjMwMDA1ODk3NVwvZGd2OWU2OS0zZmU1ZTdkNi0zYzUwLTRlMzEtOGUxMi1iM2Y5ZGNlYzU2MGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IrLP1oz26N-inQ3uATZCkdW8m_KJ1tOdev4BcvVlTnE')";
            }, 7000);
        }
    };

    window.onPlayerTwoKick = function () {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerOnePower, 4);
            vegeta.style.backgroundImage = "url('https://media1.tenor.com/m/J26CWkFyjwsAAAAd/vegeta-super-saiyan.gif')";
            checkWinCondition();

            // Nach 7 Sekunden zurück zur Ursprungsanimation
            setTimeout(function() {
                vegeta.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7466c4-1133-46eb-a3fd-886300058975/dgv9e69-3fe5e7d6-3c50-4e31-8e12-b3f9dcec560b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViNzQ2NmM0LTExMzMtNDZlYi1hM2ZkLTg4NjMwMDA1ODk3NVwvZGd2OWU2OS0zZmU1ZTdkNi0zYzUwLTRlMzEtOGUxMi1iM2Y5ZGNlYzU2MGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IrLP1oz26N-inQ3uATZCkdW8m_KJ1tOdev4BcvVlTnE')";
            }, 7000);
        }
    };

    window.onPlayerTwoSuper = function () {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerOnePower, 10);
            vegeta.style.backgroundImage = "url('https://media.tenor.com/7HTQnebtrOsAAAAi/dbz-pixel.gif')";
            checkWinCondition();

            // Nach 7 Sekunden zurück zur Ursprungsanimation
            setTimeout(function() {
                vegeta.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7466c4-1133-46eb-a3fd-886300058975/dgv9e69-3fe5e7d6-3c50-4e31-8e12-b3f9dcec560b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViNzQ2NmM0LTExMzMtNDZlYi1hM2ZkLTg4NjMwMDA1ODk3NVwvZGd2OWU2OS0zZmU1ZTdkNi0zYzUwLTRlMzEtOGUxMi1iM2Y5ZGNlYzU2MGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IrLP1oz26N-inQ3uATZCkdW8m_KJ1tOdev4BcvVlTnE')";
            }, 7000);
        }
    };

    function decreaseWidth(element, amount) {
        let currentWidth = getWidth(element);
        let newWidth = Math.max(currentWidth - amount, 0);
        element.style.width = newWidth + "%";
    }

    function getWidth(element) {
        return parseInt(element.style.width) || 0;
    }

    window.gameOver = function () {
        playerTwoPower.style.width = "100%";
        playerOnePower.style.width = "100%";
        sonGoku.style.backgroundImage = "url('https://i.gifer.com/origin/38/38fe168959a1c6ad51693c7e028389e0_w200.gif')";
        trunks.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b7466c4-1133-46eb-a3fd-886300058975/dgv9e69-3fe5e7d6-3c50-4e31-8e12-b3f9dcec560b.gif')";
        const gameOverScreen = document.getElementById("gameOverScreen");
        gameOverScreen.style.display = "block";
    };

    function checkWinCondition() {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        }
        if (getWidth(playerTwoPower) <= 0) {
            alert("Player One gewinnt!");
            gameOver();
        }
    }

    document.onkeydown = function (e) {
        e = e || window.event;
        var key = e.which || e.keyCode;

        switch (key) {
            case 87: // W
                onPlayerOnePower();
                break;
            case 65: // A
                onPlayerOnePunch();
                break;
            case 83: // S
                onPlayerOneKick();
                break;
            case 68: // D
                onPlayerOneSuper();
                break;

            case 38: // Up Arrow
                onPlayerTwoPower();
                break;
            case 37: // Left Arrow
                onPlayerTwoPunch();
                break;
            case 40: // Down Arrow
                onPlayerTwoKick();
                break;
            case 39: // Right Arrow
                onPlayerTwoSuper();
                break;
        }
    };
});
