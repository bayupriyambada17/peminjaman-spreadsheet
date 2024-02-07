function changeLab(selectElement) {
  // Hide all select dropdowns
  document.getElementById("change-lab1").style.display = "none";
  document.getElementById("change-lab2").style.display = "none";
  document.getElementById("change-laptop").style.display = "none";

  // Show the selected select dropdown
  var selectedValue = selectElement.toLowerCase();
  document.getElementById("change-" + selectedValue).style.display = "block";

  // Enable select inside the selected div
  var selectedDiv = document.getElementById("change-" + selectedValue);
  var selectInsideDiv = selectedDiv.querySelector("select");
  selectInsideDiv.removeAttribute("disabled");
}
function submitForm() {
  // Assuming you have a form with id="myForm"
  var form = document.getElementById("myForm");

  const inputan = form.querySelectorAll("input", "textarea", "select");
  var isValid = true;
  inputan.forEach((input) => {
    if (input.value === "") {
      isValid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  })

  if (!isValid) {
    Toastify({
      text: "Harap isi semua fields yang diperlukan",
      className: "error",
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #ff5f6d)",
      }
    }).showToast();
    return;
  }

  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.result === "success") {
        form.reset();
        window.location.href = 'index.html';
      } else {
        console.error(response.error);
      }
    }
  }

  xhr.open("POST", "https://script.google.com/macros/s/AKfycbw8SrfcE0kLYLACjfXPiMstbcIl6Zmqe_kn2xlS90oYfEEiSvhtb1eLqCQykKS12Q5S/exec", true);
  xhr.send(formData);

}


