const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // remove active from all btns
        btns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide all articles
        articles.forEach( (article) => {
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

// scroll animation
const theAnimation = document.querySelectorAll(".animation");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animation")
        } else {
            entry.target.classList.remove("scroll-animation")
        }
    })
},
    {
        threshold: 0.5
    });
for (let i = 0; i < theAnimation.length; i++) {
    const elements = theAnimation[i];
    observer.observe(elements);
}


// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();