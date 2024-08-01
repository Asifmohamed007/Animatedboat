// I am Asif Mohamed Mohideen,
// a recent graduate from Jerusalem College of Engineering in Chennai, where I completed my Bachelor's Degree in Information Technology (B.Tech) in 2024. Throughout my academic journey, I have developed a strong foundation in various aspects of IT, with a particular interest in front-end development. * As a fresher, I have focused my learning and projects on front-end technologies, where I’ve gained hands-on experience in HTML, CSS, and JavaScript. I am passionate about creating intuitive and engaging user interfaces that enhance user experience and contribute to the overall success of web applications. * During my studies, I completed several projects that allowed me to apply my skills in practical scenarios, such as developing responsive web designs and interactive websites. These projects not only solidified my technical abilities but also taught me the importance of collaboration, problem-solving, and continuous learning. * I am eager to bring my enthusiasm for front-end development to a dynamic team where I can contribute, grow, and continue to build on my knowledge and skills. I am particularly interested in opportunities that allow me to work on innovative projects and leverage my creativity to solve real-world problems.

// Portfolio link: https://asifmohamed-portfolio.netlify.app/

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain3 = document.getElementById("mountain3");
let mountain4 = document.getElementById("mountain4");
let rivers = document.getElementById("rivers");
let boat = document.getElementById("boat");
let sayes = document.querySelector(".design");
let main = document.querySelector(".main");
let links = document.getElementsByTagName("a");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountain3.style.top = value * 2 + "px";
  mountain4.style.top = value * 1.5 + "px";
  rivers.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3.5 + "px";

  sayes.style.fontSize = value + "px";
  if (scrollY >= 67) {
    sayes.style.fontSize = 67 + "px";
    sayes.style.position = "fixed";
    if (scrollY >= 478) {
      sayes.style.display = "none";
    } else {
      sayes.style.display = "block";
    }
  }
  if (scrollY >= 127) {
    main.style.background = "#10001f";
  } else {
    main.style.background = "#1D5D9B";
  }
};
