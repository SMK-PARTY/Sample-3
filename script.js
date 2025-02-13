document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const service = document.getElementById("service").value;
    const responseMessage = document.getElementById("responseMessage");

    if (name.length < 3) {
        responseMessage.textContent = "❌ Name must be at least 3 characters.";
        responseMessage.style.color = "red";
        return;
    }

    if (!/^\d{10}$/.test(contact)) {
        responseMessage.textContent = "❌ Enter a valid 10-digit mobile number.";
        responseMessage.style.color = "red";
        return;
    }

    responseMessage.textContent = `✅ Service booked successfully for ${service}!`;
    responseMessage.style.color = "green";

    document.getElementById("bookingForm").reset();
});
