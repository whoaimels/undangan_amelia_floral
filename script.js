//elemen cover goyang
const imgLTop = document.querySelector('.img-l-top');
const imgRTop = document.querySelector('.img-r-top');
const imgLBottom = document.querySelector('.img-l-bottom');
const imgRBottom = document.querySelector('.img-r-bottom');

function startSwinging(element) {
    if (element) { 
        element.style.animationPlayState = 'running'; 
    }
}

function stopSwinging(element) {
    if (element) { 
        element.style.animationPlayState = 'paused';
    }
}

function changeSwingSpeed(element, speed) {
    if (element) { 
        element.style.animationDuration = `${speed}s`;
    }
}

window.onload = function () {
    [imgLTop, imgRTop, imgLBottom, imgRBottom].forEach((img) => {
        if (img) startSwinging(img);
    });
};

if (imgLTop) {
    imgLTop.addEventListener('click', () => {
        const isPaused = imgLTop.style.animationPlayState === 'paused';
        isPaused ? startSwinging(imgLTop) : stopSwinging(imgLTop);
    });
}

setInterval(() => {
    const newSpeed = Math.random() * 2 + 3; 
    changeSwingSpeed(imgLTop, newSpeed);
    changeSwingSpeed(imgRTop, newSpeed);
    changeSwingSpeed(imgLBottom, newSpeed);
    changeSwingSpeed(imgRBottom, newSpeed);
}, 5000); 

//open invitation
function openInvitation() {
    const cover = document.querySelector("#cover");
    const intro = document.querySelector("#isi");

    cover.style.opacity = "0";
    setTimeout(() => {
        cover.style.display="none";
        isi.style.display="block";
            setTimeout(() => {
                isi.style.opacity="1";
            }, 30);
        isi.classList.add("active");
    }, 300);
}

//rsvp muncul
function showRSVPForm() {
    var formRSVP = document.querySelector('#rsvp-isi');
    formRSVP.style.display = "block";
}

//hadiah otomatis copy
function salinKeKeyboard() {
    var copyText = document.getElementById("norekening").textContent;

    navigator.clipboard.writeText(copyText).then(function() {
        alert("Teks disalin ke clipboard: " + copyText);
    }).catch(function(err) {
        console.error('Gagal menyalin teks: ', err);
    });
}

//musik
function putarMusik(){
    const musik=document.querySelector('#musik');
    const imgmusik=document.querySelector('#imgmusik');

    if(musik.paused){
        musik.play();
        imgmusik.src="assets/images/musikon.png";
    }else{
        musik.pause();
        imgmusik.src="assets/images/musikoff.png";
    }
}

//scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//untuk pesan
document.getElementById('formPesan').addEventListener('submit', function(e) {
    e.preventDefault(); 

    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var pesan = document.getElementById('pesanInput').value;
    var tampilkanPesan = document.getElementById('tampilkanPesan');
    tampilkanPesan.innerHTML = '<div class="tampilkan-pesan">' +
                                '<strong><u>' + nama + '</u></strong><br>' +
                                alamat + '<br>' +
                                pesan + '<br><br>' +
                                '</div>' + tampilkanPesan.innerHTML;

    document.getElementById('formPesan').reset();
});