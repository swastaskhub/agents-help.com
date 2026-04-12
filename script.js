function goToSubmit() {
    window.location.href = "submit.html";
}

function openPayment() {
    document.getElementById("paymentModal").style.display = "block";
}

function confirmPayment() {
    let method = document.getElementById("paymentMethod").value;

    alert("Payment method selected: " + method + 
    "\nYou will receive payment via your chosen method.");

    window.location.href = "index.html";
}