function scrollGallery(direction) {
  const gallery = document.getElementById("galleryCarousel");
  const scrollAmount = 320;
  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery-carousel img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  document.querySelector(".close").addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});

function openFullscreen(videoId) {
  const video = document.getElementById(videoId);
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { // Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // IE11
    video.msRequestFullscreen();
  }
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}