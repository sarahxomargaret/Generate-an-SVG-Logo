class Shape {
    constructor(backgroundcolor) {
        this.fill = `fill="${backgroundcolor}"`;
    }

    render () {
        return `<svg width="300" height="200">
        
        </svg>`
    }
};

class Circle {
    render () {
        return `<circle cx="150" cy="100" r="85"/>`
    }
};

class Square {
    render () {
        return `<rect x="85" y="35" width="130" height="130"/>`
    }
};

class Triangle {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182"/>`
    }
};

module.exports = Shape;