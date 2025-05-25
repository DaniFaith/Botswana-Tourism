document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Create dots dynamically based on number of slides
    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.setAttribute('data-slide', index);
            dotsContainer.appendChild(dot);
        });
        updateDots();
    }
    
    // Initialize slider
    function initSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${index * 100}%)`;
        });
        createDots();
    }
    
    // Move to slide
    function goToSlide(index) {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        currentIndex = index;
        updateDots();
    }
    
    // Update active dot
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation 
    dotsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('dot')) {
            const slideIndex = parseInt(e.target.getAttribute('data-slide'));
            goToSlide(slideIndex);
        }
    });
    
    // Initialize
    initSlider();
    
    // Auto-advance
    let slideInterval = setInterval(nextSlide, 3000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 3000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
});



// Park data 
const parks = [
    {
        title: "Chobe National Park",
        image: "images/chobenationalpark.png",
        description: "Chobe National Park is Botswana's first and most visited national park, located in the northeast near Kasane. It's famous for having the largest elephant population in Africa and offers diverse ecosystems including riverfront, marshlands, and dry savannah. Visitors enjoy boat safaris on the Chobe River, 4x4 game drives, and exceptional wildlife viewing including lions, buffalo, hippos, and over 450 bird species. The best time to visit is during the dry season (May-October), when animals gather near water sources."
    },
    {
        title: "Moremi Game Reserve",
        image: "images/moremigamereserve.png",
        description: "Moremi Game Reserve is one of Botswana's most scenic and wildlife-rich areas, located on the eastern side of the Okavango Delta. It is celebrated for its incredible biodiversity and varied landscapes, including floodplains, mopane woodlands, lagoons, and grasslands. The reserve is known for offering excellent opportunities to see predators such as lions, leopards, and the endangered African wild dog, along with large herds of elephants, buffalo, and numerous antelope species. Birdwatching is also exceptional, with over 500 recorded species. Activities include 4x4 game drives, guided walking safaris, and boat excursions. The best time to visit is during the dry season (June-October), when wildlife is more concentrated around permanent water sources."
    },
    {
        title: "Central Kalahari Game Reserve",
        image: "images/ckgr.png",
        description: "Central Kalahari Game Reserve is one of the world's largest and most remote protected areas, located in central Botswana. Covering over 52,000 square kilometers, it offers vast open landscapes of sand dunes, grassy plains, and acacia woodlands. The reserve is famous for its sense of solitude, dramatic skies, and unique desert-adapted wildlife such as black-maned Kalahari lions, oryx, springbok, cheetahs, and brown hyenas. It is also home to the indigenous San people, who have lived in harmony with the land for thousands of years. Visitors can enjoy self-drive safaris, stargazing, and cultural experiences. The best time to visit is from December to April, during the green season, when the reserve transforms with rain and attracts large numbers of grazing animals and predators."
    },
    {
        title: "Khutse Game Reserve",
        image: "images/khutsegamereserve.png",
        description: "Khutse Game Reserve is a remote wildlife reserve located south of the Central Kalahari Game Reserve in Botswana. Known for its desert landscapes and solitude, it offers opportunities to spot wildlife like springbok, gemsbok, and lions, along with stunning salt pans. The reserve is ideal for game drives, bird watching, and stargazing. Accessible by 4x4 vehicles, it provides a peaceful, off-the-beaten-path experience for nature lovers and photographers, especially during the dry season (May to October)."
    },
    {
        title: "Okavango Delta",
        image: "images/okavangodelta.png",
        description: "Okavango Delta is one of the world's largest inland deltas and a UNESCO World Heritage Site, located in northwestern Botswana. Formed by the Okavango River, the delta spreads across vast grasslands and seasonal floodplains, creating a lush oasis in the heart of the Kalahari Desert. It is famous for its pristine wilderness, exceptional biodiversity, and unique water-based safari experiences. Visitors can explore the delta by mokoro (dugout canoe), guided walking safaris, or scenic flights, encountering wildlife such as elephants, hippos, crocodiles, lions, leopards, and rare species like sitatunga antelope. Birdlife is spectacular, with over 500 species. The best time to visit is from June to October, during the annual flood season, when wildlife congregates around the rising waters."
    },
    {
        title: "Makgadikgadi Pans",
        image: "images/makgadikgadi2.png",
        description: "Makgadikgadi Pans is one of the largest salt pan complexes in the world, located in northeastern Botswana. Once a vast prehistoric lake, the area now features shimmering white salt flats, open grasslands, and seasonal wetlands. It offers a stark yet stunning landscape that supports unique desert-adapted wildlife and extraordinary natural events. During the wet season (December-April), the pans fill with water and attract thousands of flamingos and one of Africa's largest zebra and wildebeest migrations. In the dry season, visitors can explore the pans by quad bike, visit meerkat colonies, and camp under star-filled skies. The best time to visit depends on the experience—wet season for birdlife and migration, dry season for surreal desert scenery and adventure activities."
    },
    {
        title: "Nxai Pan National Park",
        image: "images/nxaipark.png",
        description: "Nxai Pan National Park is a scenic and wildlife-rich park located north of the Makgadikgadi Pans in northeastern Botswana. Known for its expansive open grasslands, fossil pans, and iconic Baines' Baobabs, the park offers excellent game viewing in a tranquil setting. It is especially famous for the seasonal zebra migration—one of Africa's lesser-known but impressive wildlife events that occurs between December and April. Wildlife includes lions, cheetahs, giraffes, springbok, elephants, and large herds of herbivores during the green season. The flat, open terrain also makes Nxai Pan ideal for photography and spotting predators. The best time to visit is during the wet season (December-April) for migration and lush landscapes, or dry season (May-October) for clearer game viewing."
    },
    {
        title: "Khama Rhino Sanctuary",
        image: "images/khamarhino.png",
        description: "Khama Rhino Sanctuary is a community-based wildlife project located near Serowe in central Botswana, dedicated to the conservation of endangered white and black rhinos. Covering about 8,500 hectares, the sanctuary provides a safe habitat for rhinos and other wildlife including zebras, giraffes, wildebeest, ostriches, and various antelope species. It also supports community development and environmental education. Visitors can enjoy self-drive or guided game drives, nature walks, and birdwatching in a peaceful and accessible setting. As one of the few places in Botswana where rhinos can be reliably seen, it plays a vital role in the country's anti-poaching and conservation efforts. The sanctuary is open year-round, but cooler months (May-August) offer the most comfortable conditions for exploring."
    },
    {
        title: "Mashatu Game Reserve",
        image: "images/mashatu.png",
        description: "Mashatu Game Reserve, located in the eastern corner of Botswana within the Tuli Block, is a private wildlife haven known as the “Land of Giants” for its large populations of elephants, baobab trees, and big cats. It covers around 30,000 hectares and offers a unique blend of open savannah, sandstone ridges, and riverine forests along the Limpopo River. The reserve is famous for its thriving populations of leopards, lions, cheetahs, and hyenas, as well as elands, giraffes, and birdlife. Mashatu is also a top destination for photographic safaris, mountain biking, horseback safaris, and archaeological sites. Its semi-arid climate makes it accessible year-round, but the dry season (May-October) offers optimal game viewing."
    },
    {
        title: "Kgalagadi Transfrontier Park",
        image: "images/kgalagadipark.png",
        description: "Kgalagadi Transfrontier Park is a vast conservation area shared by Botswana and South Africa, with the Botswana side featuring the remote and rugged Mabuasehube region. Located in the southwestern Kalahari Desert, the park is renowned for its dramatic red sand dunes, wide open skies, and unique desert-adapted wildlife. It is especially famous for sightings of black-maned Kalahari lions, cheetahs, leopards, and raptors, as well as gemsbok, springbok, and bat-eared foxes. The park offers a raw, off-the-grid safari experience, ideal for adventurous travelers seeking solitude and self-drive camping. The best time to visit is during the dry winter months (May-September) for cooler temperatures and excellent wildlife visibility."
    }
];

const parkImage = document.getElementById('park-image');
const parkTitle = document.getElementById('park-title');
const parkDescription = document.getElementById('park-description');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageCounter = document.getElementById('page-counter');

let currentParkIndex = 0;

// Function to update the displayed park
function updatePark() {
    const park = parks[currentParkIndex];
    parkImage.src = park.image;
    parkImage.alt = park.title;
    parkTitle.textContent = park.title;
    parkDescription.textContent = park.description;
    pageCounter.textContent = `${currentParkIndex + 1}/${parks.length}`;
    
    // Disable/enable buttons
    prevBtn.disabled = currentParkIndex === 0;
    nextBtn.disabled = currentParkIndex === parks.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentParkIndex > 0) {
        currentParkIndex--;
        updatePark();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentParkIndex < parks.length - 1) {
        currentParkIndex++;
        updatePark();
    }
});

// Initialize with the first park
updatePark();

// wildlife.js

const slider = document.querySelector('.wildlife-slider');
const slides = document.querySelectorAll('.wildlife-slide');
const indicators = document.getElementById('wildlife-indicators');
let currentIndex = 0;

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelectorAll('.wildlife-indicator').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function createIndicators() {
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'wildlife-indicator';
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(i));
    indicators.appendChild(dot);
  });
}

document.getElementById('next').addEventListener('click', () => showSlide(currentIndex + 1));
document.getElementById('prev').addEventListener('click', () => showSlide(currentIndex - 1));

createIndicators();
showSlide(0);
