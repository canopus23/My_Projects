
const input = document.getElementById('input');
const listContainer = document.getElementById('list-container');
const button = document.querySelector('button');


button.addEventListener('click', 
function textInput(){
    if (input.value === ''){
        alert("Please Write Something")
    } else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li)
        input.value = "";


        li.addEventListener('click', () => {
            li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });

        li.addEventListener('dblclick', () => {
            listContainer.removeChild(li)
        })
    }
    
})
