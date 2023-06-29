const images=[
    "일본.webp","중국.jpg","한국.jpeg"
];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");
bgImage.src=`img/${chosenImage}`;
document.body.appendChild(bgImage);