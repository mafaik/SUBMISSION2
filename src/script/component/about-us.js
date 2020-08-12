class About extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="about" class="py-5">

        <!-- Container -->
        <div class="container">
            <!-- Section heading -->
            <h2 class="h1-responsive font-weight-bold text-center mb-5">Get in touch with us to design your dream home</h2>
            <!-- Section description -->
            <p class="lead grey-text text-center w-responsive mx-auto mb-5">Talk to our design expert and get your designs.</p>

            <!-- Grid row -->
            <div class="row">

                <!-- Grid column -->
                <div class="col-lg-5 text-center text-lg-left">
                    <img class="img-fluid" src="image/profile.jpg" alt="Sample image">
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-lg-7">

                    <!-- Grid row -->
                    <div class="row mb-3">

                        <!-- Grid column -->
                        <div class="col-xl-16 col-md-11 col-10">
                            <h5 class="font-weight-bold mb-3">45-day Installation</h5>
                            <p class="grey-text">Get your chosen products installed in 45 days, or we pay you rent. That’s a promise!</p>
                        </div>
                        <!-- Grid column -->

                    </div>
                    <!-- Grid row -->

                    <!-- Grid row -->
                    <div class="row mb-3">

                        <!-- Grid column -->
                        <div class="col-xl-16 col-md-11 col-10">
                            <h5 class="font-weight-bold mb-3">900+ Expert Designers</h5>
                            <p class="grey-text">Create your dream home, fitting your lifestyle, with the help of our top designers.</p>
                        </div>
                        <!-- Grid column -->

                    </div>
                    <!-- Grid row -->

                    <!--Grid row-->
                    <div class="row">


                        <!-- Grid column -->
                        <div class="col-xl-16 col-md-11 col-10">
                            <h5 class="font-weight-bold mb-3">Post-Installation Service</h5>
                            <p class="grey-text mb-0">Enjoy unwavering support and services from our skilled team for up to 5 years.</p>
                        </div>
                        <!-- Grid column -->

                    </div>
                    <!--Grid row-->

                </div>
                <!--Grid column-->

            </div>
            <!-- Grid row -->

        </div>
        <!-- Container -->

    </section>`;
    }
}

customElements.define("about-us", About);