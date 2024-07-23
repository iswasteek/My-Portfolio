//  jquery used section

(function ($) {
  "use strict";

  // Data Js
  $("[data-bg-image]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-bg-image") + ")"
    );
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  $(document).ready(function ($) {});

  $(window).on("load", function () {
    // WoW Js
    var wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 100, // default
      mobile: true, // default
      live: true, // default
    });
    wow.init();

    // Services Hover Js
    function service_animation() {
      var active_bg = $(".services-widget .active-bg");
      var element = $(".services-widget .current");
      $(".services-widget .service-item").on("mouseenter", function () {
        var e = $(this);
        activeService(active_bg, e);
      });
      $(".services-widget").on("mouseleave", function () {
        element = $(".services-widget .current");
        activeService(active_bg, element);
        element.closest(".service-item").siblings().removeClass("mleave");
      });
      activeService(active_bg, element);
    }
    service_animation();

    function activeService(active_bg, e) {
      if (!e.length) {
        return false;
      }
      var topOff = e.offset().top;
      var height = e.outerHeight();
      var menuTop = $(".services-widget").offset().top;
      e.closest(".service-item").removeClass("mleave");
      e.closest(".service-item").siblings().addClass("mleave");
      active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
    }

    $(".services-widget .service-item").on("click", function () {
      $(".services-widget .service-item").removeClass("current");
      $(this).addClass("current");
    });
  });
})(jQuery);
