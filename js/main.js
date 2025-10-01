const slider = tns({
    container: '#mySlider',
    items: 4,
    controls: false,
    mouseDrag: true,
    nav: false,
    gutter: 24,
    loop: true,

    responsive: {
        360: {
            items: 1.4
        },
        
        768: {
            items: 1.4,
            gutter: 16,
        },
        1200: {
            items: 4,
            gutter: 24,
        }    
    }

  });