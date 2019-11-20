


//New Array created outside Function

const proImages = document.querySelectorAll('.image-holder');
const cards =  document.querySelectorAll('.card');
const titles = document.querySelectorAll('.title')
const modalUpper = document.querySelectorAll('.model-header')

//Function to Extract detail from Response
function extractInfo(data) {
    for (var i =0; i < data.length; i++)
    {  proImages[i].innerHTML= "<img src="+data[i].picture.large +" class='img-cont' alt>" ;
       cards[i].innerHTML= data[i].email+ "<br>"+data[i].location.city;
       titles[i].innerHTML = (data[i].name.first+ " " + data[i].name.last);
       modalUpper[i].innerHTML = (data[i].name.first+ " " + data[i].name.last+ "<br>"+data[i].email+ "<br>"+data[i].location.city );
       lowerModal[i].innerHTML= data[i].cell+ "<br>"+data[i].location.street.number+" "+data[i].location.street.name+" "+data[i].location.state+" "+data[i].location.postcode+"<br>"+"Birthday:"+" "+data[i].DOB;
    };
};




// This One Works Yay
const apiResponses = (
  fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => extractInfo(data.results))
  )


// imagesModal[i].innerHTML = "<img src="+data[i].picture.large +" class='img-cont' alt>" ;
