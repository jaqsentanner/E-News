const header1 = document.getElementById('header1');
const image = document.getElementById('imageJS');

let headerText
let newsImage

const requestURL = '';

let currentPage = 0;
let add = 1;
let maxPage = 5;
let nextButton = document.getElementById('cycleButton');

nextButton.addEventListener('click', () => {

    currentPage += 1;
    console.log('Page: ' + currentPage);

    function newsAPI () {

        fetch (requestURL)

        .then (function (response) {
            return response.json();
        })

        .then(function(data) {
            if (currentPage < maxPage){

                console.log(data)
            }
            else {
                currentPage = 0
                console.log(data)
            }
        })
    }
    newsAPI();
});

function defaultNews() {
    fetch(requestURL)

    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        console.log(data)
    })
}

defaultNews();





 

