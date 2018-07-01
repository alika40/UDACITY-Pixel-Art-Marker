/*This "designs.js" file was written in jQuery and native JavaScript and the codes are separated from each other based on function in other to
 *improve readability of the codes. In writing this progam, reseaches were conducted by me and in the course of doing so, I piggybacked on the works of others
 *to get to this level of completion. They are a lot to be done to improve the functionalities of this application, but time frame would not permit that.
 *And an example of one such functionalities is to offer a user the opportunity to save their paintings. It behooves me to mention that this "designs.js" file is
 *linked to "index.html" file. The html file is about Udacity/Google for African Scholar Challenge 2018 titled "Lab: Pixel Art Marker", which happend to be
 *CHALLENGE 2.0 in the programme.
 */




        
// 1; The focus() method to automatically put the text cursor into the <input> text field as soon as the page loads to improve usability.
$(document).ready(function() {
$('#inputHeight').focus();
});



// 2; Submit function calls makeGrid() and clearGrid() When size is submitted by the user.
$('#sizePicker').submit(function(e) {
     e.preventDefault();//To prevent unexpected default browser behavour.
     const height = $('#inputHeight').val();//Gets the user's input value for grid height.
     const width = $('#inputWidth').val();//Gets the user's input value for grid width.
     makeGrid(height, width);//The values for height and width are passed into makeGrid() as arguments.
});





// 3; makeGrid() function creates table rows and columns using nested WHILE LOOP as well as determining color value for grid using IF-statement.
function makeGrid(n, m) {
     $('tr').remove();//To prevent the loop from creating grids when "Create Grid" button is clicked repeatedly.
     let rows = 1;
     while(rows <= n) {//Loops through the table element and creates table row(tr) for each  table data(td) using id attribute(#table).
          let cols =1;
          $('#pixelCanvas').append('<tr id=table' + rows +'></tr>');
          while(cols <= m) {
                  $('#table' + rows).append('<td></td>');
                  cols++;
          }
          rows++;
        }
        
     //Adds color to the grid.
     $('td').click(function addColor() {
             const color = $('#colorPicker').val();
             if(!($(this).attr('style'))) {
                     $(this).attr('style', 'background-color:' + color);
             } else {
                     $(this).removeAttr('style');
             }
     });
}



// 4; Clear created grids by resetting to default using nested FOR LOOP. Still a work-in-progress though.
/*
$('clearGrids').click(function() {
     var height = document.getElementById('inputHeight').value;
     var width = document.getElementById('inputWidth').value;
     $('#pixelCanvas').each(function(index) {
          var getAttr = $(this).attr('table' + index);
          if($(this).is(getAttr)) {
               for(let rows = 1; rows <= width; rows++) {
                    $('#pixelCanvas').remove('<tr></tr>');
                    for(let cols =1; cols <= height; cols++) {
                         $('#pixelCanvas').remove('<td></td>');   
                    } 
               }
          }
      });
 });
*/ 



// 5; Native Javascript for canvas background color using onChange() event after the window has loaded.  
window.addEventListener("load", fireUp, false);
function fireUp() {
        let colorPalette;
        colorPalette = document.querySelector("#colorPalette");
        colorPalette.addEventListener("change", updateGrids, false);//function callback from updateGrids().
}
//function that loops through the table grids and apply the user's selected color to the background.
function updateGrids(event) {
        document.querySelectorAll("table").forEach(function(table) {
        table.style.backgroundColor = event.target.value;
        });
}



//6; Modal is used in this application to hide instructions on how to paint in other to have a cleaner interface.
//Variables for modal DOM use
const modal = document.getElementById('modalContainer');
const modalCloseBtn = document.getElementById('modalClose');
const modalOpenBtn = document.getElementById('modalOpen');
        
// To open modal when the instruction button is clicked.
function modalOpen(evt) {
          if (evt.target === modalOpenBtn) {
               modal.style.display='block';     
          }
     }    
modalOpenBtn.addEventListener('click', modalOpen);

// To close modal when the close button is clicked.
function modalClose(evt) {
          if (evt.target === modalCloseBtn) {
             modal.style.display='none';     
          }
}
modalCloseBtn.addEventListener('click', modalClose);



/* 7; Changing logo icons of Udacity, Google, and Andela.The hthml document has an image tag(<img>) with an id "logos"
* for document manipulation. OnClick() event was used. A function was declared with If-statement as the conditional.
* If the condition matches, the 'src' attribute fetches an image and update the <img> tag, and this pattern continues because it's wired to
* javaScript setInterval() that takes two parameters: callback and time in milliseconds.
*/
var imageTracker = true;
var logos = document.getElementById('logos');
function imageAlternate() {
     var images = document.getElementById('logos');
     if(imageTracker === true) {
          images.src = 'andela-logo.png';
          imageTracker = false;
     } else {                                    
          if (imageTracker === true) {
               images.src = 'google-logo.png';
               imageTracker = true;
          } else{
               images.src = 'udacity-logo.png';
               imageTracker = true;
          }
     }
}
setInterval('imageAlternate()', 4000);
logos.addEventListener('click', imageAlternate);