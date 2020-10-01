// Ensuring document is ready before JS runs
$(document).ready(function () {
  // Function to write today's date under the page title and description
  function writeDate() {
    $("#currentDay").append(moment().format("dddd, MMMM Do"));
  }

  // Calling writeDate function
  writeDate();
});
