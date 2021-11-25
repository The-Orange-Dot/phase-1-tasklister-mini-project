document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#new-task-description");
  const submitBtn = document.querySelector("#submit-button");
  const todoList = document.querySelector("#tasks");
  const dropdownMenu = document.querySelector("#dropdown");
  const div = document.querySelector("#div-container");
  const low = document.querySelector("#low-priority");

  //---tasks---
  //Be able to type a task into the input field
  //Be able to click some form of a submit button
  //Be able to see the task string to appear in the DOM after submit

  submitBtn.addEventListener("click", (event) => {
    if (input.value == "") {
      event.preventDefault();
    } else {
      event.preventDefault();
      const submitted = input.value;
      let li = document.createElement("LI");
      let div = document.createElement("DIV");
      li.innerText = submitted;
      todoList.appendChild(div);
      // div.appendChild(li);

      //---addition tasks---
      //---delete button--
      let del = document.createElement("button");
      del.classList.add("del");
      del.textContent = "Delete";
      del.style.backgroundColor = null;

      del.addEventListener("click", () => {
        li.remove();
        div.remove();
      });

      //--dropdown color option--
      if (dropdownMenu.value == "high") {
        li.style.backgroundColor = "red";
        li.style.color = "white";
        div.classList.add("high-priority");
        todoList.prepend(div);
        div.append(li);
        li.append(del);
      } else if (dropdownMenu.value == "low") {
        li.style.background = "lightgrey";
        div.classList.add("low-priority");
        todoList.appendChild(div);
        div.append(li);
        li.append(del);
      } else {
        li.style.background = "yellow";
        div.classList.add("med-priority");
        todoList.insertBefore(div, low);
        div.append(li);
        li.append(del);
      }
    }
  });
});
