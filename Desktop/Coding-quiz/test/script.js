const questions = [
    {
        question: "what does HTML stand for?",
        optionA: "hyper text managment language",
        optionB: "hyper tool making language",
        optionC: "hyper text molding language",
        optionD: "hypr text markup language",
        correctOption: "optionD"
    },

    {
        question: "what does CSS stand for ?",
        optionA: "Cascading Style Sheets",
        optionB: "Calling Softwear Something",
        optionC: "Causing Style Smithing",
        optionD: "Cascading Smithing Sheet",
        correctOption: "optionA"
    },

    {
        question: "what tag do you use to attach a css file to the html?",
        optionA: "attach",
        optionB: "givemethat",
        optionC: "grab",
        optionD: "link",
        correctOption: "optionD"
    },

    {
        question: "Which of the fallowing is an example of a proper closing tag?",
        optionA: "/p/>",
        optionB: "..p",
        optionC: "/p>",
        optionD: "ppP",
        correctOption: "optionC"
    },

    {
        question: "What is an array in javascrip?",
        optionA: "A variable that is a list",
        optionB: "A special variable which can hold more then one value",
        optionC: "A place holder for other elements",
        optionD: "A Special variable that will add color to your webpage",
        correctOption: "optionB"
    },

    {
        question: "there a 2 variables in javascrip, which are? ?",
        optionA: "Global, Local",
        optionB: "Variable1,Variable2",
        optionC: "World,town",
        optionD: "Here,There",
        correctOption: "optionA"
    },

    {
        question: "What is the Git command to pull new information ?",
        optionA: "Git pull",
        optionB: "Git add",
        optionC: "Git again",
        optionD: "Git git go",
        correctOption: "optionA"
    },

    {
        question: "If i want something to show up on my webpage, where in my html file do I put the info ?",
        optionA: "footer tag",
        optionB: "Header tag",
        optionC: "link tag",
        optionD: "body tag",
        correctOption: "optionD"
    },

    {
        question: "if i want to code commands to github which terminal should i use ?",
        optionA: "Terminal1",
        optionB: "New terminal",
        optionC: "google terminal",
        optionD: "Git bash terminal",
        correctOption: "optionD"
    },

    {
        question: `"what is the term we use to discribe our "plan of attack"?`,
        optionA: "attack code",
        optionB: "psudocode",
        optionC: "fisrt step code",
        optionD: "layitoutcode",
        correctOption: "optionB"
    }

    

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++  
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "WOW, YOU LOSE."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Hey ...Stop it...Do Better..."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Great Job! you rock..I'm so proud..."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}