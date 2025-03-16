function game(num) {
    if (num % 3 == 0 && num % 9 == 0) {
        console.log("박수 X 2");
    }
    else if (num % 3 == 0) {
        console.log("박수");
    }
    else {
        console.log("통과");
    }
}



game(6)
game(9)
game(11)