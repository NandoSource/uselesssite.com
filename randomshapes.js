window.onload = function() {

  let background = document.querySelector(".background");

  for (let i = 0; i < 20; i++) {

    let shape = document.createElement("span");

    // randomises starting position
    let randomLeft = Math.random() * 100;
    shape.style.left = randomLeft + "%";


    // randomises rise speed
    let randomSpeed = Math.random() * 15 + 10;
    shape.style.animationDuration = randomSpeed + "s";

    // randomises shape type and size
    if (Math.random() > 0.7) {
      // makes triangles
      let side = Math.random() * 60 + 40; // side length
      let height = (Math.sqrt(3) / 2) * side; // height of equilateral triangle

      shape.style.width = "0";
      shape.style.height = "0";
      shape.style.background = "none"; 
      shape.style.borderLeft = side / 2 + "px solid transparent";
      shape.style.borderRight = side / 2 + "px solid transparent";
      shape.style.borderBottom = height + "px solid #F45B69";
      shape.style.borderRadius = "0";
    } else {
      // makes circle or square
      let randomSize = Math.random() * 80 + 20;
      shape.style.width = randomSize + "px";
      shape.style.height = randomSize + "px";
      shape.style.background = "#F45B69";

      if (Math.random() > 0.5) {
        shape.style.borderRadius = "50%";
      } else {
        shape.style.borderRadius = "8px";
      }

      // removes triangles borders if its a circle or square
      shape.style.borderLeft = "none";
      shape.style.borderRight = "none";
      shape.style.borderBottom = "none";
    }

    background.appendChild(shape);
  }
};