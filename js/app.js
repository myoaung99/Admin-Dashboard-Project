$(".show-sidebar-btn").click(() => {
  $(".sidebar").animate({
    marginLeft: 0,
  });
});

$(".hide-sidebar-btn").click(() => {
  $(".sidebar").animate({
    marginLeft: "-100%",
  });
});

window.onorientationchange = function () {
  window.location.reload();
};

function go(url) {
  location.href = `${url}`;
}

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(".fullscreen-btn").on("click", function () {
  console.log("ok");
  $(this).closest(".card").toggleClass("fullscreen-card");

  $(this).closest(".card").hasClass("fullscreen-card")
    ? $(".fullscreen-btn i")
        .removeClass("feather-maximize-2")
        .addClass("feather-minimize-2")
    : $(".fullscreen-btn i")
        .removeClass("feather-minimize-2")
        .addClass("feather-maximize-2");
});
