function sendMail(contactForm) {
  emailjs.send("service_o4w3ce8", "dream_lake_fishery", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "message": contactForm.message.value
    })
    .then(
      function(response) {
        console.log("SUCCESS", response);
      },
      function(error) {
        console.log("FAILED", error);
      }
    );
  return false;

}
