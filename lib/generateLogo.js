function shapeRender(shape) {
    switch(shape) {
        case 'circle':
            return `<circle cx="25" cy="75" r="20"/>`
            break;
        case 'square':
            return `<rect x="85" y="35" width="130" height="130"/>`
            break;
        case 'triangle':
            return `<polygon points="150, 18 244, 182 56, 182"/>`
            break;
    }
}