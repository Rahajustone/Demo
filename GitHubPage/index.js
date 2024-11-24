const sideBar = document.getElementById('sidebar');

const listLinks = document.querySelectorAll("#sidebar ul li");
listLinks.forEach(el => {
  el.addEventListener('click', function(){
    listLinks.forEach(function(li){
      li.classList.remove('active');
    });
    this.classList.add('active');
  })
});

// Toggle Button
function toggleSideBar() {
  sideBar.classList.toggle('show');
}


// Home
const parallaxSvg = document.querySelectorAll('.layer');
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  parallaxSvg.forEach((svg) => {
    const speed = svg.getAttribute('data-depth');
    const xOffset = x * speed*10;
    const yOffset = y * speed*10;
    svg.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
  });
});

const textElement = document.getElementById('titles');
const phrases = [
  "Senior Software Engineer.",
  "Full-Stack Developer.",
  "Front-End Developer.",
  "Back-End Developer."
];

let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;
let delay = 200; // Typing speed
let deleteDelay = 1000; // Pause before deleting text

// Load typing sound effect
// const typingSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');

function type() {
  const currentPhrase = phrases[currentPhraseIndex];

  if (isDeleting) {
    // Deleting the text
    textElement.textContent = currentPhrase.substring(0, currentCharacterIndex - 1);
    currentCharacterIndex--;

    if (currentCharacterIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 500); // Short pause before typing next phrase
    } else {
      setTimeout(type, delay / 2); // Faster deleting
    }
  } else {
    // Typing the text
    textElement.textContent = currentPhrase.substring(0, currentCharacterIndex + 1);
    // typingSound.play(); // Play typing sound on each key press
    currentCharacterIndex++;

    if (currentCharacterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, deleteDelay); // Pause before deleting
    } else {
      setTimeout(type, delay);
    }
  }
}

// Start typing effect on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 500); // Initial delay before typing starts
});

// Scroll to contact section
function scrollToContactSection() {
  const contactSection = document.getElementById('contactme');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add click event listener to the "Hire me" button
document.addEventListener('DOMContentLoaded', function() {
  const hireButton = document.querySelector('.hireme');
  if (hireButton) {
    hireButton.addEventListener('click', scrollToContactSection);
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Skill bar animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
            bar.style.transition = 'width 1s ease-in-out';
        }, 100);
    });
}

// Call the function when the skills section is in view
const skillsSection = document.querySelector('#skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkillBars();
        observer.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

observer.observe(skillsSection);
