document.querySelectorAll('.scene-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        document.getElementById('op').style.display = 'none';

        document.querySelectorAll('.scene').forEach(scene => {
            scene.classList.remove('active');
        });

        const targetScene = this.getAttribute('data-target');
        document.querySelector('.' + targetScene).classList.add('active');
    });
});

const images = [
    'img/紅心1.png',
    'img/紅心2.png'
];

const mainImage = document.getElementById('main-image');
const word1 = document.querySelector('.word1');
const word2 = document.querySelector('.word2');

word1.classList.add('active');
word2.classList.remove('active');

setTimeout(() => {
    mainImage.src = images[1];

    word1.classList.remove('active');
    word2.classList.add('active');
}, 3000);