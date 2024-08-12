document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        height: '20rem',
        perPage: 4,
        gap:'40px',
        breakpoints: {
            640: {
                height: '15rem',
            },
        },
    });

    splide.mount();
});