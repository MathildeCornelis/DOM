/*Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>*/

let array = ["Arno Volts" ,"Aurélien Mariaule" ,"Aurore Lemaire" ,"Benjamin Porsont" ,"Céline Verreydt" ,"Corentin Miserque" ,"Dominique Coppée" ,"Edouard de Romrée de Vichenet" ,"Hugo Goorickx","Jofrey Houyoux" ,"Jonathan Manes" ,"jonathan bajoux" ,"Laura Wilhelmi" ,"Lysie Soyez" ,"Marnie Benalia" ,"Mathilde Cornelis" ,"Milo Bonnet" ,"Nadim El Nakadi" ,"Nathalie Vanden Abeele" ,"Nathalie Goffette" ,"Nour Everaert" ,"Pierre Mauriello" ,"Quentin Bource","Virginie Dourson"];

function section(){
    const newSection = document.createElement("section");
    const currentArticle = document.getElementsByTagName("article")[0];
    currentArticle.appendChild(newSection);
};
section();

function parag(array, n){
    for (i=1; i<=n; i++){
        function addElement (nom) {
            const newP = document.createElement("p");
            const newContent = document.createTextNode(nom);
            newP.appendChild(newContent);
            newP.style.backgroundColor = random_p_color();
            const currentSection = document.getElementsByTagName("section")[0];
            currentSection.appendChild(newP);
            console.log(nom);
        };
        addElement (array[Math.floor( Math.random() * n )]);
    };
};
parag(array, 24);

function random_p_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
};

/*If the background is dark the text should be white, if the background is light the text should be black*/

array[changeBgColorNoir, changeBgColorBlanc];

function changeBgColorNoir(){
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
};
changeBgColorNoir();

function changeBgColorBlanc(){
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
};
changeBgColorBlanc();

function randomNumber(n){
    return Math.floor( Math.random() * n );
};
randomNumber(1);

array[randomNumber( random.length )](); 