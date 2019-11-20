



// Get the button that opens the modal
const btn = document.querySelectorAll('.myBtn');
console.log(btn);

// Get the <span> element that closes the modal
const span = document.querySelectorAll('.close');
console.log(span);


let i = 0;

for (i = 0; i < 12; i++) {
btn[i].onclick = function() {
        event.target.closest('.myBtn').classList.add("myModal");
        event.target.closest('.box').classList.add("modal-outbox");
        event.target.closest('.modal-outbox').classList.add("visible");
        console.log(event.target.closest('.modal-outbox'));
        event.target.closest('.modal-header').classList.add("visible");
        event.target.closest('.span').classList.add("visible");
}}



// When the user clicks on <span> (x), close the modal
for (i =0; i < btn.length; i++) {
      span[i].onclick = function() {
    modal.style.display = "none";
}}
