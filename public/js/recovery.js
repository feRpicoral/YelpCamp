function showConfirmation() {
    $('#form').toggleClass('d-none');
    $('.confirmation').toggleClass('d-none');
}

function showUserEmail() {
    const username = $('#username')[0];
    const strong = $('.confirmation').find('strong');
    const span = $('.confirmation').find('span');

    strong.text(username.value);

    if (!username.value.includes('@')) {
        span.toggleClass('d-none');
    }
}

//DOM ready
$(()=>{
    $('#form').submit((event) => {
        showConfirmation();
        showUserEmail();
    });
});