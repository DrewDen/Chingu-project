const items = [
    {
        'title':"Don't worry if it doesn't work right. If everything did, you'd be out of a job.", 
        'text': 'Posted by: Steve Jobs',
        'textone': 'Reddit score: 9.5',
        'texttwo': 'Link to comment'
         
    },

    {
        'title': "Don't comment bad code - rewrite it",
        'text': "Posted by: Brian Kernighan ",
        'textone': 'Reddit score: 9.5',
        'texttwo': 'link to comment'
    },

    {
        'title': "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code",
        'text': 'Posted by: Dan Salomon',
        'textone': 'Reddit score: 9.5',
        'texttwo': 'link to comment'

    },

    {
        'title': "I don't care if it works on your machine! We are not shipping your machine!",
        'text': 'Posted by: Vidiu Platon',
        'textone': 'Reddit score: 9.5',
        'texttwo': 'link to comment'
    },

    {
        'title': "People don't care about what you say, they care about what you build",
        'text': 'Posted by: Mark Zuckerberg',
        'textone': 'Reddit score: 9.5',
        'texttwo': 'link to comment'
        
    },

    {
        'title': "If the code and the comments do not match, possibly both are incorrect",
        'text': 'Posted by: Norm Schryer',
        'textone': 'Reddit score: 9.5',
        'texttwo': 'link to comment'
    },

    {
        'title': "The computer was born to solve problems that did not exist before",
        'text': 'Posted by: Bill Gates',
        'textone': 'Reddit score: 9.5',
        'texttwo': 'link to comment'
        
    },

    {
        'title': "One main's crappy software is another man's full time job",
        'text': 'Posted by: Steve Job',
        'textone': 'Reddit score: 9.5',
        'texttwo': 'link to comment'
    }
        
  
]

let list = document.getElementById('list');
let listElement;
let titleElement;
let textElement;
let textoneElement;
let texttwoElement;

let elements = items.forEach(function(item){
    listElement = document.createElement('div');
    listElement.style.width = '200px';
    listElement.style.marginLeft = '-60px';
    listElement.style.padding = '10px';
    listElement.style.borderLeft = '1px solid yellow';
    listElement.style.marginBottom = '40px';
    
   
    titleElement= document.createElement('p');
    titleElement.innerHTML = item.title;
    titleElement.style.color = 'white';

    textElement = document.createElement('p');
    textElement.innerHTML = item.text;
    textElement.style.color = '#8be9fd';
    textElement.style.fontSize = '15px';


    textoneElement =document.createElement('p');
    textoneElement.innerHTML = item.textone;
    textoneElement.style.color = 'purple';
    textoneElement.style.fontSize = '12px';


    texttwoElement = document.createElement('p');
    texttwoElement.innerHTML = item.texttwo;
    texttwoElement.style.color = 'red';
    texttwoElement.style.fontSize = '10px';

    
    listElement.appendChild(titleElement);
    listElement.appendChild(textElement);
    listElement.appendChild(textoneElement);
    listElement.appendChild(texttwoElement);

    list.appendChild(listElement);
});


let displayTime;


function newClock(){
    const currentTime = new Date();
    
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

 
    let dayType = (currentHours < 12) ? "am" : "pm";
    

    currentHours = (currentHours > 12 ) ? currentHours - 12 : currentHours; 

    currentHours = (currentHours == 0) ? 12 : currentHours;

    displayTime = currentHours + ":" + currentMinutes + " " + dayType;

    document.getElementById('jsClock').innerHTML = displayTime;
    document.getElementById('jsClock').classList.add('jsClock');    
    setInterval(newClock, 1000);
}
newClock();
   




var months = [
'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]
const d = new Date();
var n = months[d.getMonth()];
document.getElementById("jsDate").innerHTML = n;
document.getElementById("jsDay").innerHTML = d.getDate();
document.getElementById("jsYear").innerHTML = d.getFullYear();
document.getElementById('jsDate').classList.add('jsDate');
document.getElementById('jsDay').classList.add('jsDay');
document.getElementById('jsYear').classList.add('jsYear');