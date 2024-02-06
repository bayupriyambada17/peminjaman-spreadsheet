function changeLab(selectedValue) {
  // Hide all "Lab 1" dropdowns
  document.getElementById("change-lab1").style.display = "none";
  document.getElementById("change-lab2").style.display = "none";
  document.getElementById("change-laptop").style.display = "none";

  // Show the selected "Lab 1" dropdown
  document.getElementById("change-" + selectedValue.toLowerCase()).style.display = "block";
}

function pengembalianForm() {
  // Assuming you have a form with id="myForm"
  var form = document.getElementById("myForm");

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

  xhr.open("POST", "https://script.google.com/macros/s/AKfycbzzqxY9zn0xAl3DOa06fdLXUqDXBc9ivnJlo2xm1VnB4i6J5CRtr1kMv94aqdSledtd/exec", true);
  xhr.send(formData);

}


