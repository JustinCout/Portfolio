window.onload = function() {
  //Nav Links
  let aboutLink = document.getElementById("aboutLink");
  let projectsLink = document.getElementById("projectsLink");
  let contactLink = document.getElementById("contactLink");
  let skillsLink = document.getElementById("skillsLink");

  //Scroll animations
  aboutLink.addEventListener("click", function() {
    $("html,body").animate(
      {
        scrollTop: $("#about").offset().top
      },
      "slow"
    );
  });
  projectsLink.addEventListener("click", function() {
    $("html,body").animate(
      {
        scrollTop: $("#projects").offset().top
      },
      "slow"
    );
  });
  contactLink.addEventListener("click", function() {
    $("html,body").animate(
      {
        scrollTop: $("#contact").offset().top
      },
      "slow"
    );
  });
  skillsLink.addEventListener("click", function() {
    $("html,body").animate(
      {
        scrollTop: $("#skills").offset().top
      },
      "slow"
    );
  });

  //Project card hover animations
  $(".card1").hover(
    function() {
      $(".card1 p, .cardTitle, .cardBtn")
        .slideDown("fast")
        .css("display", "block");
    },
    function() {
      $(".card1 p, .cardTitle, .cardBtn").css("display", "none");
    }
  );

  $(".card2").hover(
    function() {
      $(".card2 p, .cardTitle2, .cardBtn2")
        .slideDown("fast")
        .css("display", "flex");
    },
    function() {
      $(".card2 p, .cardTitle2, .cardBtn2").css("display", "none");
    }
  );

  $(".card3").hover(
    function() {
      $(".card3 p")
        .slideDown()
        .css("display", "flex");
    },
    function() {
      $(".card3 p").css("display", "none");
    }
  );

  $(".card4").hover(
    function() {
      $(".card4 p")
        .slideDown()
        .css("display", "flex");
    },
    function() {
      $(".card4 p").css("display", "none");
    }
  );
};
