const container = document.querySelector(".container")
const loadingGif = document.querySelector(".loading")


function loadImages(numberOfImages = 10) {
  let i = 0
  while (i < numberOfImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
  boolean = true
  
}

function showHidden(){
  loadingGif.classList.add("hidden")
}

loadImages()

window.addEventListener("scroll", () => {
  console.log(window.scrollY)
  console.log(window.innerHeight);
  console.log(document.documentElement.scrollHeight);
  if (
    (window.scrollY + window.innerHeight)+1>=document.documentElement.scrollHeight && boolean
  ) {
    boolean = false
    loadingGif.classList.remove("hidden")
    setTimeout(loadImages, 3000)
   
  } else if( boolean) {
    setTimeout(showHidden, 3000)
  }
})

// function imgCountElem(){
//   let counter = 0
//   counter += loadImages[i];
// } console.log( imgCountElem ("Showing image" + counter))
