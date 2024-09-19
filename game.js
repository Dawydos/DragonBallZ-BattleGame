document.addEventListener("DOMContentLoaded", function () {
    const playerOnePower = document.getElementById("playerOnePower");
    const playerTwoPower = document.getElementById("playerTwoPower");
    const sonGoku = document.getElementById("sonGoku");
    const trunks = document.getElementById("trunks");

    // Player One Methoden (Son Goku)
    window.onPlayerOnePower = function () {
        if (getWidth(playerTwoPower) <= 0) {
            alert("Player One gewinnt!");
            gameOver();
        } else {
            sonGoku.style.backgroundImage = "url('http://gifimgs.com/animations/anime/dragon-ball-z/Goku/goku_11.gif')";
            decreaseWidth(playerTwoPower, 6);
            checkWinCondition();
        }
    };

    window.onPlayerOnePunch = function () {
        if (getWidth(playerTwoPower) <= 0) {
            alert("Player One gewinnt!");
            gameOver();
        } else {
            sonGoku.style.backgroundImage = "url('https://media.giphy.com/media/104789d4I4RgxG/200.gif')";
            decreaseWidth(playerTwoPower, 2);
            checkWinCondition();
        }
    };

    window.onPlayerOneKick = function () {
        if (getWidth(playerTwoPower) <= 0) {
            alert("Player One gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerTwoPower, 4);
            sonGoku.style.backgroundImage = "url('https://i.gifer.com/ZLBh.gif')";
            checkWinCondition();
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
        }
    };

    // Player Two Methoden (Trunks)
    window.onPlayerTwoPower = function () {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerOnePower, 6);
            checkWinCondition();
        }
    };

    window.onPlayerTwoPunch = function () {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerOnePower, 2);
            checkWinCondition();
        }
    };

    window.onPlayerTwoKick = function () {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerOnePower, 4);
            checkWinCondition();
        }
    };

    window.onPlayerTwoSuper = function () {
        if (getWidth(playerOnePower) <= 0) {
            alert("Player Two gewinnt!");
            gameOver();
        } else {
            decreaseWidth(playerOnePower, 10);
            checkWinCondition();
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
            case 38: // ↑
                onPlayerTwoPower();
                break;
            case 37: // ←
                onPlayerTwoPunch();
                break;
            case 40: // ↓
                onPlayerTwoKick();
                break;
            case 39: // →
                onPlayerTwoSuper();
                break;
            default:
                break;
        }
    };

    document.getElementById("restartButton").onclick = function() {
        playerOnePower.style.width = "100%";
        playerTwoPower.style.width = "100%";
        sonGoku.style.backgroundImage = "url(https://i.gifer.com/origin/38/38fe168959a1c6ad51693c7e028389e0_w200.gif)";
        const gameOverScreen = document.getElementById("gameOverScreen");
        gameOverScreen.style.display = "none";
    };
});
