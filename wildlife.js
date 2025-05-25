document.addEventListener("DOMContentLoaded", function () {
    setupSlider("wildlife");
    setupSlider("parks");
    setupSlider("culture");
});

function setupSlider(prefix) {
    const slides = document.querySelectorAll(`.${prefix}-slide`);
    const prevBtn = document.querySelector(`.${prefix}-prev-btn`);
    const nextBtn = document.querySelector(`.${prefix}-next-btn`);
    const indicatorsContainer = document.querySelector(`.${prefix}-indicators`);

    if (!slides.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "flex" : "none";
        });

        if (indicatorsContainer) {
            indicatorsContainer.innerHTML = "";
            slides.forEach((_, i) => {
                const dot = document.createElement("span");
                dot.classList.add(`${prefix}-dot`);
                if (i === index) dot.classList.add("active");
                dot.addEventListener("click", () => {
                    currentIndex = i;
                    showSlide(currentIndex);
                });
                indicatorsContainer.appendChild(dot);
            });
        }
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
}



// Select all "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

// Get modal elements
const modal = document.getElementById('popup-modal');
const closePopup = document.getElementById('close-popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');

// Event listener for each "Read More" button
readMoreButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const activityInfo = event.target.getAttribute('data-info');
    openModal(activityInfo);
  });
});

// Function to open the modal with more information
function openModal(info) {
  if (info === "Game Drive Details") {
    popupTitle.textContent = "Game Drives";
    popupDescription.textContent = "Explore Botswana's national parks and game reserves in open 4x4 vehicles with experienced guides. These drives offer the best chance to spot the 'Big Five' (elephants, lions, leopards, rhinos, and buffalo) as well as a wide variety of other wildlife.";
  } else if (info === "Walking Safari Details") {
    popupTitle.textContent = "Walking Safari";
    popupDescription.textContent = "A more intimate and personal safari experience, walking safaris allow tourists to get closer to nature by exploring the wilderness on foot with a trained guide. It’s a great way to learn about Botswana's flora and fauna up close.";
  }

  modal.style.display = "block";
}

// Close the modal when the "X" is clicked
closePopup.addEventListener('click', () => {
  modal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰ Menu';
    menuButton.classList.add('mobile-menu-button');
    document.querySelector('header').prepend(menuButton);
    
    // Toggle menu on button click
    menuButton.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('mobile-visible');
    });
    
    // Close menu when a link is clicked (for single page navigation)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('nav').classList.remove('mobile-visible');
        });
    });
});