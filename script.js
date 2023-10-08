const title = document.getElementById("title");
const bg_2 = document.getElementById("bg-2");
const bg_3 = document.getElementById("bg-3");

const aboutEclipseText = document.getElementById('about-eclipse')
const informativeCard = document.getElementById('about')
const image_cards = document.getElementsByClassName('image__card')

const moon = document.getElementById("moon");
const sun = document.getElementById("sun")
const windowHeight = window.innerHeight

for (let i = 0; i < image_cards.length; i++) {
    image_cards.item(i).style.gridRow = `span 1`
    image_cards.item(i).style.gridColumn = `${i>3?`${(i-3)*2} / ${(i-3)*2+2}`:'span 2'}`
    image_cards.item(i).addEventListener('click', () => {
        if (image_cards.item(i).style.transform === `rotateY(180deg)`){
            image_cards.item(i).style.transform = `rotateY(0deg)`;
        }
        else {
            image_cards.item(i).style.transform = `rotateY(180deg)`;
        }
    })
}

document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    title.style.fontSize = `${100 + scrollY * 0.5}px`;
    bg_2.style.top = `-${scrollY * 0.5}px`;
    bg_3.style.top = `-${scrollY}px`;
    bg_3.style.scale = `${1 + scrollY * 0.001}`;

    const progressOfScroll = scrollY - windowHeight/2;
    if (scrollY < windowHeight*1.44)
    {
        sun.style.transform = `scale(100%)`

        moon.style.transform = `translateX(${70-progressOfScroll/10}vw)`;
        const brightnessValue = 100 - progressOfScroll/7;
        moon.style.filter = `brightness(${brightnessValue}%)`;

        aboutEclipseText.style.display = 'none'
        aboutEclipseText.style.transform = 'scale(0%)'
    }
    else
    {
        moon.style.transform = `translateX(0vw)`
        moon.style.filter = 'brightness(0%)'

        sun.style.transform = `scale(${-365+(progressOfScroll/1.5)}%)`
        moon.style.transform = `scale(${-365+(progressOfScroll/1.5)}%)`
        aboutEclipseText.style.display = 'block'
        const contentSize = -190 +(progressOfScroll/4)
        aboutEclipseText.style.transform = `scale(${contentSize < 0? 0:contentSize > 80? 80:contentSize}%) ` + `translateY(${progressOfScroll/14-10}vh)`
    }
 });
