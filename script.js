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

  fetch("https://script.google.com/macros/s/AKfycbwaGFhi6rT66ZiZkPdcgkexbKouv0wM1fGeRpK_3P8auq4HEH23IDX4IsNGwVoMCmqk/exec", {
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
