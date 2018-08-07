$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Screw you, Cat! Bark!</li>")
    $("h2").append("<img src='img/meowCat.jpeg'>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("button").click(function() {
      $("h2").children("img").last().remove();
    });
  });

  $("button#purr").click(function() {
    $("ul#cat").prepend("<li>Puuuuuurrrrrr</li>");
    $("ul#dog").prepend("<li>I see you, Cat. Keep your distance. Woof.</li>")
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#hiss").click(function() {
    $("ul#cat").prepend("<li>Hiiiissss!</li>");
    $("ul#dog").prepend("<li>That's it, Cat. You going down. Snarl!</li>")
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
