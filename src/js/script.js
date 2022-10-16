function afterThemeDownloadMessage() {
  alert("Thank you for downloading. Hope you will like it. Don't forget to give credits to heyDocs.")
}

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$('body').click(function(e) {
    if ($('.menu').hasClass('bar')) {
      $(".menu").toggleClass('bar')
    }
  })

// Rating Initialization
$(document).ready(function() {
    $('#rateMe1').mdbRate();
  });
