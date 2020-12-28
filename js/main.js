const menuItem = document.querySelectorAll('.menu_link');
const dropdownMenu = document.querySelectorAll('.mobile_dropdown_menu');

for(let i=0; i< menuItem.length; i++){
    menuItem[i].addEventListener('click', function(){

        dropdownMenu.forEach(element => {
            if(element.classList.contains('active')){
                element.classList.remove('active')
                element.classList.add('deactive')
            console.log('birinchi')

            }
        });

        if(!dropdownMenu[i].classList.contains('active')){
            dropdownMenu[i].classList.remove('deactive')
            dropdownMenu[i].classList.add('active')
            console.log('ikkinchi')
        }
    });
};

const mobileMenuBtn = document.querySelector('.header_mobile_button');
const mobileMenu = document.querySelector('.header_mobile_menu');

    if(window.screen.width > 991){
        console.log('katta')
        
    }

    else if(window.screen.width < 991){
        console.log('kichik')
    }

mobileMenuBtn.addEventListener('click', function(){
    if(window.screen.width > 576){
        if(!this.classList.contains('active_menu')){
            this.classList.add('active_menu');
            TweenMax.to('.header_mobile_menu', 2,{
                right: 0,
                opacity: 1,
                display: 'block',
                ease: Power2.easeInOut
            })
        }

        else if(this.classList.contains('active_menu')){
            this.classList.remove('active_menu');
            TweenMax.to('.header_mobile_menu', 2,{
                right: -520,
                opacity: 0,
                display: 'none',
                ease: Power2.easeInOut
            })
        }
    }   

    else{
        if(!this.classList.contains('active_menu')){
            this.classList.add('active_menu');
            TweenMax.to('.header_mobile_menu', 2,{
                right: 0,
                opacity: 1,
                display: 'block',
                ease: Power2.easeInOut
            })
        }

        else if(this.classList.contains('active_menu')){
            this.classList.remove('active_menu');
            TweenMax.to('.header_mobile_menu', 2,{
                right: -220,
                opacity: 0,
                display: 'none',
                ease: Power2.easeInOut
            })
        }
    }
    
});

        jQuery(document).ready(function($) {
            $('a[data-rel^=lightcase]').lightcase();
        });

// // Get the modal
// var modal = document.querySelector("#myModal");

// var img = document.querySelectorAll("#myImg");
// var modalImg = document.querySelector("#img01");
// var captionText = document.querySelector("#caption");

// for(let i = 0; i <= img.length-1; i++){
//     img[i].addEventListener('click', function(){
//         console.log(img[i])

//         // modal.style.display = "block";
//         // modalImg.src = this.src;
//         // captionText.innerHTML = this.alt;
//     })
    
//       }



// var span = document.querySelectorAll(".close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
// }


