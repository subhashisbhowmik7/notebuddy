console.log("Hello there. ")


let myNotes=[]
// myNotes=JSON.stringify(myNotes);   //changes back to string so that it can be put into the localStorage
const ulEl=document.getElementById("ul-el");
const inputEl=document.getElementById("input-el");

//save a note
const inputBtn=document.getElementById("input-btn").addEventListener("click",function (){
    myNotes.push(inputEl.value);
    localStorage.setItem("myNotes",JSON.stringify(myNotes));
    console.log(myNotes);
    ulEl.innerHTML="";
    note();
    inputEl.value="";
}
)

const localStorage_refresh= JSON.parse(localStorage.getItem("myNotes"));        //prevents data from getting lost even after refresh
console.log(localStorage_refresh);

if(localStorage_refresh)            //check if there is any item in the localStorage
{
    myNotes=localStorage_refresh;
    console.log(myNotes);

    note();                         //if present then show it in the DOM
}

//delete the local Storage CLEAR DOM
const dlEl=document.getElementById("delete-btn");
dlEl.addEventListener("dblclick",function(){
    console.log("delete");
localStorage.clear();
myNotes=[];                     //change array to empty
ulEl.innerHTML="";              //foR the DOM
});


//get link for the current tab
const tbEl=document.getElementById("tab-btn");          
tbEl.addEventListener("click", function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {     //using the chrome.tabs API
        myNotes.push(tabs[0].url)
        localStorage.setItem("myNotes",JSON.stringify(myNotes))
        ulEl.innerHTML="";
        note();
    })
});




function note()             //manipulates the html for list for the notes
{
    for( let i=0;i<myNotes.length;i++){
        ulEl.innerHTML+="<li><a target='_blank' href='#'>"+myNotes[i]+"</a></li>";
        }

}
