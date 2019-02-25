/* 
    for the edit modal getting the nodeList and
    spreading it into an array to be able to loop thru
 */
const editMealBtns = document.querySelectorAll('.edit-meal');
const buttons = [...editMealBtns];
let modal = document.getElementById('myModal');
buttons.map((btn) => {
  btn.onclick = function () {
    if(modal2.style.display === "block"){
      modal2.style.display = "none"
      modal.style.display = "block";
    }else{
      modal.style.display = "block";
    }
  }    
});


/* 
    for the delete modal getting the nodeList and
    spreading it into an array to be able to loop thru
*/
const deleteMealBtns = document.querySelectorAll('.delete-meal');
const delBtns = [...deleteMealBtns];
let modal2 = document.getElementById('myModal2');
delBtns.map((delBtn) => {
  delBtn.onclick = function () {
    if(modal.style.display === "block"){
      modal.style.display = "none"
      modal2.style.display = "block";
    }else{
      modal2.style.display = "block";
    }
  }
})

var spansNode = document.querySelectorAll(".close");
const spans = [...spansNode];
spans.map((span) => {
  span.onclick = function() {
    modal.style.display = "none";
    modal2.style.display = "none";
  }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none";
  }
}