document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide .carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Auto-slide functionality
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});


document.getElementById('homeBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('facilitationBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('facilitation').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('messageBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    var userName = "Ardian Permana";
    if (userName) {
        document.getElementById('userName').textContent = userName;
    }
});

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('fname').value;
    const lahir = document.getElementById('lname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    document.getElementById('displayName').textContent = name;
    document.getElementById('displayLahir').textContent = lahir;
    document.getElementById('displayGender').textContent = gender;
    document.getElementById('displayMessage').textContent = message;

    // Make the display section visible
    document.getElementById('formDataDisplay').style.display = 'block';
});
