var button = document.querySelector('#burger-button');
var overlay = document.querySelector('#burger-overlay');
var activatedClass = 'burger-activated';

button.addEventListener('click', function (e) {
    e.preventDefault();
    if (document.getElementById("nav-burger").classList.contains(activatedClass)) {
        document.getElementById("nav-burger").classList.remove(activatedClass);
    }
    else {
        document.getElementById("nav-burger").classList.add(activatedClass);
    }
});

button.addEventListener('keydown', function (e) {
    if (document.getElementById("nav-burger").classList.contains(activatedClass)) {

        if (e.repeat === false && e.which === 27)
            document.getElementById("nav-burger").classList.remove(activatedClass);
    }

});

/*
overlay.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById("nav-burger").classList.remove(activatedClass);
});*/
