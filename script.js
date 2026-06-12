

const text = "Frontend Development Journey";
const heroTitle = document.querySelector(".hero h1");

heroTitle.innerHTML = "";

let i = 0;

function typing() {

    if(i < text.length){

        heroTitle.innerHTML += text.charAt(i);
        i++;

        setTimeout(typing,100);
    }
}

typing();




const progressBar = document.createElement("div");

progressBar.classList.add("progress-bar");

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    let totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});




const reveals = document.querySelectorAll(".card");

const revealObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");
        }

    });

},{threshold:0.2});

reveals.forEach(item=>{
    revealObserver.observe(item);
});




const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.href.includes(current)){

            link.classList.add("active");
        }

    });

});




document.addEventListener("mousemove",(e)=>{

    const glow =
    document.querySelector(".cursor-glow");

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});



window.addEventListener("scroll",()=>{

    const hero =
    document.querySelector(".hero");

    let scroll = window.pageYOffset;

    hero.style.backgroundPositionY =
    scroll * 0.5 + "px";

});




const cards =
document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    setInterval(()=>{

        card.style.transform =
        `translateY(${
        Math.sin(Date.now()/1000 + index)
        * 10}px)`;

    },20);

});




const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const updateCounter = ()=>{

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 150;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            requestAnimationFrame(updateCounter);

        }
        else{

            counter.innerText = target;
        }
    }

    updateCounter();

});