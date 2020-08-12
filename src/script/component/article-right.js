class ArticleRight extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container pt-5">
        <div class="row">
            <div class="col-md-4">
                <h3 class="my-3">Delightfully affordable</h3>
                <p>We believe that interior design should be accessible to everyone. That’s why Havenly packages are designed to be affordable, and our designers are trained to work within your budget.
                </p>
                <h3 class="my-3">Project Details</h3>
                <ul>
                    <li>West Elm</li>
                    <li>Interior Define</li>
                    <li>Article</li>
                    <li>ASurya</li>
                </ul>
            </div>
            <div class="col-md-8">
                <div class="img-hover-zoom img-hover-zoom--colorize img">
                    <img class="img-fluid img-thumbnail" src="image/living-room-4013531_1920.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
`;
    }
}

customElements.define("article-right", ArticleRight);