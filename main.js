$(function(){
    $("#item").click(function(){
        $("#submenu").slideToggle(500);
    });
});
$(function(){
    $("#item1").click(function(){
        $("#submenu1").slideToggle(500);
    });
});
$(function(){
    $("#item2").click(function(){
        $("#submenu2").toggle(1000);
    });
});
$(function(){
    $("#item3").click(function(){
        $("#submenu3").toggle(1000);
    });
});
$(function(){
    $("#item4").click(function(){
        $("#submenu4").toggle(2000);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
});
async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    formData.append('image', formImage.files[0]);

    if (error === 0) {
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('_sending');
        } else {
            alert("Error");
            form.classList.remove('_sending');
        }
        
    } else {
        alert('Please fill in mandatory fields');
    }
}