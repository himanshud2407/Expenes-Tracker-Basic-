let expenses = [];
let totalAmount = 0;

const itemName = document.getElementById("item-name");
const itemAmount = document.getElementById("item-amount");
const dateInput = document.getElementById("item-date");
const addBtn = document.getElementById("add-item");
const expenseTableBody = document.getElementById("expense-list-tbody");
const totalAmt = document.getElementById("total-amount");

addBtn.addEventListener("click", function () {
  const name = itemName.value.trim();
  const amount = parseFloat(itemAmount.value);
  const date = dateInput.value;

  if (name === "") {
    alert("Enter item name!");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Enter a positive amount!");
    return;
  }
  if (date === "") {
    alert("Enter a date!");
    return;
  }

  expenses.push({ name, amount, date });
  totalAmount += amount;

  totalAmt.textContent = totalAmount;

  const newRow = expenseTableBody.insertRow();
  newRow.insertCell().textContent = name;
  newRow.insertCell().textContent = amount;
  newRow.insertCell().textContent = date;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    const index = expenses.findIndex(
      (exp) => exp.name === name && exp.amount === amount && exp.date === date
    );
    if (index !== -1) {
      totalAmount -= expenses[index].amount;
      expenses.splice(index, 1);
      totalAmt.textContent = totalAmount;
      expenseTableBody.removeChild(newRow);
    }
  });
  newRow.insertCell().appendChild(deleteBtn);

  itemName.value = "";
  itemAmount.value = "";
  dateInput.value = "";
});
