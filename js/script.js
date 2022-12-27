document.addEventListener('DOMContentLoaded', function(){
  


   document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#fname').value;
        alert(`Dear ${name} your form is submitted`)
    }
})
