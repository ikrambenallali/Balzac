const questions=[
{
question:"Demain, nous ______ au musée pour voir l'exposition. ",
reponses:["A. allons", "B. irions"," C. irai"," D. alliez"],
juste_reponse:"A. allons"
},
{
question : "Je ______ un livre chaque soir avant de dormir.",
reponses : ["A. lit", "B. lis", "C. lisez", "D. lire"],
juste_reponse : "B. lis"
},
{
question:"Lequel de ces mots est un adjectif ?",
reponses : ["A. courir", "B. lent", "C. manger", "D. livre"],
juste_reponse : "B. lent"
},
{
question:"Nous ______ au cinéma ce soir.",
reponses : ["A. va", "B. allons", "C. allez", "D. vas"],
juste_reponse : "B. allons"
},
{
question : "Si j'avais plus de temps, je ______ plus souvent mes amis.",
reponses : ["A. verrais", "B. verrai", "C. voyait", "D. vois"],
juste_reponse : "A. verrais"
}
];
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const optionC = document.getElementById("optionC");
    const optionD = document.getElementById("optionD");

    const question = questions[currentQuestion];
    questionElement.innerText = question.question;
    optionA.innerText = question.reponses[0];
    optionB.innerText = question.reponses[1];
    optionC.innerText = question.reponses[2];
    optionD.innerText = question.reponses[3];
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll(".answer");
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.id;
        }
    });
    return selectedAnswer;
}

function deselectAnswers() {
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answer) => (answer.checked = false));
}

document.getElementById("submit").addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer) {
        const question = questions[currentQuestion];
        if (question.reponses[selectedAnswer.charCodeAt(0) - 65] === question.juste_reponse) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz").classList.add("resultat");
            document.getElementById("result").classList.remove("resultat");
            document.getElementById("score").innerText = `${score} / ${questions.length}`;
        }
    }
    deselectAnswers();
});

loadQuestion();




