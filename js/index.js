// Your code goes here
// 1
const body = document.querySelector("body")
body.addEventListener("click", event => event.target.style.backgroundColor = "green")



// 2
window.addEventListener("load", () => {
    alert ("This is the alert")
});


// 3
const navigation = document.querySelector(".nav");

navigation.addEventListener("dblclick", () => {
    alert ("This is the alert on the nav")
});



// 4
body.addEventListener("copy", () => {
    alert("You forgot to say the magic word")
})


// 5
const intro = document.querySelector(".intro p")
intro.addEventListener("mousemove", () => {
    intro.style.fontSize = "80px"
})


const images = document.querySelectorAll("img");
// 6
Array.from(images).forEach((image) => {
    image.style.cursor = "zoom-in";
    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.2)";       
    }); 


// 7
    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(.2)";       
    });    
});


// 8
document.addEventListener('keydown', (event) => {
    if (event.key == "9"){
        document.body.style.backgroundColor = "black";
    }
})


// 9



const navLink = document.querySelectorAll(".nav")
navLink.forEach(navigation => {
    navigation.addEventListener("click", (event) => {
        event.preventDefault()
    })
})
