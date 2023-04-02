function randomGame () {
    let num;
    let times = 0;
    let timer = setInterval (function() {
        num = Math.random();
        times++
        if (num > 0.75) {
            clearInterval (timer);
            console.log('Number of tries it took before we found a number greater than 0.75: ' + times);

        }
    }, 1000)
}