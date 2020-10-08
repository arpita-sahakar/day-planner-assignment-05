

$(document).ready(function () {
  function init() {
    for (i = 9; i < 18; i++) {
      // set current date & time on top of the calender
      var time = moment().format("dddd MMMM Do");
      console.log(time);
      $("#currentDay").text(time);

      // create row inside div
      var rowDiv = $("<div>");
      rowDiv.attr("class", "row");

      //create colum inside div - time colum
      var colHrDiv = $("<div>");
      colHrDiv.attr("class", "col-2 hour");
      if (i < 12) {
        colHrDiv.text(i + "AM");
      } else if (i === 12) {
        colHrDiv.text(i + "PM");
      } else if (i > 12) {
        colHrDiv.text(i - 12 + "PM");
      }

      //create colum inside div - text colum
      var colTxDiv = $("<div>");

      var todayDate = new Date();
      var currentHour = todayDate.getHours();

      if(i === currentHour){
        colTxDiv.attr("class", "col-8 present");
      }else if(i<currentHour){
        colTxDiv.attr("class", "col-8 past");

      }else if(i>currentHour){
        colTxDiv.attr("class", "col-8 future");

      }

      var textDiv = $("<textarea>");
      textDiv.attr("rows", "2");
      textDiv.attr("cols", "80");
      textDiv.attr("id", i);
      var receivedValFromLC = localStorage.getItem(i);
      textDiv.val(receivedValFromLC);


      colTxDiv.append(textDiv);

      //create colum inside div -  save colum
      var colSaveDiv = $("<div>");
      colSaveDiv.attr("class", "col-2 time-block saveBtn");
      colSaveDiv.attr("textAreaId", i);


      var imgInsideColSaveDiv = $("<img>");
      imgInsideColSaveDiv.attr("src", "./Assets/images/lockimage.png");
      imgInsideColSaveDiv.attr("width", "60");
      imgInsideColSaveDiv.attr("height", "60");
      imgInsideColSaveDiv.attr("alt", "lock");

      colSaveDiv.append(imgInsideColSaveDiv);

      //append all the colum in the row and finally the row in the container
      rowDiv.append(colHrDiv, colTxDiv, colSaveDiv);
      $(".container").append(rowDiv);
    }
  }
  //function call
  init();

  // on-click event to save button div
  // fetching the value and storing it in a variable.
  //saving it to local storage

  $(".saveBtn").on("click", function () {

     var textAreaId = $(this).attr("textAreaId");
     var textAreaValue = ($("#" + textAreaId).val());

     localStorage.setItem(textAreaId, textAreaValue );
    //  console.log(localStorage.getItem(textAreaId));




  });
});
