const photos = [
"1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",
"6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",
"11.jpg","12.jpg","13.jpg","14.jpg","15.jpg",
"16.jpg","17.jpg","18.jpg","19.jpg","20.jpg",
"21.jpg","22.jpg","23.jpg","24.jpg","25.jpg"
];

let current = 0;
const photo = document.getElementById("photo");
const videoSection = document.querySelector(".video");

videoSection.style.display = "none";

const slideshow = setInterval(() => {
    current++;

    if (current >= photos.length) {
        clearInterval(slideshow);

        // Hide photo
        photo.style.display = "none";

        // Show video
        videoSection.style.display = "block";

        // Play video
        video.play();

        return;
    }

    photo.src = photos[current];

}, 3000);
const video = document.getElementById("video");

video.onended = function () {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".video").style.display = "none";
    document.querySelector(".ending").style.display = "none";

    document.getElementById("finalMessage").style.display = "flex";
};