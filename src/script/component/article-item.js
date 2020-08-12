const imageitem extends HTMLElement {
    set article(article) {
        this._article = article;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="col-sm-4">
        <div class="img-hover-zoom img-hover-zoom">
            <div class="item">
            <img class="featured-image" src="${this._article.featuredImage}">
            </div>
        </div>
    </div>`
    }
}

customElements.define("article-item", ArticleItem)