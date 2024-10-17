// Header Menu Animation

document.querySelector('.menu-home').addEventListener('click', function() {
    document.querySelector('.home').scrollIntoView({ behavior: 'smooth' });
  });

document.querySelector('.menu-about').addEventListener('click', function() {
    document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
  });
document.querySelector('.menu-portfolio').addEventListener('click', function() {
    document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth' });
  });
document.querySelector('.menu-contact').addEventListener('click', function() {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
  });
document.querySelector('.hero-contact-button').addEventListener('click', function() {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
  });

// Resume Download Code
document.querySelector('.hero-resume-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './files/Aaditya Hajari Resume.pdf';
    link.download = 'Aaditya Hajari Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.querySelector('.about-resume-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './files/Aaditya Hajari Resume.pdf';
    link.download = 'Aaditya Hajari Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


// Portfolio Animation
function handleMouseEnter1(){
    gsap.to(".portfolio-background1", {
        opacity: 0.6,
        duration: 0.5
    });
    gsap.to(".portfolio-name1", {
        opacity:1,
        duration: 0.5
    });
}
function handleMouseEnter2(){
    gsap.to(".portfolio-background2", {
        opacity: 0.6,
        duration: 0.5
    });
    gsap.to(".portfolio-name2", {
        opacity:1,
        duration: 0.5
    });
}

function handleMouseLeave1(){
    gsap.to(".portfolio-background1", {
        opacity: 0,
        duration: 0.5
    });
    gsap.to(".portfolio-name1", {
        opacity:0,
        duration: 0.5
    });
}
function handleMouseLeave2(){
    gsap.to(".portfolio-background2", {
        opacity: 0,
        duration: 0.5
    });
    gsap.to(".portfolio-name2", {
        opacity:0,
        duration: 0.5
    });
}

document.querySelector(".portfolio-name1").addEventListener("mouseenter", handleMouseEnter1);

document.querySelector(".portfolio-name1").addEventListener("mouseout", handleMouseLeave1);

document.querySelector(".portfolio-name2").addEventListener("mouseenter", handleMouseEnter2);

document.querySelector(".portfolio-name2").addEventListener("mouseout", handleMouseLeave2);