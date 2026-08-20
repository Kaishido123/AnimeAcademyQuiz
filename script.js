/* ===========================================
   Anime Academy Quiz
   script.js
=========================================== */

// ===========================================
// DOM
// ===========================================


/*--------------------*/
const screens = {
    home: document.getElementById("homeScreen"),
    roulette: document.getElementById("rouletteScreen"),
    quiz: document.getElementById("quizScreen"),
    result: document.getElementById("resultScreen"),
    ranking: document.getElementById("rankingScreen")
};

const background = document.getElementById("background");

const startBtn = document.getElementById("startBtn");
const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

let musicOn = true;
musicBtn.addEventListener("click",()=>{

    if(musicOn){

        bgm.pause();

        musicBtn.textContent="🔇 BGM OFF";

    }else{

        bgm.play();

        musicBtn.textContent="🎵 BGM ON";

    }

    musicOn=!musicOn;

});

const rouletteText = document.getElementById("rouletteText");

const difficultyButtons =
document.querySelectorAll(".difficultyBtn");

// ===========================================
// Game State
// ===========================================

let playerName = "";

let difficulty = "easy";

let selectedSubject = "";

let score = 0;

let currentQuestion = 0;

let currentQuiz = [];

// ===========================================
// Background Slideshow
// ===========================================

const backgrounds = [

    "assets/images/img1.png",
    "assets/images/img2.png",
    "assets/images/img3.png",
    "assets/images/img4.png",
    "assets/images/img5.png",
    "assets/images/img6.png",
    "assets/images/img7.png",
    "assets/images/img8.png",
    "assets/images/img9.png",
    "assets/images/img10.png",
    "assets/images/img11.png",
    "assets/images/img12.png",
    "assets/images/img13.png",

];

let currentBackground =
Math.floor(Math.random() * backgrounds.length);

background.style.backgroundImage =
`url(${backgrounds[currentBackground]})`;

function nextBackground(){

    background.style.opacity = 0;

    setTimeout(()=>{

        currentBackground++;

        if(currentBackground >= backgrounds.length){

            currentBackground = 0;

        }

        background.style.backgroundImage =
        `url(${backgrounds[currentBackground]})`;

        background.style.opacity = 0.8;

    },800);

}

setInterval(nextBackground,10000);

// ===========================================
// Screen Manager
// ===========================================

function showScreen(name){

    Object.values(screens).forEach(screen=>{

        screen.classList.add("hidden");

    });

    screens[name].classList.remove("hidden");

}

// ===========================================
// Difficulty
// ===========================================

difficultyButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        difficultyButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        difficulty = button.dataset.level;

    });

});

// ===========================================
// Subjects
// ===========================================

const subjects = [

    "Math",

    "Science",

    "English",

    "History"

];
const subjectColors={

    Math:"#4facfe",

    Science:"#00e676",

    English:"#ff9800",

    History:"#ff4081"

};

// ===========================================
// Roulette
// ===========================================
function startRoulette(){

    showScreen("roulette");
   

    let count = 0;

    const interval = setInterval(()=>{

        rouletteText.textContent =
        subjects[Math.floor(Math.random()*subjects.length)];

        count++;

        if(count >= 35){

            clearInterval(interval);

            selectedSubject =
            subjects[Math.floor(Math.random()*subjects.length)];

            rouletteText.textContent =
            selectedSubject;
            

            setTimeout(()=>{
              rouletteText.classList.remove("rouletteWin");

                startQuiz();

            },1200);

        }

    },100);
    

}


// ===========================================
// Start Button
// ===========================================
startBtn.addEventListener("click",()=>{

    playerName =
    document.getElementById("playerName").value.trim();

    if(playerName === ""){

        alert("Please enter your name.");
        return;

    }

    // BGMを開始
    bgm.volume = 0.35;
    bgm.currentTime = 0;

    bgm.play().catch(err=>{
        console.log(err);
    });

    musicOn = true;
    musicBtn.textContent = "🎵 BGM ON";

    score = 0;
    currentQuestion = 0;

    startRoulette();

});

// ===========================================
// Quiz Engine
// ===========================================

const questionNumber =
document.getElementById("questionNumber");

const questionText =
document.getElementById("question");

const answers =
document.getElementById("answers");

const scoreText =
document.getElementById("score");

// ===========================================
// Start Quiz
// ===========================================

function startQuiz(){

    showScreen("quiz");

    // 科目の問題をコピー
    currentQuiz = [...QUESTION_BANK[selectedSubject]];

    // シャッフル
    currentQuiz.sort(()=>Math.random()-0.5);

    // 10問だけ使用
    currentQuiz = currentQuiz.slice(0,10);

    currentQuestion = 0;

    score = 0;

    loadQuestion();

}

// ===========================================
// Load Question
// ===========================================

function loadQuestion(){

    const q = currentQuiz[currentQuestion];

    questionNumber.textContent =
    `Question ${currentQuestion+1} / ${currentQuiz.length}`;

    questionText.textContent =
    q.question;

    scoreText.textContent =
    `Score : ${score}`;

    answers.innerHTML = "";

    
       const progress = Math.round(((currentQuestion) / currentQuiz.length) * 100);
          document.getElementById("progressFill").style.width = `${progress}%`;
            document.getElementById("progressText").textContent = `${progress}%`;
    q.choices.forEach((choice,index)=>{
        const btn =
        document.createElement("button");

        btn.className =
        "answerBtn";

        btn.textContent =
        choice;

        btn.addEventListener("click",()=>{

            checkAnswer(index);

        });

        answers.appendChild(btn);

        

    });

}

// ===========================================
// Check Answer
// ===========================================

function checkAnswer(choice){

    const q =
    currentQuiz[currentQuestion];

    const buttons =
    document.querySelectorAll(".answerBtn");

    buttons.forEach(button=>{

        button.disabled = true;

    });

    if(choice === q.answer){

        buttons[choice]
        .classList.add("correct");

        score += 10;

    }

    else{

        buttons[choice]
        .classList.add("wrong");

        buttons[q.answer]
        .classList.add("correct");

    }

    scoreText.textContent =
    `Score : ${score}`;

    setTimeout(()=>{

        currentQuestion++;

        if(currentQuestion >= currentQuiz.length){

            finishQuiz();

        }

        else{

            loadQuestion();

        }

    },1000);

}
// ===========================================
// Result
// ===========================================

const finalScore =
document.getElementById("finalScore");

const rankText =
document.getElementById("rank");

const rankingList =
document.getElementById("rankingList");

const rankingBtn =
document.getElementById("rankingBtn");

const shareBtn =
document.getElementById("shareBtn");

const backBtn =
document.getElementById("backBtn");


// ===========================================
// Finish Quiz
// ===========================================

function finishQuiz(){

    showScreen("result");

    finalScore.textContent =
    `${score} / 100`;

    let rank = "D";

    if(score >= 90){

        rank = "S";

    }

    else if(score >= 80){

        rank = "A";

    }

    else if(score >= 70){

        rank = "B";

    }

    else if(score >= 60){

        rank = "C";

    }

    rankText.textContent =
    `Rank ${rank}`;

    saveScore(rank);

}

// ===========================================
// Save Score
// ===========================================

function saveScore(rank){

    const scores =
    JSON.parse(localStorage.getItem("animeQuizScores")) || [];

    scores.push({

        name: playerName,

        score: score,

        subject: selectedSubject,

        difficulty: difficulty,

        rank: rank,

        date: new Date().toLocaleDateString()

    });

    scores.sort((a,b)=>b.score-a.score);

    localStorage.setItem(

        "animeQuizScores",

        JSON.stringify(scores)

    );

}

// ===========================================
// Ranking
// ===========================================

function loadRanking(){

    const scores =
    JSON.parse(localStorage.getItem("animeQuizScores")) || [];

    rankingList.innerHTML = "";

    if(scores.length===0){

        rankingList.innerHTML =
        "<p>No scores yet.</p>";

        return;

    }

    scores.slice(0,10).forEach((item,index)=>{

        const row =
        document.createElement("div");

        row.className =
        "rankItem";

        row.innerHTML = `

            <div>

                <div class="rankName">

                    ${index+1}. ${item.name}

                </div>

                <small>

                    ${item.subject}
                    |
                    ${item.difficulty}
                    |
                    ${item.rank}

                </small>

            </div>

            <div class="rankScore">

                ${item.score}

            </div>

        `;

        rankingList.appendChild(row);

    });

}
//======================================
//share button
//=====================================
shareBtn.addEventListener("click", () => {

    const text =
`${playerName} scored ${score}/100!
${rankText.textContent}

Can you beat my score?`;

    const url = window.location.href;

    const tweetUrl =
`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

    window.open(tweetUrl, "_blank");

});

// ===========================================
// Buttons
// ===========================================

rankingBtn.addEventListener("click",()=>{

    loadRanking();

    showScreen("ranking");

});

backBtn.addEventListener("click",()=>{

    document.getElementById("playerName").value="";

    showScreen("home");

});

// ===========================================
// Start
// ===========================================

showScreen("home");


// ===========================================
// Part 4 - Polish & Improvements
// ===========================================

// ---------- Enterキーで開始 ----------

document
.getElementById("playerName")
.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        startBtn.click();

    }

});

// ---------- Difficulty Settings ----------

const difficultySettings={

    easy:{
        questions:10,
        points:10
    },

    normal:{
        questions:15,
        points:10
    },

    hard:{
        questions:20,
        points:5
    }

};

// ---------- Shuffle ----------

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

    return array;

}

// ---------- Override startQuiz ----------

function startQuiz(){

    showScreen("quiz");

    currentQuiz=[...QUESTION_BANK[selectedSubject]];

    shuffle(currentQuiz);

    const setting=difficultySettings[difficulty];

    currentQuiz=currentQuiz.slice(0,setting.questions);

    currentQuestion=0;

    score=0;

    loadQuestion();

}

// ---------- Override checkAnswer ----------

function checkAnswer(choice){

    const q=currentQuiz[currentQuestion];

    const buttons=document.querySelectorAll(".answerBtn");

    buttons.forEach(btn=>btn.disabled=true);

    const setting=difficultySettings[difficulty];

    if(choice===q.answer){

        buttons[choice].classList.add("correct");

        score+=setting.points;

    }

    else{

        buttons[choice].classList.add("wrong");

        buttons[q.answer].classList.add("correct");

    }

    scoreText.textContent=`Score : ${score}`;

    setTimeout(()=>{

        currentQuestion++;

        if(currentQuestion>=currentQuiz.length){

            finishQuiz();

        }else{

            loadQuestion();

        }

    },1000);

}

// ---------- Roulette Slowdown ----------

function startRoulette() {

    showScreen("roulette");

    let speed = 60;
    let counter = 0;

    rouletteText.classList.remove("rouletteWin");

    function spin() {

        const current =
            subjects[Math.floor(Math.random() * subjects.length)];

        rouletteText.textContent = current;

        rouletteText.style.color = subjectColors[current];

        counter++;

        if (counter < 35) {

            speed += 4;

            setTimeout(spin, speed);

        } else {

            selectedSubject =
                subjects[Math.floor(Math.random() * subjects.length)];

            rouletteText.textContent =
                `✨ ${selectedSubject.toUpperCase()} ✨`;

            rouletteText.style.color =
                subjectColors[selectedSubject];

            rouletteText.classList.add("rouletteWin");

            setTimeout(() => {

                rouletteText.classList.remove("rouletteWin");

                startQuiz();

            }, 1200);

        }

    }

    spin();

}
// ---------- Ranking Sort ----------

function loadRanking(){

    const scores=
    JSON.parse(localStorage.getItem("animeQuizScores"))||[];

    scores.sort((a,b)=>b.score-a.score);

    rankingList.innerHTML="";

    if(scores.length===0){

        rankingList.innerHTML="<p>No Scores Yet</p>";

        return;

    }

    scores.slice(0,10).forEach((item,index)=>{

        const row=document.createElement("div");

        row.className="rankItem";

        row.innerHTML=`

        <div>

            <div class="rankName">

                ${index+1}. ${item.name}

            </div>

            <small>

                ${item.subject}
                •
                ${item.difficulty}
                •
                ${item.rank}

            </small>

        </div>

        <div class="rankScore">

            ${item.score}

        </div>

        `;

        rankingList.appendChild(row);

    });

}

// ---------- Reset ----------

backBtn.addEventListener("click",()=>{

    document.getElementById("playerName").value="";

    currentQuestion=0;

    score=0;

    showScreen("home");

});

// ---------- Initial Screen ----------

showScreen("home");

console.log("Anime Academy Quiz Loaded Successfully!");


//-----------------progress bar----------------
