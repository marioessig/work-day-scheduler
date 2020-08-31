// get current date to display in header
var today = moment().format('dddd Do, MMMM, YYYY');
$("#todayDate").text(today);

// get current hour to display in header
var nowHour = moment().format('HHMM') + " hours";
$("#todayHour").text(nowHour);


// set color code of the timeblocks based on time presence
function getTime() {
  // get current moment in hour format
  var getHour = moment().hour();
  // confirm getHour is working
  console.log("getHour is " + getHour);

  // perform function in each timeblock
  $(".time-block").each(function () {
    // get and convert time to numeric value and compare against current time
    var hour = parseInt($(this).attr("id"));

    // confirm hour variable is working
    console.log("hour is " + hour);

      // check current time's presence versus the timeblock's presence
      // moved past this timeblock?
      if (hour < getHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      // current timeblock?
      else if (hour === getHour) {
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
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// execute function
getTime();