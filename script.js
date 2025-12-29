const form = document.getElementById("scrapForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    address: document.getElementById("address").value,
    details: document.getElementById("details").value
  };

  fetch("https://script.google.com/macros/s/AKfycbyM_1EdveCwV4IvWJ-0OpvsCXMP8-0dFYR-0gDGi5HfBeO2oGT3MSOdVZq3v76kXlFr/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    msg.innerText = "Pickup booked successfully!";
    form.reset();
  })
  .catch(() => {
    msg.innerText = "Error. Try again.";
  });
});
