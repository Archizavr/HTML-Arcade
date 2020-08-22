class Generator {

    constructor() {
        this.coins = []
    }

    generate() {
        const value = Math.floor(Math.random() * 3) + 1;
        const newCoin = new Coin(value);
        this.coins.push(newCoin);
        newCoin.x = Math.floor( Math.random() * (1 + CANVAS_WIDTH - newCoin.size) );
        newCoin.y = Math.floor( Math.random() * (1 + CANVAS_HEIGHT - newCoin.size) );
    }

    drawCoins(context) {
        for (let i = 0; i < this.coins.length; i++) {
            this.coins[i].draw(context);
        }
    }

}