$(document).ready(function(){
         $(window).scroll(function(){
             if(this.scrollY>20){
                 $('.navbar').addClass("sticky")
             }else{
                $('.navbar').removeClass("sticky")
             }
             if(this.scrollY>500){
                $('.skills .skills-content .right ').addClass("html::before")
            }else{
               $('.navbar').removeClass("sticky")
            }
         });
         $('.menu-btn').click(function(){
             $('.navbar .menu').toggleClass("active");
             $('.menu-btn i').toggleClass("active");
              
         });
         var typed = new Typed(".type", {
             strings:["Good learner","Web developer","1st year Undergrad"],
             typeSpeed: 100,
             backSpeed: 60,
             loop: true
         });
         var typed = new Typed(".type-2", {
             strings:["Good learner","Web developer","1st year Undergrad"],
             typeSpeed: 100,
             backSpeed: 60,
             loop: true
         });

        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                900:{
                    items: 3, 
                    nav: false
                }
               
            
        }
        });
        var myCarousel = document.querySelector('#myCarousel')
        var carousel = new bootstrap.Carousel(myCarousel)

        $('.bars').waypoint(function() {
              $('.progress .progress-bar').each(function() {
                  $(this).css("width", $(this).attr("aria-valuenow") + '%');
                });
            }, {
                offset: '30%'
             });
             
        });
