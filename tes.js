import "../components/ImageSection";
const app = document.querySelector("#app");


// Section 1
const images1 = [
    "https://placeimg.com/100/100/people",
    "https://placeimg.com/100/100/people",
    "https://placeimg.com/100/100/people"
];

const section1 = document.createElement("image-section");
section1.images = images1;
app.appendChild(section1);

// Section 2
const images2 = [
    "https://placeimg.com/100/100/people",
    "https://placeimg.com/100/100/people",
    "https://placeimg.com/100/100/people"
];

const section2 = document.createElement("image-section");
section1.images = images2;
app.appendChild(section2);