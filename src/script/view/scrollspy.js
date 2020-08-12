const ScrollSpy = () => {
    const ScrollSpy = () => {
        $(document).ready(() => {

            $(window).scroll(() => {
                const scroll = $(window).scrollTop();

                //>=, not <=
                if (scroll >= 60) {
                    //clearHeader, not clearheader - caps H
                    $(".navbar").addClass("bg-light");
                } else {
                    $(".navbar").removeClass("bg-light");
                }
            }); //missing );

            $('body').scrollspy({ target: 'scrollnav' })


            window.onload = () => {
                // executes when complete page is fully loaded, including all frames, objects and images
                console.log("window is loaded");


                // window load  
            };


            // document ready  

        });
    }


}

export default ScrollSpy;