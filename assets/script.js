// Ensuring document is ready before JS runs
$(document).ready(function () {
  // Function to write today's date under the page title and description
  function writeDate() {
    $("#currentDay").append(moment().format("dddd, MMMM Do"));
  }

  // Calling writeDate function
  writeDate();

  var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
  var rowIDs = [];
  var combined = {};

  getRowIDs();

  function getRowIDs() {
    var total = $(".eventTextArea").length;
    for (var i = 0; i <= total; i++) {
      var eachID = $(".eventTextArea").eq(i).attr("id");
      rowIDs[i] = eachID;
    }
    console.log(rowIDs);
    combined = hours.map(function (x, i) {
      return { time: x, id: rowIDs[i] };
    });
    console.log(combined);
  }

  function colorChange() {
    var currentHour = parseInt(moment().format("HH"));
    console.log(currentHour);

    if (currentHour < 9 || currentHour > 17) {
      if (currentHour < 9) {
        $(".eventTextArea").addClass("future");
      } else if (currentHour > 17) {
        $(".eventTextArea").addClass("past");
      }
    }

    for (var j = 0; j < hours.length; j++) {
      console.log(hours[j]);
      if (hours[j] === currentHour) {
        console.log("present");
      } else if (hours[j] < currentHour) {
        console.log("past");
      } else {
        console.log("future");
      }
    }
  }

  colorChange();
});
