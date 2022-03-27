$(document).ready(function() {
  $.ajax({
    url : "./components/cont_1.html",
    success : function(result) {
        $(".cont_1").html(result);
    },
  });
  $.ajax({
    url : "./components/cont_2.html",
    success : function(result) {
        $(".cont_2").html(result);
    },
  });
  $.ajax({
    url : "./components/cont_3.html",
    success : function(result) {
        $(".cont_3").html(result);
    },
  });
});
