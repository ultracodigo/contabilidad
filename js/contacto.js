const celular = document.getElementById('celular');

celular.addEventListener('input', function () {
    // Ensure the value starts with 9 and is at most 9 digits long
    if (celular.value.length > 0 && (celular.value.length > 9 || celular.value[0] !== '9')) {
        celular.value = celular.value.slice(0, 9); // Truncate to the first 9 characters
        if (celular.value[0] !== '9') {
            celular.value = '9' + celular.value.slice(1); // Ensure the first digit is 9
        }
    }
});

var form = document.getElementById("contactform");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "";
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Gracias por contactarnos!",
                showConfirmButton: false,
                timer: 2000
            });
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! Hubo un problema al enviar tu correo"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! Hubo un problema al enviar tu correo"
    });
}
form.addEventListener("submit", handleSubmit)