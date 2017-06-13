//business logic
function Ticket(movieName, time, age, cost) {
  this.movieName = name;
  this.time = time;
  this.age = age;
  this.cost = cost;
}

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


    var inputtedMovieName = $("input#name").val();
    var inputtedMovieTime = $("select#time").val();
    var inputtedAge = $("select#age").val();

    Ticket.prototype.calculateCost = function() {
      if (inputtedMovieTime === "morning") {
        this.cost += 3;
      } else {
        this.cost += 5;
      }
      if (inputtedAge === "18-64") {
        this.cost += 5;
      } else {
        this.cost += 3;
      }
    };

    var newCost = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedAge, 0);

    $("div#results").append("<p"> + newCost.calculateCost() + "</p>");
    console.log(newCost);
    console.log(newCost.calculateCost());



    });
  });