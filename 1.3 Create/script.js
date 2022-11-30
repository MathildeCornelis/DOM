/*Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>*/

function addElement (nom) {
    const newSection = document.createElement("section");
    const newContent = document.createTextNode(nom);
    newSection.appendChild(newContent);
    const currentArticle = document.getElementsByTagName("article")[0];
    currentArticle.appendChild(newSection);
    console.log(nom);
}

let array = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource","Virginie Dourson"];

function pickLearner(array, n) {  
    let arr = []
    for (i=1; i<=n; i++){
        arr.push(array[Math.floor(Math.random() *24)]);
    };
    return arr
}
addElement(pickLearner(array, 1));

/*If the background is dark the text should be white, if the background is light the text should be black*/
