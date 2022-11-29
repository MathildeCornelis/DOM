/*Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.*/
const title = document.querySelectorAll('.important');

title.forEach ((important) => {
    important.setAttribute('title', 'This is an important item');
})

/*Select all the img tags and loop through them. If they have no important class, turn their display property to none*/
const img = document.querySelectorAll('img');

for(let elem of img){
    if (!elem.classList.contains('important')){
        elem.style.display = 'none';
    }
}

/*Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well*/
const p = document.querySelectorAll('p');
for (let elem of p){
    if (elem.classList.contains(elem.className)){
        console.log(elem.className);
        console.log(elem.innerText);
    }
    else {
        console.log(elem.innerText);
    }
}