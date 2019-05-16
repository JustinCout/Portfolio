window.onload = function () {
  //Nav Links
  let aboutLink = document.getElementsByClassName("aboutLink")[0];
  let projectsLink = document.getElementsByClassName("projectsLink")[0];
  let contactLink = document.getElementsByClassName("contactLink")[0];
  let skillsLink = document.getElementsByClassName("skillsLink")[0];

  //Scroll animations
  aboutLink.addEventListener("click", function () {
    $("html,body").animate({
        scrollTop: $("#about").offset().top
      },
      "slow"
    );
  });
  projectsLink.addEventListener("click", function () {
    $("html,body").animate({
        scrollTop: $("#projects").offset().top
      },
      "slow"
    );
  });
  contactLink.addEventListener("click", function () {
    $("html,body").animate({
        scrollTop: $("#contact").offset().top
      },
      "slow"
    );
  });
  skillsLink.addEventListener("click", function () {
    $("html,body").animate({
        scrollTop: $("#skills").offset().top
      },
      "slow"
    );
  });

  //Project card hover animations
  $(".card1").hover(
    function () {
      $(".card1 p, .cardTitle, .cardBtn")
        .stop()
        .slideDown("300ms")
        .css("display", "flex");
    },
    function () {
      $(".card1 p, .cardTitle, .cardBtn")
        .stop()
        .slideUp("fast")
        .css("display", "none");
    }
  );

  $(".card2").hover(
    function () {
      $(".card2 p, .cardTitle2, .cardBtn2")
        .stop()
        .slideDown("300ms")
        .css("display", "flex");
    },
    function () {
      $(".card2 p, .cardTitle2, .cardBtn2")
        .stop()
        .slideUp("fast")
        .css("display", "none");
    }
  );

  $(".card3").hover(
    function () {
      $(".card3 p, .cardTitle3, .cardBtn3")
        .stop()
        .slideDown("300ms")
        .css("display", "flex");
    },
    function () {
      $(".card3 p, .cardTitle3, .cardBtn3")
        .stop()
        .slideUp("fast")
        .css("display", "none");
    }
  );

  $(".card4").hover(
    function () {
      $(".card4 p, .cardTitle4, .cardBtn4")
        .stop()
        .slideDown("300ms")
        .css("display", "flex");
    },
    function () {
      $(".card4 p, .cardTitle4, .cardBtn4")
        .stop()
        .slideUp("fast")
        .css("display", "none");
    }
  );

  //Mobile Menu
  //Toggle class adds a class to an element
  $("#burgerMenu").click(function () {
    $(this).toggleClass('close');
    $('#dropdownContent').slideToggle('1s');

  });
};