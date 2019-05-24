const items = [
    {
        'title':'Test1', 
        'text': 'One Two Three',
        'textone': 'two three four'
         
    },

    {
        'title': 'Test1',
        'text': 'One Two Three'
    },

    {
        'title': 'Test1',
        'text': 'One Two Three'
        
    },

    {
        'title': 'Test1',
        'text': 'One Two Three'
    },

    {
        'title': 'Test1',
        'text': 'One Two Three'
        
    },

    {
        'title': 'Test1',
        'text': 'One Two Three'
    },

    {
        'title': 'Test1',
        'text': 'One Two Three'
        
    },

    {
        'title': 'Test1',
        'text': 'One Two Three'
    }
        
  
]

let list = document.getElementById('list');
let listElement;
let titleElement;
let textElement;
let textoneElement;

let elements = items.forEach(function(item){
    listElement = document.createElement('div');
    listElement.style.width = '150px';
    listElement.style.padding = '5px';
    listElement.style.borderLeft = '1px solid yellow';
    listElement.style.marginBottom = '50px';
   
    titleElement= document.createElement('p');
    titleElement.innerHTML = item.title;
    titleElement.style.color = 'red';

    textElement = document.createElement('p');
    textElement.innerHTML = item.text;

    textoneElement =document.createElement('p');
    textoneElement.innerHTML = item.textone;
    
    listElement.appendChild(titleElement);
    listElement.appendChild(textElement);
    listElement.appendChild(textoneElement);

    list.appendChild(listElement);
});



