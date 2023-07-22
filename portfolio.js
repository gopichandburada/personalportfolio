var typed = new Typed(".animatetext", {
    strings: ["Web devoloper", "Frontend devoloper"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let name = document.getElementById('name');
var msg = document.getElementById('message');
var eid = document.getElementById('email')
var toname = "Gopi Chand";

// name.textContent = "venkatesh";
function fun() {
    var templateParams = {
        from_name: name.value,
        message: msg.value,
        email: eid.value,
        to_name: "Gopi Chand",

    };


    emailjs.send('service_tq9u28c', 'template_bm7wwa5', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("mail sent successfully")
        }, function(error) {
            console.log('FAILED...', error);
            alert("email sending failed")
        });

}