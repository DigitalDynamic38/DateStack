const quiz=[
    {
        question:"National Youth Day is celebrated on _______",
        options:["15 August","12 January","5 September","26 January"],
        answer:1
    },
    {
        question:"Republic Day in India is celebrated on:",
        options:["15 August","26 January","2 october","14 November"],
        answer:1
    },
    {
        question:"National Science Day is observed on:",
        options:["28 February","22 April","21 June","5 June"],
        answer:0
    },
    {
        question:"Independence Day in India is celebrated on:",
        options:["15 August","26 January","2 october","1 may"],
        answer:0
    },
    {
        question:"Teachers Day (India) is celebrated on:",
        options:["8 March","5 September","23 April","14 November"],
        answer:1
    },
    {
        question:"Gandhi jayanthi is observed on:",
        options:["15 August","30 January","2 october","2 November"],
        answer:2
    },
    {
        question:"International Women's Day  is celebrated on:",
        options:["10 December","8 March","21 June","1 october"],
        answer:1
    },
    {
        question:"World Health Day  is observed on:",
        options:["25 December","24 March","14 June","7 April"],
        answer:3
    },
    {
        question:"International Yoga Day  is celebrated on:",
        options:["1 May","5 June","21 June","16 october"],
        answer:2
    },
    {
        question:"United nations Day  is observed on:",
        options:["3 December","8 March","30 July","24 october"],
        answer:3
    },
    {
        question:"World cancer Day  is observed on:",
        options:["4 February","2 April","21 June","1 December"],
        answer:0
    },
    {
        question:"World environment Day  is celebrated on:",
        options:["22 April","5 June","21 July","16 September"],
        answer:1
    },
    {
        question:"World water Day  is celebrated on:",
        options:["21 March","22 March","21 May","4 october"],
        answer:1
    },
    {
        question:"Earth Day  is celebrated on:",
        options:["14 December","3 March","21 June","22 April"],
        answer:3
    },
    {
        question:"national Sports Day in India is observed on:",
        options:["29 August","8 March","21 June","1 october"],
        answer:0
    },
    {
        question:"Children's Day in India is celebrated on:",
        options:["14 september","11 March","13 october","14 November"],
        answer:3
    },
    {
        question:"Human Rights Day is observed on:",
        options:["10 December","3 December","16 November","18 october"],
        answer:0
    },
    {
        question:"World wildlife Day  is celebrated on:",
        options:["10 December","22 March","3 March","14 February"],
        answer:2
    },
    {
        question:"World AIDS Day  is observed on:",
        options:["31 May","10 October","1 December","12 January"],
        answer:2
    },
    {
        question:"National Energy Conservation Day  is observed on:",
        options:["6 November","14 December","22 May","16 september"],
        answer:1
    } 
];
let current=0;
let score=0;
let selected=null;
const qE1=document.getElementById("question");
const optE1=document.querySelectorAll(".option");
const resultE1=document.getElementById("result");
const nextBtn=document.getElementById("nextBtn");
function lq(){
    selected=null;
    resultE1.innerText="";
    qE1.innerText=(current+1)+". "+quiz[current].question;
    optE1.forEach((btn,index)=>{
        btn.innerText=quiz[current].options[index];
        btn.classList.remove("correct","wrong");
        btn.disabled=false;
        btn.onclick=()=>selectOption(index);
    });
}
function selectOption(index){
    selected=index;
    optE1.forEach(btn=>
        btn.classList.remove("correct","wrong"));
        if(index===quiz[current].answer){
            optE1[index].classList.add("correct");
        }
        else{
            optE1[index].classList.add("wrong");
            optE1[quiz[current].answer].classList.add("correct");
        }
        optE1.forEach(btn=>btn.disabled=true);
}
nextBtn.addEventListener("click",()=>{
    if(selected===null){
        resultE1.innerText="Please select an option";
        return;
    }
    if(selected===quiz[current].answer){
        score++;
    }
    current++;

    if(current<quiz.length){
        lq();
    }
    else{
        document.querySelector(".quiz-container").innerHTML=`<h2>Your Score: ${score} out of ${quiz.length}</h2>`;
    }
});
lq();