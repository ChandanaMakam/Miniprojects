const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        console.log('ckic')
toggle.parentNode.classList.toggle("show")

     });
    });