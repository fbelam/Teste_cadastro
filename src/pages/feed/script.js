let currentSection = 0;  
const sections = document.querySelectorAll('main section');

document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        nextSection();
    } else {
        previousSection();
    }
});

function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
    }
}

function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}

function scrollToSection(sectionIndex) {
    sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
}