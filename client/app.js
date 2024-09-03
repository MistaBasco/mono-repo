const messageForm = document.getElementById("message-form");

async function handleSubmit(event) {
  event.preventDefault();
  console.log("Form Submitted!");
  //do stuff with form data here

  const formData = new FormData(messageForm);
  //   const message = formData.get("message");
  const message = Object.fromEntries(formData);

  const promise = await fetch(
    "https://mono-repo-8mku.onrender.com:3000/messages",
    {
      method: "POST", //this is where we set the HTTP method i.e, POST
      headers: {
        "Content-Type": "application/json", // This tels the server that we're sending stringified JSON
      },
      body: JSON.stringify({ message }),
    }
  );
  const promiseData = await promise.json();
  console.log("From the server:", promiseData);
  messageForm.reset();
}

messageForm.addEventListener("submit", handleSubmit);
