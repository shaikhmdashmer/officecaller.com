//custom code scripts

if (typeof window === 'object') {
// Check if document is finally loaded
    document.addEventListener("DOMContentLoaded", function () {
        //alert('Finished loading');
        //scroll-top-btn
        let scrollTopBtn = document.querySelector(".scroll-top-btn");
        let ctaStripBottomfixed = document.querySelector(".cta-strip-bottomfixed");
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener("click", (e) => {
                e.preventDefault();
                window.scroll({top: 0, left: 0, behavior: 'smooth'});
            })
        }

        //Fixed header scroll code
        window.addEventListener("scroll", function(event) {
            let topScrollY = this.scrollY;
            //console.log(topScrollY);
            if (topScrollY > 100) {
                document.querySelector(".custom-navbar").classList.add("custom-navbarScrolled");
                scrollTopBtn.classList.add("scroll-top-btnActive");
                ctaStripBottomfixed.classList.add("ctaStripBottomfixedActive");
            } else {
                document.querySelector(".custom-navbar").classList.remove("custom-navbarScrolled");
                scrollTopBtn.classList.remove("scroll-top-btnActive");
                ctaStripBottomfixed.classList.remove("ctaStripBottomfixedActive");
            }
        });
    });
}