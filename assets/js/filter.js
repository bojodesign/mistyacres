$(document).ready(function () {
  var selectedClass = "";
  $(".filter").click(function () {
    //Change active button when clicked
    $(".filter").removeClass('active');
    $(this).addClass('active');
    //Filter via button on data-rel
    selectedClass = $(this).attr("data-rel");
    $(".work").fadeTo(100, 0.1);
    $(".portfolio-item").not("." + selectedClass).fadeOut().removeClass('scale');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('scale').sort();
      $(".work").fadeTo(300, 1);
    }, 300);
  });
  //Set default filter on load
  $('[data-rel="aval"]').trigger('click')
});