// (uses jquery)
// wait for the page to load first before we start doing stuff
$(document).ready(function () {
    //instead of having to copy and paste the navbar code into every page, we can just load it in
    //from a separate file
    $(".header").load("navbar.html", function () {
        //after it loads, fetch the current url we're at
        let currentPath = window.location.pathname.split("/").pop();

        //add the active css class to highlight the current page in the navbar
        $(".nav a").each(function () {
            let linkPath = $(this).attr("href");
            if (linkPath === currentPath) {
                $(this).addClass("active");
            }
        });
    });

    //for mobile/tablet users, handle the burger menu state
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
