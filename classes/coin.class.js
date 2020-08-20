class Coin {
    constructor(value) {
        this.value = value;
        this.size = 50;
        this.x = 0;
        this.y = 0;
        this.color = [];
    }
        draw(context) {
            context.beginPath();
            context.arc(this.x + this.size/2, this.y + this.size/2, this.size/2, 0, Math.PI * 2, false);
            context.endPath();
            context.fillStyle = this.color[0];
            context.fill();
        }

        setColor() {
            if (value === 1) {
                this.color = ["#663300","#993300"]
            }
            else if (value === 2) {
                this.color = ["#888888","#AAAAAA"]
            }
            else if (value === 3) {
                this.color = ["#FFCC00","FFF000"]
            }

        }
    }
