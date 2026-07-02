const input = document.getElementById('input');
const btn = document.getElementById('add');
const list = document.getElementById('list');

const addTask = () => {
  if(input.value === '') {
    alert('Please enter a task');
  } else {
     const li = document.createElement('li');
     li.innerHTML = input.value;
     list.appendChild(li);
     const spane = document.createElement('span');
     spane.innerHTML = '&#10006;';
     spane.classList.add('delete');
     li.appendChild(spane);
     input.value = '';

  }

}


list.addEventListener('click', (e) => {
   if(e.target.tagName ==='LI'){
    e.target.classList.toggle('checked');
   }
   else if(e.target.tagName ==='SPAN'){
    e.target.parentElement.remove();
   }

})
