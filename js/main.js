const galleryModal = document.querySelector("#gallery-modal");
const interestCards = document.querySelectorAll(".interest-card");
const galleryImage = document.querySelector(".gallery-image");
const galleryCaption = document.querySelector(".gallery-caption");
const closeButton = document.querySelector(".gallery-close");
const previousButton = document.querySelector(".gallery-previous");
const nextButton = document.querySelector(".gallery-next");

const galleries = {
  hiking: [
    {
      src: "./images/personal/hiking/h1.jpg",
      alt: "Alejandra hiking",
      caption: "Enjoying the outdoors",
    },
    {
      src: "./images/personal/hiking/h2.jpg",
      alt: "Hiking memory",
      caption: "One of my favorite ways to disconnect",
    },
    {
      src: "./images/personal/hiking/h3.jpg",
      alt: "Hiking memory",
      caption: "Exploring new places",
    },
    {
      src: "./images/personal/hiking/h4.jpg",
      alt: "Hiking memory",
      caption: "Outdoor adventures",
    },
    {
      src: "./images/personal/hiking/h5.jpg",
      alt: "Hiking memory",
      caption: "Time outside",
    },
    {
      src: "./images/personal/hiking/h6.jpg",
      alt: "Hiking memory",
      caption: "Enjoying nature",
    },
    {
      src: "./images/personal/hiking/h7.jpg",
      alt: "Hiking memory",
      caption: "A day on the trail",
    },
    {
      src: "./images/personal/hiking/h8.jpg",
      alt: "Hiking memory",
      caption: "Another adventure",
    },
    {
      src: "./images/personal/hiking/h9.jpg",
      alt: "Hiking memory",
      caption: "Views worth the walk",
    },
    {
      src: "./images/personal/hiking/h10.jpg",
      alt: "Hiking memory",
      caption: "Always ready for the next trail",
    },
  ],

  traveling: [
    {
      src: "./images/personal/traveling/t1.jpg",
      alt: "Travel memory",
      caption: "Discovering new places",
    },
    {
      src: "./images/personal/traveling/t2.jpg",
      alt: "Travel memory",
      caption: "A favorite travel memory",
    },
    {
      src: "./images/personal/traveling/t3.jpg",
      alt: "Travel memory",
      caption: "Always planning the next trip",
    },
    {
      src: "./images/personal/traveling/t4.jpg",
      alt: "Travel memory",
      caption: "Exploring somewhere new",
    },
    {
      src: "./images/personal/traveling/t5.jpg",
      alt: "Travel memory",
      caption: "New places, new memories",
    },
    {
      src: "./images/personal/traveling/t6.jpg",
      alt: "Travel memory",
      caption: "Another place explored",
    },
    {
      src: "./images/personal/traveling/t7.jpg",
      alt: "Travel memory",
      caption: "Enjoying the journey",
    },
    {
      src: "./images/personal/traveling/t8.jpg",
      alt: "Travel memory",
      caption: "One trip at a time",
    },
    {
      src: "./images/personal/traveling/t9.jpg",
      alt: "Travel memory",
      caption: "A moment to remember",
    },
    {
      src: "./images/personal/traveling/t10.jpg",
      alt: "Travel memory",
      caption: "Where to next?",
    },
  ],

  family: [
    {
      src: "./images/personal/family/f1.jpg",
      alt: "Family memory",
      caption: "Time with family",
    },
    {
      src: "./images/personal/family/f2.jpg",
      alt: "Family memory",
      caption: "Making memories together",
    },
    {
      src: "./images/personal/family/f3.jpg",
      alt: "Family memory",
      caption: "The people who matter most",
    },
    {
      src: "./images/personal/family/f4.jpg",
      alt: "Family memory",
      caption: "Family time",
    },
    {
      src: "./images/personal/family/f5.jpg",
      alt: "Family memory",
      caption: "Moments together",
    },
    {
      src: "./images/personal/family/f6.jpg",
      alt: "Family memory",
      caption: "A special memory",
    },
    {
      src: "./images/personal/family/f7.jpg",
      alt: "Family memory",
      caption: "Together is better",
    },
    {
      src: "./images/personal/family/f8.jpg",
      alt: "Family memory",
      caption: "Another family moment",
    },
    {
      src: "./images/personal/family/f9.jpg",
      alt: "Family memory",
      caption: "Making memories",
    },
    {
      src: "./images/personal/family/f10.jpg",
      alt: "Family memory",
      caption: "My favorite people",
    },
  ],

  nixie: [
    {
      src: "./images/personal/nixie/n1.jpg",
      alt: "Nixie",
      caption: "Meet Nixie",
    },
    {
      src: "./images/personal/nixie/n2.jpg",
      alt: "Nixie",
      caption: "Small dog, big personality",
    },
    {
      src: "./images/personal/nixie/n3.jpg",
      alt: "Nixie",
      caption: "Probably judging me",
    },
    {
      src: "./images/personal/nixie/n4.jpg",
      alt: "Nixie",
      caption: "Another day with Nixie",
    },
    {
      src: "./images/personal/nixie/n5.jpg",
      alt: "Nixie",
      caption: "Professional napper",
    },
    {
      src: "./images/personal/nixie/n6.jpg",
      alt: "Nixie",
      caption: "Always nearby",
    },
    {
      src: "./images/personal/nixie/n7.jpg",
      alt: "Nixie",
      caption: "Tiny but mighty",
    },
    {
      src: "./images/personal/nixie/n8.jpg",
      alt: "Nixie",
      caption: "Another Nixie moment",
    },
    {
      src: "./images/personal/nixie/n9.jpg",
      alt: "Nixie",
      caption: "Ready for the camera",
    },
    {
      src: "./images/personal/nixie/n10.jpg",
      alt: "Nixie",
      caption: "Life is better with Nixie",
    },
  ],
};

let currentGallery = [];
let currentImageIndex = 0;

function showImage() {
  const image = currentGallery[currentImageIndex];

  galleryImage.src = image.src;
  galleryImage.alt = image.alt;
  galleryCaption.textContent = image.caption;
}

function closeGallery() {
  galleryModal.hidden = true;
}

// Gallery code only runs on a page that contains the gallery.
if (galleryModal) {
  interestCards.forEach((card) => {
    card.addEventListener("click", () => {
      const galleryName = card.dataset.gallery;

      currentGallery = galleries[galleryName];
      currentImageIndex = 0;

      showImage();
      galleryModal.hidden = false;
    });
  });

  closeButton.addEventListener("click", closeGallery);

  nextButton.addEventListener("click", () => {
    currentImageIndex++;

    if (currentImageIndex >= currentGallery.length) {
      currentImageIndex = 0;
    }

    showImage();
  });

  previousButton.addEventListener("click", () => {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = currentGallery.length - 1;
    }

    showImage();
  });

  document.addEventListener("keydown", (event) => {
    if (galleryModal.hidden) {
      return;
    }

    if (event.key === "Escape") {
      closeGallery();
    } else if (event.key === "ArrowRight") {
      currentImageIndex++;

      if (currentImageIndex >= currentGallery.length) {
        currentImageIndex = 0;
      }

      showImage();
    } else if (event.key === "ArrowLeft") {
      currentImageIndex--;

      if (currentImageIndex < 0) {
        currentImageIndex = currentGallery.length - 1;
      }

      showImage();
    }
  });
}

// Back to top
const backToTopButton = document.querySelector("#back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}