class BookDetail extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
}

connectedCallback() {
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const subtitle = this.getAttribute('subtitle');
    const description = this.attribute('description');
} 