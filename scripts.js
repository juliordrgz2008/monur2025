const homeButton = document.getElementById('homeButton');
const inscButton = document.getElementById('inscButton');

var buttons = [homeButton, inscButton];

for (let x=0;x<buttons.length;x++){
    hover(buttons[x]);
}

function hover(button){
    button.addEventListener('mouseover', function(){
        button.classList.toggle("litButton");
    });;
    button.addEventListener('mouseout', function(){
        button.classList.toggle("litButton");    
    });  
}

homeButton.addEventListener("click", function(){
    window.location.href = 'main.html';
});

inscButton.addEventListener("click", function(){
    window.location.href = 'inscriptions.html';
});
