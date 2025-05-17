$(function () {
    const topMenu = $("#ht-top-menu");
    const toggleTopMenuIcon = $("#ht-toggle-top-menu-icon");

    // Mẹo - Bấm vô menu thì bật ra, bấm ra ngoài tự động đóng lại
    $(document).click((e) => {
        if (toggleTopMenuIcon[0].contains(e.target)) {
            topMenu.toggleClass("hidden ht-topmenu-expaned animate-slideDown");
        } else {
            if (!topMenu.hasClass("hidden")) {
                topMenu.removeClass("ht-topmenu-expaned animate-slideDown");
                topMenu.addClass("hidden");
            }
        }
    });
});
