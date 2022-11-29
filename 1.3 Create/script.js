/*Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>*/

function addElement () {
    const newSection = document.createElement("section");
    const newContent = document.createTextNode("Mathilde Cornelis");
    newSection.appendChild(newContent);
    const currentArticle = document.getElementsByTagName("article")[0];
    currentArticle.appendChild(newSection);
}
addElement ();