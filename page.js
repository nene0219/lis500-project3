$(document).ready(function () {
    $(".header").load("navbar.html", function () {
        let currentPath = window.location.pathname.split("/").pop();

        $(".nav a").each(function () {
            let linkPath = $(this).attr("href");
            if (linkPath === currentPath) {
                $(this).addClass("active");
            }
        });
    });

    $(document).click(function (event) {
        var target = $(event.target);
        if (!target.closest('.navbar-container').length) {
            $('#nav-toggle').prop('checked', false);
        }
    });

    $('.nav a').click(function () {
        $('#nav-toggle').prop('checked', false);
    });
});
