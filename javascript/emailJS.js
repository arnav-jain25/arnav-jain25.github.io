function sendEmail() {

    if (typeof emailjs === "undefined") {
        alert("EmailJS SDK did not load correctly. Please check your network connection.");
        return;
    }

    emailjs.init("JzxRIgYvr72YKr5_N");

    const serviceID = "service_kxouwem";
    const templateID = "template_ixb0zzb";
    
    // Collect form data
    var params = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    console.log("Service ID:", serviceID);
    console.log("Template ID:", templateID);
    console.log("User ID initialized:", emailjs.userID); // Check if EmailJS initialized the User ID
    console.log("Params:", params);


    emailjs.send(serviceID, templateID, params)
        .then((response) => {
        alert("Your message has been sent successfully!");
        // Optionally, clear the form after sending
        document.getElementById("contactForm").reset();
        })
        .catch((error) => {
        alert("There was an error sending your message. Please try again.");
        console.error("EmailJS error:", error);
        });
}