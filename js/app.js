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
