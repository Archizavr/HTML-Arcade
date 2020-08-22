
class App {
    

    constructor() {
        this.canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        this.generator = new Generator();
    }

    run() {
        this.canvas.clear();
        this.generator.drawCoins(this.canvas.context);
    }
}