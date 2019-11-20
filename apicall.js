


//New Array created outside Function

const proImages = document.querySelectorAll('.image-holder');
const cards =  document.querySelectorAll('.card');
const titles = document.querySelectorAll('.title');


//Arrays to create Infomation for Modal Pull OUt
const outImages=[];
const outCards=[];
const outTitles = [];
const birthdays = [];
const lowerCards = [];

//Function to Extract detail from Response
function extractInfo(data) {
    for (var i =0; i < data.length; i++)
    {  proImages[i].innerHTML= "<img src="+data[i].picture.large +" class='img-cont' alt>" ;
       cards[i].innerHTML= data[i].email+ "<br>"+data[i].location.city;
       titles[i].innerHTML = data[i].name.first+ " " + data[i].name.last;
       outImages.push("<img src="+data[i].picture.large +" class='img-cont' alt>");
       outCards.push(data[i].email+ "<br>"+data[i].location.city+"<br>");
       outTitles.push(data[i].name.first+ " " + data[i].name.last);
       birthdays.push(data[i].dob.date)
       lowerCards.push(data[i].cell+ "<br>"+data[i].location.street.number+" "+data[i].location.street.name+" "+data[i].location.state+" "+data[i].location.postcode+"<br>");
    };
};




// Pulls Data from API parces to strings
const apiResponses = (
  fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    // .then(data => console.log(data))  //Use to investigate JSON response
    .then(data => extractInfo(data.results)) //need to remove to investigate response
  )

justDates=[];
birthdays.forEach(day => {
  const dayAbbreviation = day.slice(0, 10);
  justDates.push(dayAbbreviation);
});



// "Birthday:"+" "+
// Get the button that opens the modal
const btn = document.querySelectorAll('.myBtn');
//Works through underlying functions
for (var i = 0; i < btn.length; i++) {
   (function(index) {
btn[index].addEventListener("click", function(){
        document.getElementById('myModal').style.display = "block";
        document.getElementById('modal-outbox').style.display = "block";
        document.getElementById("modal-header").style.display = "block";
        document.getElementById("modal-content").style.display = "block";
        document.getElementById("modal-middle").style.display = "block";
        document.getElementById("modal-lower").style.display = "block";
        document.getElementById("modal-content").innerHTML = outImages[index]+"<br>"+outTitles[index]
        document.getElementById("modal-middle").innerHTML=outCards[index];
        document.getElementById('close').style.display = "block";
        document.getElementById("modal-lower").innerHTML=lowerCards[index]+new Date(Date.parse(birthdays[index])).toLocaleDateString();
      })
})(i);
}


const pairOne = document.querySelectorAll('.first');
const pairTwo = document.querySelectorAll('.second');
const pairThree = document.querySelectorAll('.three');
const pairFour = document.querySelectorAll('.four');
const pairFive = document.querySelectorAll('.five');
const pairSix = document.querySelectorAll('.six');


//Highlight Pairs
for (var i = 0; i < pairOne.length; i++) {
    (function(index) {
pairOne[index].addEventListener("mouseover", function() {
    if(window.matchMedia( "(min-width: 768px)").matches ) {
    console.log(window.matchMedia( "(max-width: 1024px)").matches);
        console.log(window.matchMedia( "(max-width: 1024px)").matches);
    document.getElementById('A-two').style.backgroundColor="yellow";
    document.getElementById('A-one').style.backgroundColor="yellow";
  }
  })
})(i);
}


for (var i = 0; i < pairTwo.length; i++) {
    (function(index) {
pairTwo[index].addEventListener("mouseover", function() {
if(window.matchMedia( "(min-width: 768px)").matches ) {
    document.getElementById('B-one').style.backgroundColor="yellow";
    document.getElementById('A-three').style.backgroundColor="yellow";
  }
  })
})(i);
}

for (var i = 0; i < pairThree.length; i++) {
    (function(index) {
pairThree[index].addEventListener("mouseover", function() {
if(window.matchMedia( "(min-width: 768px)").matches ) {
    document.getElementById('B-two').style.backgroundColor="yellow";
    document.getElementById('B-three').style.backgroundColor="yellow";
  }
  })
})(i);
}

for (var i = 0; i < pairFour.length; i++) {
    (function(index) {
pairFour[index].addEventListener("mouseover", function() {
if(window.matchMedia( "(min-width: 768px)").matches ) {
    document.getElementById('C-two').style.backgroundColor="yellow";
    document.getElementById('C-one').style.backgroundColor="yellow";
  }
  })
})(i);
}


for (var i = 0; i < pairFive.length; i++) {
    (function(index) {
pairFive[index].addEventListener("mouseover", function() {
if(window.matchMedia( "(min-width: 768px)").matches ) {
    document.getElementById('D-one').style.backgroundColor="yellow";
    document.getElementById('C-three').style.backgroundColor="yellow";
  }
  })
})(i);
}

for (var i = 0; i < pairSix.length; i++) {
    (function(index) {
pairSix[index].addEventListener("mouseover", function() {
if(window.matchMedia( "(min-width: 768px)").matches ) {
    document.getElementById('D-two').style.backgroundColor="yellow";
    document.getElementById('D-three').style.backgroundColor="yellow";
  }
  })
})(i);
}




//Automatic Build highlighting for Rows in Wide format

const rows = document.querySelectorAll('.groupOne');
const rowsTwo = document.querySelectorAll('.groupTwo');
const rowsThree = document.querySelectorAll('.groupThree');
const rowsFour = document.querySelectorAll('.groupFour');



for (var i = 0; i < rows.length; i++) {
    (function(index) {
rows[index].addEventListener("mouseover", function() {
  if(window.matchMedia( "(min-width: 1024px)" ).matches ) {
    console.log(window.matchMedia( "(min-width: 1024px)").matches);
    document.getElementById('A-one').style.backgroundColor="yellow";
    document.getElementById('A-two').style.backgroundColor="yellow";
    document.getElementById('A-three').style.backgroundColor="yellow";
    document.getElementById('B-one').style.backgroundColor="white";
  }
  })
})(i);
}


for (var i = 0; i < rows.length; i++) {
    (function(index) {
rowsTwo[index].addEventListener("mouseover", function() {
  if(window.matchMedia( "(min-width: 1024px)").matches ) {
    document.getElementById('B-one').style.backgroundColor="yellow";
    document.getElementById('B-two').style.backgroundColor="yellow";
    document.getElementById('B-three').style.backgroundColor="yellow";
    document.getElementById('A-three').style.backgroundColor="white";
  }
  })
})(i);
}

console.log(window.matchMedia("(min-width: 1024px)"));

for (var i = 0; i < rows.length; i++) {
    (function(index) {
rowsThree [index].addEventListener("mouseover", function() {
  if(window.matchMedia( "(min-width: 1024px)").matches ) {
    document.getElementById('C-one').style.backgroundColor="yellow";
    document.getElementById('C-two').style.backgroundColor="yellow";
    document.getElementById('C-three').style.backgroundColor="yellow";
    document.getElementById('D-one').style.backgroundColor="white";
  } else {}
  })
})(i);
}


for (var i = 0; i < rows.length; i++) {
    (function(index) {
rowsFour[index].addEventListener("mouseover", function() {
  if(window.matchMedia( "(min-width: 1024px)").matches ) {
    document.getElementById('D-one').style.backgroundColor="yellow";
    document.getElementById('D-two').style.backgroundColor="yellow";
    document.getElementById('D-three').style.backgroundColor="yellow";
    document.getElementById('C-three').style.backgroundColor="white";
  }
  })
})(i);
}






//Remove all Highlighting on mouseout
for (var i = 0; i < btn.length; i++) {
   (function(index) {
btn[index].addEventListener("mouseout", function(){
  document.getElementById('A-one').style.backgroundColor="white";
  document.getElementById('A-two').style.backgroundColor="white";
  document.getElementById('A-three').style.backgroundColor="white";
  document.getElementById('B-one').style.backgroundColor="white";
  document.getElementById('B-two').style.backgroundColor="white";
  document.getElementById('B-three').style.backgroundColor="white";
  document.getElementById('C-one').style.backgroundColor="white";
  document.getElementById('C-two').style.backgroundColor="white";
  document.getElementById('C-three').style.backgroundColor="white";
  document.getElementById('D-one').style.backgroundColor="white";
  document.getElementById('D-two').style.backgroundColor="white";
  document.getElementById('D-three').style.backgroundColor="white";
})
})(i);
}


//Close Span

const span = document.getElementById('close');
span.onclick = function() {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('modal-outbox').style.display = "none";
    document.getElementById("modal-header").style.display = "none";
    document.getElementById('close').style.display = "none";
  };
