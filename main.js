var question = [
  {
    "sl.no": 1 ,
    "question": "What does the abbreviation HTML stand for?",
    "choice_a": "High Text Markup Language", 
    "choice_b": "Hyper Text Markup Language", 
    "choice_c": "Hyper Text Markdown Language", 
    "choice_d": "None of the above",
    "ans": "Hyper Text Markup Language",
  },
  {
    "sl.no": 2 ,
    "question": "How many sizes of headers are available in HTML by default?",
    "choice_a": "5",
    "choice_b": "1", 
    "choice_c": "3", 
    "choice_d": "6",
    "ans": "6",
  },
  {
    "sl.no": 3 ,
    "question": "What is the effect of the <b> tag?",
    "choice_a":"It converts the text within it to bold font",
    "choice_b": "It is used to write black-colored font", 
    "choice_c": "It is used to change the font size", 
    "choice_d": "None of the above",
    "ans": "It converts the text within it to bold font",
  },
  {
    "sl.no": 4 ,
    "question": "How to display preformatted text in HTML?",
    "choice_a": "<p>", 
    "choice_b": "<pre>", 
    "choice_c": "<hr>", 
    "choice_d": "All of the above",
    "ans": "<pre>",
  },
  {
    "sl.no": 5 ,
    "question": "Which HTML element is used to define description data?",
    "choice_a": "<li>", 
    "choice_b": "<ol>", 
    "choice_c": "<dd>", 
    "choice_d": "<dl>",
    "ans": "<dd>",
  },
  {
    "sl.no": 6 ,
    "question": "How are quotations defined in HTML?",
    "choice_a": "<quote>", 
    "choice_b": "<block>", 
    "choice_c": "<blockquote>", 
    "choice_d": "None of the above",
    "ans": "<blockquote>",
  },
  {
    "sl.no": 7 ,
    "question": "Which of the following things are necessary to create an HTML page?",
    "choice_a": "A text editor", 
    "choice_b": "Web Browser", 
    "choice_c": "Both", 
    "choice_d": "None of the above",
    "ans": "Both",
  },
  {
    "sl.no": 8 ,
    "question": "What are those objects called which are used for storing data on the client provided by the HTML local storage?",
    "choice_a": "Windows.localStorage", 
    "choice_b": "Window.sessionStorage", 
    "choice_c": "Both", 
    "choice_d": "None of the above",
    "ans": "Both",
  },
  {
    "sl.no": 9 ,
    "question": "The most basic part of any HTML page is?",
    "choice_a": "ASCII Text", 
    "choice_b": "Binary Text", 
    "choice_c": "Text", 
    "choice_d": "None of the above",
    "ans": "ASCII Text",
  },
  {
    "sl.no": 10 ,
    "question": "What are the main components of the front end of any working website?",
    "choice_a": "HTML,CSS,Javascript", 
    "choice_b": "HTML only", 
    "choice_c":"Javascript only", 
    "choice_d": "Node.js",
    "ans": "HTML,CSS,Javascript",
  }
];



var serial=document.getElementById("sl_no");
var quest=document.getElementById("quest");
var choice_a=document.getElementById("a");
var choice_b=document.getElementById("b");
var choice_c=document.getElementById("c");
var choice_d=document.getElementById("d");

var set_value_1=document.getElementById("r1");
var set_value_2=document.getElementById("r2");
var set_value_3=document.getElementById("r3");
var set_value_4=document.getElementById("r4");

var button=document.getElementById("btn");

var ans=document.querySelectorAll(".cal");

var display_result=document.getElementById("score-card");
var score_card=document.getElementById("score");
var zero=document.getElementById("zero");
var congrats=document.getElementById("congrats");

i=0;
j=0;
result=0;

function next(){
  if(i<question.length){
    serial.innerText=question[i]["sl.no"];
    quest.innerText=question[i]["question"];
    choice_a.innerText=question[i]["choice_a"];
    choice_b.innerText=question[i]["choice_b"];
    choice_c.innerText=question[i]["choice_c"];
    choice_d.innerText=question[i]["choice_d"];

    set_value_1.setAttribute("value",question[i]["choice_a"]);
    set_value_2.setAttribute("value",question[i]["choice_b"]);
    set_value_3.setAttribute("value",question[i]["choice_c"]);
    set_value_4.setAttribute("value",question[i]["choice_d"]);

    display_result.style.display="none"
    if(i==question.length-1){
      button.style.background="pink";
      button.style.color="black";
      button.innerHTML="SUBMIT THE QUIZ"
    }
    
  }
  else{
    if(result<=0){
      zero.style.display="inline";
      congrats.style.display="none";
      display_result.style.display="inline";
      score_card.innerText=result + " out of " + question.length*1;
    }
    else{
      zero.style.display="none";
      congrats.style.display="inline";
      display_result.style.display="inline";
      score_card.innerText=result + " out of " + question.length*1;
    }
    
  }
  i++;  

}

function answer_check(){
  let ans_store;
  ans.forEach((element)=>{
    if(element.checked){
      ans_store=element.id;
    }
    
  })
  return ans_store;
}

function ans_close(){
  ans.forEach((element)=>{
    element.checked=false;
  })
}

button.addEventListener("click",()=>{
   let store_id = answer_check();
   let store_value = document.getElementById(store_id);
  if(store_value.value==question[j]["ans"]){
    result+=1;
  }
  else{
    result+=0;
  }
  j++;

  next();
  ans_close();
})
