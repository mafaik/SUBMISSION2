class ImageCol extends HTMLElement {
    set images(images) {
        this._images = images;
        this.render();
    }

    render() {
        const section = document.createElement("div");

        section.innerHTML = this._images
            .map(src => `<img src=${src} alt=""/>`)
            .join("");
        this.appendChild(section);
    }
}

customElements.define("image-col", ImageCol)