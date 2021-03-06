'use strict'
const domQuestion = document.querySelector('.question');
const domAnswers = document.querySelector('.option');
const btn = document.querySelector('.btn');
const countScore =  document.querySelector('.scoreCount');
const countQuestion = document.querySelector('.questionCount');
const submit = document.querySelector('.submit');
let score = [];


function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function (){
    domQuestion.innerHTML = this.question;
    const correctAnsewer = this.correct;
    
    //check correct answer
    const getCorrectAns = function(ans){
        let picked = ans.target.getAttribute('data-index')
        let adCorrectColor = ans.target;
        if (parseInt(picked) === correctAnsewer) {
            score.push(parseInt(picked)),
            countScore.lastElementChild.innerHTML = score.length;
            submit.addEventListener('click', function () {
                document.querySelector('.wrapper').style.display = "none"
                document.querySelector('.result').style.display = "flex"
               document.querySelector('.showScore').lastElementChild.innerHTML = score.length
            })
            adCorrectColor.classList.add("correct")
        }else if(parseInt(picked) !== correctAnsewer){
            adCorrectColor.classList.add('wrong'); 
        }

    }

    //Display answers
    domAnswers.innerHTML = "";
   for (let i =1; i < this.answers.length; i++){
    const span = document.createElement('span');
    let data_index = document.createAttribute("data-index");
    data_index.value = i;
    span.setAttributeNode(data_index)
       domAnswers.append(span);
    span.innerHTML = span.innerHTML+ i + ". " + this.answers[i]
    span.addEventListener('click', getCorrectAns)
   }
}




//Add Question
let q1 = new Question('Is Javascript the coolest programming language',
    [null,'True', 'False', 'Maybe', 'Absolutly', 'Not Sure'], 1 
);

let q2 = new Question('Which is a Forntend programming language?', [null,'Javascript', 
'PHP', 'SCSS', 'PYTHON', 'RUBY', 'C++', 'C#', 'JAVA'], 1);

let q3 = new Question('Is Covid-19 a scam in this Country?', [null, 'True', 'False'], 1);

let q4 = new Question('Tonye Be Encouraged, you\'ve gone too far to quit ', ['Don\'t Quit Keep Pushing'], 0);

let q5 = new Question('Tonye Be Encouraged, you\'ve gone too far to quit ', ['Don\'t Quit Keep Pushing'], 0);


let questions = [null, q1, q2, q3, q4, q5];
// questions.slice(1);
console.log(questions)

let tab = 1;

// questions[tab].displayQuestion();
btn.addEventListener('click', function(){

    btn.innerHTML ="Next";
    questions.forEach((item, indx)=>{
        if(indx == tab){
            item.displayQuestion()
            countQuestion.lastElementChild.innerHTML = indx
            // console.log(indx, tab)
            return 
        }
    })
    tab += 1;

    if(tab == questions.length){
       btn.style.display = "none"
        submit.style.display = "block";
    }
})


