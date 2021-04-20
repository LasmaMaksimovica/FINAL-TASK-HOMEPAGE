// validation
$(function () {
    $(".register-form").validate({
        rules: {
            username: "required",
            password: {
                required: true,
                minlength: 8
            },
            retype_password: {
                required: true,
                minlength: 8,
                equalTo: '#input-pasword-field'
            },
            name: "required",
            country: "required",
            agree: "required"
        },
        messages: {
            username: "Please enter your username",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long"
            },
            retype_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long",
                equalTo: "Please enter the same password as above",
            },
            name: "Please enter your name",
            country: "Please select your country",
            agree: "Please accept our policy"
        },
    });
});