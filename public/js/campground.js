$(()=> {
    setOverflowHeight();
    $(window).resize(() => {
        setOverflowHeight();
    });
});

function setOverflowHeight() {
    $('.overflow-auto').css('height', $('img')[0].offsetHeight);
}