console.log("Script loaded!");
const sections = document.querySelectorAll("section");

function revealOnScroll(){
    console.log("Scrolling...");
    
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom){
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);