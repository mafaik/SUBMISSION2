class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer id="footer" class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p> Irwanto dwi subagus, Front end Developer.
                    </p>
                </div>
            </div>
            <hr>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                        <a href="#">Ids</a>.
                    </p>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="social-icons">
                        <li><a class="facebook" href="https://www.facebook.com/bagus.deathscreamo"><i class="fa fa-facebook"></i></a></li>
                        <li><a class="twitter" href="https://twitter.com/irwantods"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="instagram" href="https://www.instagram.com/irwantodwisubagus/"><i class="fa fa-instagram"></i></a></li>
                        <li><a class="linkedin" href="https://www.linkedin.com/in/irwantods-31ab381b0"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    `;
    }
}

customElements.define("footer-page", Footer);