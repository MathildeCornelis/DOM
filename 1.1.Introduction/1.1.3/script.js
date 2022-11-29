/*Display the document title in the console*/
console.log(document.title);

/*Change the document title to Modifying the DOM*/
document.title = "newTitle";

/*Change the background color of the body to hot pink (#FF69B4). */
document.body.style.background = "#FF69B4";

/*If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).*/
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);
document.body.style.background = bgColor;
}
random_bg_color();

/*Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)*/
const myElement = document.body;
    for(const child of myElement.children) {
        console.log(document.getElementsByTagName('body')[0]);
    }
