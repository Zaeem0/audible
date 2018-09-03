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
    app.dom.ctaIdle = document.querySelector('.cta-idle');
    app.dom.ctaHover = document.querySelector('.cta-hover');

}

function leftClick(){
    var book = document.querySelectorAll('.book');
    console.log('moving left');
    //get appended books in a nodelist
    //book are listed from left to right
    var book = document.querySelectorAll('.book');
    for(var i = 0; i<book.length; i++){
        if(book[i].style.left=='-160px'){
            //move left most book to right most book
            book[i].style.left = '160px';
        }else if(book[i].style.left=='-80px'){
            //move center left book to most left book
            //book[i].style.transform = 'scale(0.4)';
            book[i].style.height = "80px";
            book[i].style.width = "80px";
            book[i].style.left = '-160px';
            book[i].style.zIndex = '1';
        }else if(book[i].style.left=='0px'){
            //move center book to center left book
            book[i].style.zIndex = '2';
            book[i].style.left = '-80px';
        }else if(book[i].style.left=='80px'){
            //move center rigt book to center book
            //book[i].style.transform = 'scale(0.6)';
            book[i].style.height = "120px";
            book[i].style.width = "120px";
            book[i].style.left = '0px';
            book[i].style.zIndex = '3';
        }else if(book[i].style.left=='160px'){
            //move rigt most book to center right book
            //book[i].style.transform = 'scale(0.5)';
            book[i].style.height = "100px";
            book[i].style.width = "100px";
            book[i].style.left = '80px';
            book[i].style.zIndex = '2';
        }

    }
}

function rightClick(){
    console.log('moving right');
    //get appended books in a nodelist
    //book are listed from left to right
    var book = document.querySelectorAll('.book');
    for(var i = 0; i<book.length; i++){
        if(book[i].style.left=='-160px'){
            //move left most book to center left book
            //book[i].style.transform = 'scale(0.5)';
            book[i].style.height = "100px";
            book[i].style.width = "100px";
            book[i].style.left = '-80px';
            book[i].style.zIndex = '2';

        }else if(book[i].style.left=='-80px'){
            //move center left book to center book
            //book[i].style.transform = 'scale(0.6)';
            book[i].style.height = "120px";
            book[i].style.width = "120px";
            book[i].style.left = '0px';
            book[i].style.zIndex = '3';
        }else if(book[i].style.left=='0px'){
            //move center book to center right book
            book[i].style.zIndex = '2';
            //book[i].style.transform = 'scale(0.5)';
            book[i].style.height = "100px";
            book[i].style.width = "100px";
            book[i].style.left = '80px';
        }else if(book[i].style.left=='80px'){
            //move center rigt book to right most book
            //book[i].style.transform = 'scale(0.4)';
            book[i].style.height = "80px";
            book[i].style.width = "80px";
            book[i].style.left = '160px';
            book[i].style.zIndex = '1';
        }else if(book[i].style.left=='160px'){
            //move center right book to right most book
            //book[i].style.transform = 'scale(0.4)';
            book[i].style.height = "80px";
            book[i].style.width = "80px";
            book[i].style.left = '-160px';
            book[i].style.zIndex = '1';
        }

    }
}


app.initListeners = function(){
    //moves carousel left once on click
    app.dom.arrowLeft.addEventListener('click', leftClick);

    //moves carousel right on clic
    app.dom.arrowRight.addEventListener('click', rightClick);

    //hover over cta
    app.dom.frameTwo.addEventListener('mouseover', function(){
        console.log('over');
        console.log(app.dom.ctaIdle);
        app.dom.ctaIdle.style.transform = "scaleY(0) translateX(-50%)";
        app.dom.ctaHover.style.transform = "scaleY(1) translateX(-50%)";
    });
    app.dom.frameTwo.addEventListener('mouseout', function(){
        console.log('out');
        app.dom.ctaIdle.style.transform = "scaleY(1) translateX(-50%)";
        app.dom.ctaHover.style.transform = "scaleY(0) translateX(-50%)";
    });
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

    //autoplay carousel
    setTimeout(function(){
            //autoplay carousel
            var moveCounter = 0;
            var autoplay = setInterval(function(){
                moveCounter++
                leftClick();
                if(moveCounter == 5){
                    clearInterval(autoplay);
                }
            },500);

    },5500);
}

app.initCarousel = function(){
    var numberOfImages = 5;
    for(var i = 0; i<numberOfImages; i++){
        var newBook = document.createElement('div');
        newBook.classList.add('book');
        //add new image with each iteration
        newBook.style.backgroundImage = 'url(' + './img/' + i + '.jpg' + ')';
        newBook.style.opacity = 1;
            if(i == 0){
                //left image
                //newBook.style.transform = 'scale(' + 0.4 + ')';
                newBook.style.height = "80px";
                newBook.style.width = "80px";
                newBook.style.left = -160 + "px";
            }else if(i == 1){
                //center left image
                //newBook.style.transform = 'scale(' + 0.5 + ')';
                newBook.style.height = "100px";
                newBook.style.width = "100px";
                newBook.style.left = -80 + "px";
            }else if(i == 2){
                //center image
                //newBook.style.transform = 'scale(' + 0.6 + ') ';
                newBook.style.height = "120px";
                newBook.style.width = "120px";
                newBook.style.left = 0 + "px";
                newBook.style.zIndex = 3;
            }else if(i == 3){
                //center right image
                //newBook.style.transform = 'scale(' + 0.5 + ') ';
                newBook.style.height = "100px";
                newBook.style.width = "100px";
                newBook.style.left = 80 + "px";
                newBook.style.zIndex = 2;
            }else if(i == 4){
                //right image
                //newBook.style.transform = 'scale(' + 0.4 + ') ';
                newBook.style.height = "80px";
                newBook.style.width = "80px";
                newBook.style.left = 160 + "px";
            }

        app.dom.carousel.appendChild(newBook);
    }
}


app.init = function(){
    app.initDom();
    app.playAnimation();
    app.initCarousel();
    app.initListeners();
    console.log('init done');
}

app.init();
