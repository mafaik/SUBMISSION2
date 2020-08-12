class PageArticle extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="img-hover-zoom img-hover-zoom--colorize img">
                    <img class="img-fluid img-thumbnail" src="image/furniture-802031_1920.jpg" alt="">
                </div>
            </div>
            <div class="col-md-4">
                <h3 class="my-3">Find your happy place</h3>
                <p>You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time. We can create a beautiful space that fits your needs so you don’t have to be embarrassed to host book club next
                    month.
                </p>
                <h3 class="my-3">Project Details</h3>
                <ul>
                    <li>Anthropologie</li>
                    <li>Serena & Lily</li>
                    <li>CPottery Barn</li>
                    <li>Minted</li>
                </ul>
            </div>

        </div>
    </div>
`;
    }
}

customElements.define("page-article", PageArticle);