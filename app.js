const observer = new IntersectionObserver((element) => {
    for(let i=0; i < element.length; i++) {
        if(element[i].isIntersecting)
            element[i].target.classList.add('show');
        else
            element[i].target.classList.remove('show');
    }
})

const hiddenElements = document.querySelectorAll('.testimonials');
hiddenElements.forEach((element) => observer.observe(element));