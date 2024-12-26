function validatePhoneNumber(number) {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return phoneRegex.test(number);
}

document.getElementById("check-btn").addEventListener("click", function () {
    const input = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");

    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    if (validatePhoneNumber(input)) {
        resultsDiv.innerText = "Valid US number: " + input;
    } else {
        resultsDiv.innerText = "Invalid US number: " + input;
    }
});

document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").innerText = "";
});
