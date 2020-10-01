// Ensuring document is ready before JS runs
$(document).ready(function () {
  // Function to write today's date under the page title and description
  function writeDate() {
    $("#currentDay").append(moment().format("dddd, MMMM Do"));
  }

  // Calling writeDate function
  writeDate();

  colorChange();

  function colorChange() {
    var currentHour = moment().format("HH");
    console.log(currentHour);

    if (currentHour < 9 || currentHour > 17) {
      if (currentHour < 9) {
        $(".eventTextArea").addClass("future");
      } else if (currentHour > 17) {
        $(".eventTextArea").addClass("past");
      }
    }
  }
});
