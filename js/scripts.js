$(document).ready(function() {
  $("form#match-making").submit(function(event) { 
  
    const gender = $("select#gender").val();
    const genre = $("select#genre").val();
    let partner 

    if (gender === "Non-Binary" &&  genre === "Musician") {
      partner = "Sam Smith";
      } else if (gender === "Non-Binary" && genre === "Actor") {
      partner = "Sara Ramirez";
      } else if (gender === "Man" && genre === "Musician") {
      partner = "Ozuna";
      } else if (gender === "Man" && genre === "Actor") {
      partner = "Brad Pitt";
      } else if (gender === "Woman" && genre === "Musician") {
      partner = "Cardi B";
      }  else if (gender === "Woman" && genre === "Actor") {
      partner = "Catwoman";
      } else if (gender === "Any" && genre === "Musician") {
      partner = "Ozuna";
      } else if (gender === "Any" && genre === "Actor") {
      partner = "Brad Pitt";}   
  
    $("#partner").text(partner);
    $("#match").show(); 

    event.preventDefault();
  });
});
