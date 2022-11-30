/*Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>. If the background is dark the text should be white, if the background is light the text should be black Find a way so that everytime you load the page the order of the elements changes!*/



let array = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource","Virginie Dourson"];

const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
const newSection = document.createElement("section");
const currentArticle = document.querySelector("article");
currentArticle.appendChild(newSection);

function random_p_color() {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 100);
    let l = Math.floor(Math.random() * 100);
    return [
        "hsl(" + h + "," + s + "%," + l + "%)",
        l
    ]
};

function parag(){
    for (let i=1; i<array.length; i++){
            const newP = document.createElement("p");
            const newContent = document.createTextNode(array[i]);
            newP.appendChild(newContent);
            newSection.appendChild(newP);
            const randomColor = random_p_color();
            newP.style.backgroundColor = randomColor[0];
            if (randomColor[1] < 50){
                newP.style.color = "#FFFFFF";
            }
            else{
                newP.style.color = "#000000";
            }
    };
};
parag();