let balance = 72500;
let totalIncome = 120000;
let totalExpenses = 47500;


function showTransactionForm() {

    const form = document.getElementById("transaction-form");

    form.style.display = "block";
}


function addTransaction() {

    const type =
        document.getElementById("transaction-type").value;

    const amount =
        Number(
            document.getElementById("transaction-amount").value
        );

    const description =
        document.getElementById("transaction-description").value;


    if (amount <= 0) {

        alert("Please enter a valid amount.");

        return;
    }


    if (description.trim() === "") {

        alert("Please enter a description.");

        return;
    }


    if (type === "income") {

        balance = balance + amount;

        totalIncome = totalIncome + amount;

    } else {

        balance = balance - amount;

        totalExpenses = totalExpenses + amount;

    }


    updateDashboard();


    alert(
        "Transaction added successfully!"
    );


    document.getElementById("transaction-amount").value = "";

    document.getElementById("transaction-description").value = "";

}


function updateDashboard() {

    document.getElementById("balance").textContent =
        "₦" + balance.toLocaleString();

    document.getElementById("income").textContent =
        "₦" + totalIncome.toLocaleString();

    document.getElementById("expenses").textContent =
        "₦" + totalExpenses.toLocaleString();

}
