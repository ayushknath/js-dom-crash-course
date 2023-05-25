const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filterInput = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);

// Delete button click event
itemList.addEventListener("click", deleteItem);

// Filter items
filterInput.addEventListener("keydown", filterItems);

// Add item function
function addItem(e) {
  e.preventDefault();

  // Get input value
  const newItem = document.getElementById("item").value;

  // Create new list item (li)
  const li = document.createElement("li");

  // Add class
  li.className = "list-group-item";

  // Create a new text node
  const newItemText = document.createTextNode(newItem);

  // Append text node to li
  li.appendChild(newItemText);

  // Create delete button
  const delBtn = document.createElement("button");

  // Add classes
  delBtn.className = "btn btn-danger btn-sm float-right delete";

  // Create delete button text node
  const delBtnText = document.createTextNode("X");

  // Append text to delete button
  delBtn.appendChild(delBtnText);

  // Append delete button to li
  li.appendChild(delBtn);

  // Append li to ul
  itemList.appendChild(li);
}

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    const li = e.target.parentElement;
    li.remove();
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();

  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
