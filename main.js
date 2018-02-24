let index = 0;
const documentReady = () => {
    console.log("I'm Fucking Ready");
    cycleJessieTraits(true);
    document.querySelector('.about').addEventListener('mouseover', () => {
        let title = document.createElement('h3');
        title.classList.add('coverContactTitle');
        title.innerText = 'About';
        document.querySelector('.demoContainer').style.opacity = 1;
        document.querySelector('.demoContainer').appendChild(title);

    });
    document.querySelector('.about').addEventListener('mouseout', () => {
        document.querySelector('.demoContainer').style.opacity = 0;
        let parent = document.querySelector(".demoContainer");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    });
    document.querySelector('.contact').addEventListener('mouseover', () => {
        let title = document.createElement('h3');
        title.classList.add('coverContactTitle');
        title.innerText = 'Contact';
        document.querySelector('.demoContainer').appendChild(title);
        document.querySelector('.demoContainer').style.opacity = 1;
    });
    document.querySelector('.contact').addEventListener('mouseout', () => {
        document.querySelector('.demoContainer').style.opacity = 0;
        let parent = document.querySelector(".demoContainer");
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    });
};

const cycleJessieTraits = (first = false) => {
    if (first) {
        console.log('first');
        setTimeout(() => {
            let trait = document.querySelector('.trait');
            trait.classList.add('scrollTrait');
            trait.addEventListener('transitionend', () => {
                console.log('finished');
                cycleJessieTraits(false);
            });
        }, 1000);
    } else {
        const traitArr = ['Creative Thinker', 'Passionate Writer', 'Curiosity Driven'];

        let oldTrait = document.querySelector('.trait');
        oldTrait.parentNode.removeChild(oldTrait);
            if (index < traitArr.length - 1) {
                index++;
            } else {
                index = 0;
            }

        let newTrait = document.createElement('h3');
        newTrait.classList.add('trait');
        newTrait.innerText = traitArr[index];
        // let text = document.createTextNode(traitArr[index]);
        // newTrait.appendChild(text);

        let container = document.querySelector('.traitsContainer');
        container.append(newTrait);
        setTimeout(() => {
            let trait = document.querySelector('.trait');
            trait.classList.add('scrollTrait');
            trait.addEventListener("transitionend", function () {
                console.log('finished');
                console.log(index);
                cycleJessieTraits(false);
            })
        }, 0);

    }
};
function Getposition(){
    console.log(window.scrollY);
    if (window.scrollY === 0) {
        console.log('top');
        document.querySelector('.header').style.display = 'block';
        document.querySelector('.hamburgerMenu').style.display = 'none';


    } else {
        console.log('hide nav bar');
        document.querySelector('.header').style.display = 'none';
        document.querySelector('.hamburgerMenu').style.display = 'block';
    }
}