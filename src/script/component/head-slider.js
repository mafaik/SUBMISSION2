class HeadSlider extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ` <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <!-- Slide One - Set the background image for this slide in the line below -->
            <div class="carousel-item active" style="background-image: url('image/glass-768770_1920.jpg')">
                <div class="carousel-caption d-none d-md-block">
                    <h2 class="display-4">“Home is where you feel at home and are treated well.”</h2>
                    <p class="lead"> — Dalai Lama</p>
                </div>
            </div>
            <!-- Slide Two - Set the background image for this slide in the line below -->
            <div class="carousel-item" style="background-image: url('image/lamp-1209278_1920.jpg')">
                <div class="carousel-caption d-none d-md-block">
                    <h2 class="display-4">“If you know you’re going home, the journey is never too hard.” </h2>
                    <p class="lead">— Angela Wood</p>
                </div>
            </div>
            <!-- Slide Three - Set the background image for this slide in the line below -->
            <div class="carousel-item" style="background-image: url('image/flowers-819361_1920.jpg')">
                <div class="carousel-caption d-none d-md-block">
                    <h2 class="display-4">“The home should be the treasure chest of living.”</h2>
                    <p class="lead">— Le Corbusier</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>`;
    }
}

customElements.define("head-slider", HeadSlider);