//Get current day and display it in the header
var today = moment().format("dddd, MMMM, Do");
var currentDay = $("#currentDay").text(today);

//color code the blocks to according to time of day
function checkTime() {
  //get current time in hours
  var currentHour = moment().hour();

  //checking each time block
  $(".time-block").each(function () {
    //grabbing time string and converting it to a number to compare against current time
    var hour = parseInt($(this).attr("id").split("time")[1]);

      //check if we've moved past this timeblock
      if (hour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      //if we are in this timeblock
      else if (hour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      //if we have not yet reached this timeblock
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
  });
};
  //saving event to localStorage when save button click
  $(".saveBtn").on("click", function () {
    var id = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(id, text);
  });
  
//Each time block will have it's event persist if there is an event saved
$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));

checkTime();