
$(document).ready(function(){
    $(".hide1").click(function(){
      $(".box1").hide();
    });
  });

  $(document).ready(function(){
    $(".hide2").click(function(){
      $(".box2").hide();
    });
  });

  $(document).ready(function(){
    $(".hide3").click(function(){
      $(".box3").hide();
    });
  });

  $(document).ready(function(){
    $(".hideall").click(function(){
      $(".box1, .box2, .box3").hide();
    });
  });

  $(document).ready(function(){
    $(".change1").click(function(){
      $(".box1").css("background-color", "lime");
      $(".box1").css("border-style", "double");
      $(".box1").css("border-color", "orchid");
      $(".box1").css("border-width", "12px");
    });
  });

  $(document).ready(function(){
    $(".change2").click(function(){
      $(".box2").css("background-color", "blue");
      $(".box2").css("border-style", "dotted");
      $(".box2").css("border-color", "crimson");
    });
  });

  $(document).ready(function(){
    $(".change3").click(function(){
      $(".box3").css("background-color", "coral");
      $(".box3").css("border-style", "solid");
      $(".box3").css("border-color", "seagreen");
    });
  });

  $(document).ready(function(){
    $(".changeall").click(function(){
      $(".box1, .box2, .box3").css("background-color", "yellow");
      $(".box1, .box2, .box3").css("border-style", "groove");
      $(".box1, .box2, .box3").css("border-color", "orange");
      $(".box1, .box2, .box3").css("border-width", "10px");
    });
  });

  $(document).ready(function(){
    $(".reset").click(function(){
      $(".box1, .box2, .box3");location.reload();
    });
  });

  $(document).ready(function(){
    $(".show").click(function(){
      $(".box1, .box2, .box3").show();
    });
  });