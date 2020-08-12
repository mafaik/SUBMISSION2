class Service extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="services" class="container pt-5">
        <section class="services pt-10 pb-50">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 mx-auto text-center">
                        <div class="section-title mb-100">
                            <h4>Let us do what we do best</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <!-- Single Service -->
                        <div class="single-service">
                            <i class="fas fa-pencil-ruler"></i>
                            <h4>Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <!-- Single Service -->
                        <div class="single-service">
                            <i class="fas fa-ruler-combined"></i>
                            <h4>Furnish</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <!-- Single Service -->
                        <div class="single-service">
                            <i class="fas fa-paint-roller"></i>
                            <h4>Decorate</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <!-- Single Service -->
                        <div class="single-service">
                            <i class="fas fa-building"></i>
                            <h4>Office</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <!-- Single Service -->
                        <div class="single-service">
                            <i class="fas fa-store"></i>
                            <h4>Commercial</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <!-- Single Service -->
                        <div class="single-service">
                            <i class="fas fa-home"></i>
                            <h4>Residential</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </section>
    `;
    }
}

customElements.define("our-services", Service);