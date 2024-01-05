// question 1
// Problem
// Roy wants to change his profile picture on Facebook. Now Facebook has some restriction over the dimension of picture that we can upload.
// Minimum dimension of the picture can be L x L, where L is the length of the side of square.


// Now Roy has N photos of various dimensions.
// Dimension of a photo is denoted as W x H
// where W - width of the photo and H - Height of the photo

// When any photo is uploaded following events may occur:

// [1] If any of the width or height is less than L, user is prompted to upload another one. Print "UPLOAD ANOTHER" in this case.
// [2] If width and height, both are large enough and
// (a) if the photo is already square then it is accepted. Print "ACCEPTED" in this case.
// (b) else user is prompted to crop it. Print "CROP IT" in this case.

// (quotes are only for clarification)

// Given L, N, W and H as input, print appropriate text as output.

// Input:
// First line contains L.
// Second line contains N, number of photos.
// Following N lines each contains two space separated integers W and H.

// Output:
// Print appropriate text for each photo in a new line.

// Constraints:
// 1 <= L,W,H <= 10000
// 1 <= N <= 1000

// Sample Input
// 180
// 3
// 640 480
// 120 300
// 180 180
// Sample Output
// CROP IT
// UPLOAD ANOTHER
// ACCEPTED

//this fuction only create input box based on user fill the number of photos
var length = 0
var numPhotos = 0

function readValue(){
lenght =  document.getElementById("length");
numPhotos = parseInt(document.getElementById("numPhotos").value); //parseint change text to number to read value
   alert(numPhotos)
   //this loop to check how many photos ex 5 photos we chack length and width for all photos
   for (i=0; i<numPhotos; i++){
      var breakBR = document.createElement("br") // create br tag
document.body.appendChild(breakBR) //add br tag on html

   var input = document.createElement('input')
   input.setAttribute('type', 'text')
   input.setAttribute('Placeholder', 'width of Photo')

   var textBoxID = 'Width' + i
   input.setAttribute('id', textBoxID)
document.body.appendChild(input)// add textbox on the page put line inputbox made on lin52 to html


input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('Placeholder', 'Length of Photo')

textBoxID = 'Length' + i // everyBox we crate id
input.setAttribute('id', textBoxID)
document.body.appendChild(input)// add textbox on the page put line inputbox made on lin52 to html


   }
   //dynamic button wheather it accept or not 
   var button = document.createElement('input')
   button.setAttribute('type','button')
   button.setAttribute('value','Check')
button.setAttribute('onclick','calculateSize()')
document.body.appendChild(button)// connect line 74
}
function calculateSize(){
//3 scenario 1too small - discard - 2toobig - crop -3size ok use it
for (i=0; i<numPhotos; i++){
   var height = parseInt(document.getElementById("Length" + i).value)//heightline 68
   var width = parseInt(document.getElementById("Width" + i).value)//widthline59
   if (height < length || width < length){
var p = document.createElement('p')
var text = document.createTextNode('Upload Another')
p.appendChild(text)// appendchild()put text in the paragrph or p atg
document.body.appendChild(p)// show the p atg on the page
   }else{
if (width == height){
   var p = document.createElement('p')
var text = document.createTextNode('Accepted Image')
p.appendChild(text)// appendchild()put text in the paragrph or p atg
document.body.appendChild(p)// show the p atg on the page
}else{
   var p = document.createElement('p')
   var text = document.createTextNode('Crop Image')
   p.appendChild(text)// appendchild()put text in the paragrph or p atg
   document.body.appendChild(p)// show the p atg on the page
}
   }
}
}
