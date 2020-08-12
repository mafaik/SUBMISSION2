class Img3Col extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="gallery" class="py-5">
        <div class="container">
            <h2 class="display-4">Create your dream home</h2>
            <hr class="mt-2 mb-2">
            <div class="row">
                <div class="col-sm-4">
                    <div class="img-hover-zoom img-hover-zoom">
                        <div class="item">
                            <img src="image/house-1946371_1920.jpg" class="img-thumbnail img-res">
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="img-hover-zoom img-hover-zoom">
                        <div class="item">
                            <img src="image/staging-2816464_1920.jpg" class="img-thumbnail img-res">
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="img-hover-zoom img-hover-zoom">
                        <div class="item">
                            <img src="image/laptop-2443052_1920.jpg" class="img-thumbnail img-res">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
    }
}

customElements.define("img-3col", Img3Col);