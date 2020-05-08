'use strict'
const domQuestion = document.querySelector('.question');
const domAnswers = document.querySelector('.option');
const btn = document.querySelector('.btn');


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
            adCorrectColor.classList.add("correct")
        }else if(parseInt(picked) !== correctAnsewer){
            adCorrectColor.classList.add('wrong');
            
        }

    }


    //Display answers
   for (let i =0; i < this.answers.length; i++){
    const span = document.createElement('span');
    let data_index = document.createAttribute("data-index");
    data_index.value = i;
    span.setAttributeNode(data_index)
       domAnswers.append(span);
    span.innerHTML = span.innerHTML+ i + ". " + this.answers[i]
    span.addEventListener('click', getCorrectAns)
   }
}

//Add Questions 
let q1 = new Question('Is Javascript the coolest programming language',
    ['True', 'False', 'Maybe', 'Absolutly', 'Not Sure'], 0 
);

let q2 = new Question('Which is a Forntend programming language?', ['Javascript', 
'PHP', 'SCSS', 'PYTHON', 'RUBY', 'C++', 'C#', 'JAVA'], 0);

let q3 = new Question('Is Covid-19 a scam in this Country?', ['True', 'False'], 0);


let questions = [q1, q2, q3];

let tab = 0;

questions[tab].displayQuestion();
btn.addEventListener('click', function(){
    questions.forEach((item, indx)=>{
        tab = 1;

        if(indx == tab){
            item.displayQuestion()
            // domQuestion.innerHTML = "";
            return 
        }
    })
    tab += 1;
})

