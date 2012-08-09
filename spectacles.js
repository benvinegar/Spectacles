$(function () {
    // Blurred text (from Google)
    $('.blurred_answer_wrapper').removeClass('blurred_answer_wrapper');
    $('.with_signup').removeClass('with_signup');
    $('.signup_cta_on_answer').remove();

    // Forced overlay (from direct links)
    $('.fb_signup_background').remove();
    $('.fb_signup_dialog').remove();

    // Signup nagware
    $('.signup_bar_fixed').remove();
    $('.signup_bubble').closest('.row').remove();
});