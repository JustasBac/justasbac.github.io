const check = document.getElementById("check");
const checkbtn = document.querySelector(".checkbtn");
const mygtukas = document.querySelector(".checkbtn i");

function paspaude() {
    if (mygtukas.classList.contains("fa-bars")) {
        mygtukas.classList.remove("fa-bars");
        mygtukas.classList.add("fa-times");
        checkbtn.style.background = "rgb(216, 27, 60)"
    } else {
        mygtukas.classList.remove("fa-times");
        mygtukas.classList.add("fa-bars");
        checkbtn.style.background = "none"
    }
}

function paspausta() {
    if (mygtukas.classList.contains("fa-times")) {
        mygtukas.classList.remove("fa-times");
        mygtukas.classList.add("fa-bars");
        checkbtn.style.background = "none"
        check.checked = false;
    }
};

//validation zinutes siuntimo formos:
const form = document.getElementById('formike');
const vardas = document.getElementById('vardas');
const pavarde = document.getElementById('pavarde');
const email = document.getElementById("emailas");
const zinute = document.getElementById('zinute');

const text = document.getElementById("textukas[0]");
const text1 = document.getElementById("textukas[1]");
const text2 = document.getElementById("textukas[2]");
const text3 = document.getElementById("textukas[3]");
const ikonele = document.querySelector(".iconaEmailui");
const ikoneleDenied = document.querySelector(".iconaEmailuiDenied");

window.onload = tekstaIstrinu; //paleidziu

function tekstaIstrinu() {
    vardas.value = "";
    vardas.classList.remove("tekstasYra");
    pavarde.value = "";
    pavarde.classList.remove("tekstasYra");
    email.value = "";
    email.classList.remove("tekstasYra");
    zinute.value = "";
    zinute.classList.remove("tekstasYra");
}



function tekstasIVirsu() {
    if (vardas.value.length > 0) {
        text.innerHTML = "";
        vardas.style.borderColor = "#777";
        vardas.classList.add("tekstasYra");
    } else {
        vardas.classList.remove("tekstasYra");
    }

    if (pavarde.value.length > 0) {
        text1.innerHTML = "";
        pavarde.style.borderColor = "#777";
        pavarde.innerHTML = "";
        pavarde.classList.add("tekstasYra");
    } else {
        pavarde.classList.remove("tekstasYra");
    }
    if (email.value.length > 0) {
        email.classList.add("tekstasYra");
        email.innerHTML = "";
        email.style.borderColor = "#777";
    } else {
        email.classList.remove("tekstasYra");
    }
    if (zinute.value.length > 0) {
        text3.innerHTML = "";
        zinute.classList.add("tekstasYra");
        zinute.innerHTML = "";
        zinute.style.borderColor = "#777";
    } else {
        zinute.classList.remove("tekstasYra");
    }
}

email.addEventListener('keyup', function() {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,4}$/;
    if (email.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid")
        text2.innerHTML = "&nbsp;&nbsp;&nbsp;Accepted"
        ikoneleDenied.classList.remove("fa-times-circle");
        text2.style.color = "rgb(38,166,80)";
        ikonele.classList.add("fa-check-square");
        ikonele.style.color = "rgb(38,166,80)";
        ikonele.style.fontSize = "1.5em";
    } else {
        form.classList.remove("valid")
        form.classList.add("invalid")
        ikonele.classList.remove("fa-check-square");
        text2.innerHTML = "&nbsp;&nbsp;Invalid e-mail address"
        text2.style.color = "red"
        ikoneleDenied.classList.add("fa-times-circle");
        ikoneleDenied.style.color = "red";
        ikoneleDenied.style.fontSize = "1.5em";
    }
    if (email.value.length < 1) {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        ikonele.classList.remove("fa-check-square");
        ikoneleDenied.classList.remove("fa-times-circle");
        text2.innerHTML = "";
        text2.style.color = "#333"
    }
})

form.addEventListener('submit', (e) => {
    if (vardas.value.length < 1) {
        text.innerHTML = "&nbsp;&nbsp;Enter your first name!";
        text.style.color = "red"
        text.style.fontSize = "0.9em";
        vardas.style.borderColor = "red";
        e.preventDefault();
    }
    if (pavarde.value.length < 1) {
        text1.innerHTML = "&nbsp;&nbsp;Enter your last name!";
        text1.style.color = "red"
        text1.style.fontSize = "0.9em";
        pavarde.style.borderColor = "red";
        e.preventDefault();
    }
    if (email.value.length < 1) {
        text2.innerHTML = "&nbsp;&nbsp;Enter your e-mail!";
        text2.style.color = "red"
        text2.style.fontSize = "0.9em";
        email.style.borderColor = "red";
        e.preventDefault();
    }
    if (zinute.value.length < 1) {
        text3.innerHTML = "&nbsp;&nbsp;You left it blank!";
        text3.style.color = "red"
        text3.style.fontSize = "0.9em";
        zinute.style.borderColor = "red";
        e.preventDefault();
    }
    if (zinute.value.length > 499) {
        text3.innerHTML = "&nbsp;&nbsp; Message cannot be longer than 500 symbols!";
        text3.style.color = "red"
        text3.style.fontSize = "0.9em";
        zinute.style.borderColor = "red";
        e.preventDefault();
    }
    if (form.classList.contains('invalid')) {
        e.preventDefault();
    }
})

//animation
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.tekstai', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Expo.easeOut,
    delay: 1.5
});

tl.from('.stagger', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Expo.easeOut,
    duration: 2
}, "-=1.5"); // -1.5s offsetas!

gsap.from(".tranzicija", {
    scrollTrigger: {
        trigger: '.trigerinu',
        start: "center bottom" // kai virsus scroll baro paliecia apacia tada startinam! Gali buti "center"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .3
})
gsap.from(".tranzicija2", {
    scrollTrigger: {
        trigger: '.skill',
        start: "top bottom" // kai virsus scroll baro paliecia apacia tada startinam! Gali buti "center"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .3
})
gsap.from(".tranzicija3", {
    scrollTrigger: {
        trigger: '.trigerinam3',
        start: "bottom bottom" // kai virsus scroll baro paliecia apacia tada startinam! Gali buti "center"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .2
})
gsap.from(".tranzicija4", {
    scrollTrigger: {
        trigger: '.tranzicija4',
        start: "center bottom" // kai virsus scroll baro paliecia apacia tada startinam! Gali buti "center"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .2
})
gsap.from(".tranzicija5", {
    scrollTrigger: {
        trigger: '.tranzicija5',
        start: "center bottom" // kai virsus scroll baro paliecia apacia tada startinam! Gali buti "center"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .2
})
gsap.from(".tranzicija6", {
    scrollTrigger: {
        trigger: '.tranzicija6',
        start: "center bottom" // kai virsus scroll baro paliecia apacia tada startinam! Gali buti "center"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .2
})
gsap.from(".tranzicija7", {
    scrollTrigger: {
        trigger: '.tranzicija7',
        start: "center bottom" // kai virsus scroll baro paliecia apacia tada startinam! Gali buti "center"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .2
})
gsap.from(".tranzicija8", {
    scrollTrigger: {
        trigger: '.kontaktInfo',
        start: "center bottom" // kai virsus scroll baro paliecia apacia tada startinam! Gali buti "center"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: .15
})


setTimeout(function() {
    $('.loader_bg').fadeToggle();
}, 1500);