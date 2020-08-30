// get current date to display in header
var today = moment().format("dddd, MMMM, Do");
var currentDay = $("#currentDay").text(today);

// set color code of the timeblocks based on time presence
function checkTime() {
  // get current moment in hour format
  var currentHour = moment().hour();

  // perform function in each timeblock
  $(".time-block").each(function () {
    // get and convert time to numeric value and compare against current time
    var hour = parseInt($(this).attr("id").split("time")[1]);

      // check current time's presence versus the timeblock's presence
      // moved past this timeblock?
      if (hour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      // current timeblock?
      else if (hour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      // future timeblock?
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
  });
};
  // save to localStorage with saveBtn
  $(".saveBtn").on("click", function () {
    var id = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(id, text);
  });
  
// set data persistence upon saved event
$("#time9 .description").val(localStorage.getItem("hour0900"));
$("#time10 .description").val(localStorage.getItem("hour1000"));
$("#time11 .description").val(localStorage.getItem("hour1100"));
$("#time12 .description").val(localStorage.getItem("hour1200"));
$("#time13 .description").val(localStorage.getItem("hour1300"));
$("#time14 .description").val(localStorage.getItem("hour1400"));
$("#time15 .description").val(localStorage.getItem("hour1500"));
$("#time16 .description").val(localStorage.getItem("hour1600"));
$("#time17 .description").val(localStorage.getItem("hour1700"));

// execute function
checkTime();