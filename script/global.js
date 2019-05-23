window.onload = function() {
  //Nav Links
  //Scroll animations
  let aboutLink = document.querySelectorAll(".aboutLink");
  for (let i = 0; i < aboutLink.length; i++) {
    aboutLink[i].addEventListener("click", function() {
      $("html,body").animate(
        {
          scrollTop: $("#about").offset().top
        },
        "slow"
      );
    });
  }

  let projectsLink = document.querySelectorAll(".projectsLink");
  for (let i = 0; i < projectsLink.length; i++) {
    projectsLink[i].addEventListener("click", function() {
      $("html,body").animate(
        {
          scrollTop: $("#projects").offset().top
        },
        "slow"
      );
    });
  }

  let contactLink = document.querySelectorAll(".contactLink");
  for (let i = 0; i < contactLink.length; i++) {
    contactLink[i].addEventListener("click", function() {
      $("html,body").animate(
        {
          scrollTop: $("#contact").offset().top
        },
        "slow"
      );
    });
  }

  let skillsLink = document.querySelectorAll(".skillsLink");
  for (let i = 0; i < skillsLink.length; i++) {
    skillsLink[i].addEventListener("click", function() {
      $("html,body").animate(
        {
          scrollTop: $("#skills").offset().top
        },
        "slow"
      );
    });
  }

  //Project card hover animations
  $(".card1").hover(
    function() {
      $(".card1 p, .cardTitle, .cardBtn")
        .stop()
        .slideDown(250)
        .css("display", "flex");
    },
    function() {
      $(".card1 p, .cardTitle, .cardBtn")
        .stop()
        .slideUp("fast")
        .css("display", "none");
    }
  );

  $(".card2").hover(
    function() {
      $(".card2 p, .cardTitle2, .cardBtn2")
        .stop()
        .slideDown(250)
        .css("display", "flex");
    },
    function() {
      $(".card2 p, .cardTitle2, .cardBtn2")
        .stop()
        .slideUp("fast")
        .css("display", "none");
    }
  );

  $(".card3").hover(
    function() {
      $(".card3 p, .cardTitle3, .cardBtn3")
        .stop()
        .slideDown(250)
        .css("display", "flex");
    },
    function() {
      $(".card3 p, .cardTitle3, .cardBtn3")
        .stop()
        .slideUp("fast")
        .css("display", "none");
    }
  );

  $(".card4").hover(
    function() {
      $(".card4 p, .cardTitle4, .cardBtn4")
        .stop()
        .slideDown(250)
        .css("display", "flex");
    },
    function() {
      $(".card4 p, .cardTitle4, .cardBtn4")
        .stop()
        .slideUp("fast")
        .css("display", "none");
    }
  );

  //Mobile Menu
  //Toggle class adds a class to an element
  $("#burgerMenu").click(function() {
    $(this).toggleClass("close");

    $("#dropdownContent").slideToggle("1s");
  });

  //Content Animations//

  //About
  function aboutAnimation() {
    let about = $("#about");
    if (about.hasClass("transform")) about.removeClass("transform");
  }
  aboutAnimation();

  //Projects
  function projectsAnimation() {
    let projects = $("#projects");
    let projectsOffset = projects.offset().top - 500;
    $(document).on("scroll", function() {
      if ($(document).scrollTop() > projectsOffset)
        projects.removeClass("transform");
    });
  }
  projectsAnimation();

  //Skills
  function skillsAnimation() {
    let skills = $("#skills");
    let skillsOffset = skills.offset().top - 500;

    $(document).on("scroll", function() {
      if ($(document).scrollTop() > skillsOffset)
        skills.removeClass("transform");
    });
  }
  skillsAnimation();

  //Contact
  function contactAnimation() {
    let contact = $("#contact");
    let contactOffset = contact.offset().top - 600;
    $(document).on("scroll", function() {
      if ($(document).scrollTop() > contactOffset)
        contact.removeClass("transform");
    });
  }
  contactAnimation();
};
