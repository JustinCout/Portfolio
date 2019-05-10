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
};
