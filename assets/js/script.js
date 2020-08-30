// get current date to display in header
var today = moment().format("dddd, MMMM Do");
$("#todayDate").text(today);

// set color code of the timeblocks based on time presence
function getTime() {
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
$("#hour0900 .description").val(localStorage.getItem("hour0900"));
$("#hour1000 .description").val(localStorage.getItem("hour1000"));
$("#hour1100 .description").val(localStorage.getItem("hour1100"));
$("#hour1200 .description").val(localStorage.getItem("hour1200"));
$("#hour1300 .description").val(localStorage.getItem("hour1300"));
$("#hour1400 .description").val(localStorage.getItem("hour1400"));
$("#hour1500 .description").val(localStorage.getItem("hour1500"));
$("#hour1600 .description").val(localStorage.getItem("hour1600"));
$("#hour1700 .description").val(localStorage.getItem("hour1700"));

// execute function
getTime();