// ------adding a transition effect to the transform property -> Social media links, arrow */ 

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mousedown', function() {
        this.classList.add('active');
    });
    link.addEventListener('mouseup', function() {
        this.classList.remove('active');
    });
});


// ------Adding the styles to remove the outline and box shadow from hamburger menu, when the toggler is focused or active


document.querySelector('.navbar-toggler').addEventListener('click', function() {
   
    this.style.outline = 'none';
    this.style.boxShadow = 'none';
     
  });
  
// function to scroll from section to the section


document.querySelectorAll('.nav-item').forEach(navItem => {
  navItem.addEventListener('click', e => {
    const targetId = navItem.querySelector('a').getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});




//-----rectangle-button "press" effect 

  const buttons = document.querySelectorAll('.rectangle-button');

  buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
      button.style.transform = 'scale(0.95)';
    });
  
    button.addEventListener('mouseup', function() {
      button.style.transform = 'scale(1)';
    });
  });
  



//-------function that starts the animation when the user clicks on the image 


// Get all img1 and img2 elements on the page
var img1Elements = document.getElementsByClassName('img1');
var img2Elements = document.getElementsByClassName('img2');

// Add a click event listener to all img1 and img2 elements
for (var i = 0; i < img1Elements.length; i++) {
  img1Elements[i].addEventListener('click', startAnimation);
}
for (var i = 0; i < img2Elements.length; i++) {
  img2Elements[i].addEventListener('click', startAnimation);
}

function startAnimation() {
  this.style.animation = 'none';
  this.offsetHeight;
  this.style.animation = null;
}


  // -----Form validation  -->


  const inputs = document.querySelectorAll('input');

  const patterns = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^\d{3}-\d{3}-\d{4}$/
  };
  
  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      validate(e.target, patterns[e.target.attributes.id.value]);
    });
  });
  
  function validate(field, regex) {
    if (regex.test(field.value)) {
      field.className = 'form-control valid';
    } else {
      field.className = 'form-control invalid';
    }
  }


  // -----Section slider initialization <!--Section news, slider   -->

  $(document).ready(function () {
    // Initialize the SlickSlider
    $('.slider').slick({
      //  settings for the SlickSlider
      dots: true, // Show dots for slide navigation
      arrows: true, // Show left and right arrows
      infinite: true, // Infinite loop sliding
      slidesToShow: 3, // Number of slides to show
      slidesToScroll: 1, // Number of slides to scroll
      // Customized prev and next arrows
      prevArrow: '<button type="button" class="prev-arrow"></button>',
      nextArrow: '<button type="button" class="next-arrow"></button>',


      // Customized dots
      dotsClass: 'slick-dots custom-dots',
      // gaps between slides
      // gap: 30,
      // Responsive settings
      responsive: [

        {
          breakpoint: 1400, // breakpoint
          settings: {
            dots: true,
            arrows: true, // Hide arrows on medium screens
            slidesToShow: 3, // Number of slides to show
            slidesToScroll: 1, // Number of slides to scroll
          },
        },
       
    
        {
          breakpoint: 992, // breakpoint
          settings: {
            dots: true,
            arrows: false, // Hide arrows on medium screens
            slidesToShow: 2, // Number of slides to show
            slidesToScroll: 1, // Number of slides to scroll
          },
        },
        {
          breakpoint: 768, //  breakpoint
          settings: {
            arrows: false, // Hide arrows on small screens
            slidesToShow: 1, // Number of slides to show
            slidesToScroll: 1, // Number of slides to scroll
          },
        },
      ],
    });
  });




  // -----Function to redirect  user to the Google Map   -->

  const locDivs = document.querySelectorAll('.loc');

  locDivs.forEach((locDiv) => {
    locDiv.addEventListener('click', () => {
      window.location.href = '#g-map';
    });
  });

  
  // ----- Google Map initialization  --


let map;

const newYork = { lat: 40.730610, lng: -73.935242};
const hongKong = { lat: 22.302711, lng: 114.177216};

function initMap() {
  const center = {
    lat: (newYork.lat + hongKong.lat) / 2,
    lng: (newYork.lng + hongKong.lng) / 2
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    mapId: "1902834b3a591287",
    center: center,
    fullscreenControl: false,
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    link: false
  });

  // Create a new marker for New York
  const marker = new google.maps.Marker({
    position: newYork,
    icon: "./assets/images/Pin.svg",
    map: map
  });

  // Create a new marker for Hong Kong
  const marker2 = new google.maps.Marker({
    position: hongKong,
    icon: "./assets/images/Pin.svg",
    map: map
  });
}

window.initMap = initMap;



