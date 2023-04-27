const element=document.querySelector("#element")
const customType=document.querySelector("#custom-type")
const button=document.querySelector("button")


var typed = new Typed(element, {
    strings: ["Md Hadiuzzaman Rifat","Web Developer", "MERN Stack Developer"],
    typeSpeed: 100
  });

  button.addEventListener('click',()=>typeWriter())

  var i = 0;
  var txt = 'You can check out my social links and other information via my full name on google search.';
  var speed = 40;
  
  function typeWriter() {
    if (i < txt.length) {
      customType.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
