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

this.ShadowRoot.innerHTML = `
<style>
    .detail-overlay{
        display: flex;
        flex-direction: column;
        background: rgba(255,255,255,0.9);
        padding: 20px;
        border-radius: 10px;
    }
    .detail-overlay img {
        width: 100%;
        height: auto;
    }
    .detail-overlay h2{
        margin: 10px 0;
    }
    .detail-overlay p{
        color: #333;
    }
    </style>
