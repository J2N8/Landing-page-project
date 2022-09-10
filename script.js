function support() {
  let fullName = prompt("What is your full name?");
  let email = prompt("What is your email?");

  alert(
    "Thank you," +
      " " +
      fullName +
      " " +
      "for becoming an Autism Awareness Supporter!!! We will be in touch soon to the email:" +
      " " +
      email +
      ". Until then, spread the word!"
  );
}

let supportButton = document.querySelector(".support-button");
supportButton.addEventListener("click", support);
