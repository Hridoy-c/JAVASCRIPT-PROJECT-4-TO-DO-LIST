const title = document.getElementById("title");
const description = document.getElementById("description");
const age = document.getElementById("age");
const mainbox = document.querySelector(".mainbox");
const  form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

});

const add = () => {
   if (title.value === "" || description.value === "" || age.value === "") {
      alert("Please fill in all fields.");
      return;
    }
    else{
        const box = document.createElement("div");
        box.classList.add("box");

      box.innerHTML = `
      <h2>${title.value}</h2>
      <p>${description.value}</p>
      <p>${age.value}</p>
      `;
      mainbox.appendChild(box);
      title.value = "";
      description.value = "";
      age.value = "";
    }

}