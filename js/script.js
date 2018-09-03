var app = app || {};

app.dom  = {};

app.initDom = function(){
    //frames
    app.dom.frameOne = document.querySelector('.frame-one');
    app.dom.frameTwo = document.querySelector('.frame-two');

    //text for frame one
    app.dom.eavesdrop = document.querySelector('.girl-copy-1');
    app.dom.onThe = document.querySelector('.girl-copy-2');
    app.dom.richAnd = document.querySelector('.girl-copy-3');
    app.dom.famous = document.querySelector('.girl-copy-4');

    //carousel
    app.dom.carousel = document.querySelector('.carousel');

    //carousel arrows
    app.dom.arrowLeft = document.querySelector('.arrow-left');
    app.dom.arrowRight = document.querySelector('.arrow-right');

    //cta
    app.dom.cta = document.querySelector('.cta');

}

app.playAnimation = function(){

    //fade in copy for frame one
    setTimeout(function(){
        app.dom.eavesdrop.style.opacity = 1;
    },500);
    setTimeout(function(){
        app.dom.onThe.style.opacity = 1;
    },1000);
    setTimeout(function(){
        app.dom.richAnd.style.opacity = 1;
    },1500);
    setTimeout(function(){
        app.dom.famous.style.opacity = 1;
    },2000);

    //hide frame one(copy and bg-girl)
    setTimeout(function(){
        app.dom.frameOne.style.opacity = 0;
    },4000);

    //show frame two
    setTimeout(function(){
            app.dom.frameTwo.style.opacity = 1;
    },5000);
}

app.initCarousel = function(){
    var images = 5;
    for(var i = 0; i<images; i++){
        var newBook = document.createElement('div');
        var imageURL = './img/' + i + '.jpg';

        newBook.classList.add('book');
        newBook.style.background = 'url(' + imageURL + ') no-repeat center center';
        newBook.style.opacity = 1;
            if(i == 0){
                //left image
                newBook.style.transform = 'scale(' + 0.4 + ')';
                newBook.style.left = -160 + "px";
            }else if(i == 1){
                //center left image
                newBook.style.transform = 'scale(' + 0.5 + ')';
                newBook.style.left = -80 + "px";
            }else if(i == 2){
                //center image
                newBook.style.transform = 'scale(' + 0.6 + ') ';
                newBook.style.left = 0 + "px";
                newBook.style.zIndex = 3;
            }else if(i == 3){
                //center right image
                newBook.style.transform = 'scale(' + 0.5 + ') ';
                newBook.style.left = 80 + "px";
                newBook.style.zIndex = 2;
            }else if(i == 4){
                //right image
                newBook.style.transform = 'scale(' + 0.4 + ') ';
                newBook.style.left = 130 + "px";
            }

        app.dom.carousel.appendChild(newBook);
    }
}


app.init = function(){
    app.initDom();
    app.playAnimation();
    app.initCarousel();
    console.log('init done');
}

app.init();
