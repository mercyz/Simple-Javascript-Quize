'use strict'
const domQuestion = document.querySelector('.question');
const domAnswers = document.querySelector('.ans');
const btn = document.querySelector('.btn');

//List of Questions, Answers and Correct Answer
const quiz = [
    {
        question: "Is Javascript the coolest programming language?",
        answers:['True', 'False', 'Maybe'],
        correctAns: 0,
    },
     {
         question: "Which is a Forntend programming language?",
         answers: ["PHP", "Javascript", "C++", "Java"],
         correctAns: 1,
     },
      {
        question: "Is Covid-19 a scam in this Country?",
        answers: ["True", "False", "Maybe"],
        correctAns: 0,
      }
     
]


let tab = 0
//Set the questions to the Dom
function setQuiz(){
    quiz.forEach((item, indx) =>{
       if(tab == indx){
           domQuestion.innerHTML = item.question

           //Display the list of Answers
           item.answers.forEach((ansr, i)=>{
               const li = document.createElement('li');
               let data_index = document.createAttribute("data-index");
               data_index.value = i
               li.setAttributeNode(data_index)
               domAnswers.appendChild(li);
               li.innerHTML = li.innerHTML + i + ". " + ansr;
               li.addEventListener('click', function(ans){
                    let picked = ans.target.getAttribute('data-index')
                    let adCorrectColor = ans.target;
                    
                    //Check if answer is correct
                    if (parseInt(picked) === item.correctAns) {
                        adCorrectColor.classList.add("correct")
                    } else if (parseInt(picked) !== item.correctAns) {
                        adCorrectColor.classList.add('wrong');

                    }
                });
           });
       }
    })

}

setQuiz()

btn.addEventListener('click', function () {
 
   setQuiz()
});