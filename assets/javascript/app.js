var firebaseConfig = {
    apiKey: "AIzaSyBfIDCKdtNxPce1iMRYVUtYHdmGzCLvhvA",
    authDomain: "yo-countdown-5ed79.firebaseapp.com",
    databaseURL: "https://yo-countdown-5ed79.firebaseio.com",
    projectId: "yo-countdown-5ed79",
    storageBucket: "",
    messagingSenderId: "374828978853",
    appId: "1:374828978853:web:1a374fbc57538f06"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#add-train").on("click", function(event){
      event.preventDefault();

    
      var train = {
          name: $("#train-name").val().trim(),
          destination: $("#destination").val().trim(),
          firstTrain: $("#first-train").val().trim(),
          frequency: $("#frequency").val().trim(),
      };
      
      database.ref().push(train);
  
    //clear inputs 
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#frequncy").val("");
});
  database.ref().on("child_added", function(snapshot){
    //   console.log(snapshot.val());
    var firstTrainTime = 0;

    var firstTrainTimeConverted = moment(firstTrainTime, "HH:mm");
	    console.log(firstTrainTimeConverted);

    
    var tableRow = $("<tr>");
    var trainName = $("<td>" + snapshot.val().name + "</td>");
    var trainDestination = $("<td>" + snapshot.val().destination + "</td>");
    var trainFrequency = $("<td>" + snapshot.val().frequency + "</td>");

    tableRow.append(trainName, trainDestination, trainFrequency);
    $(".table").append(tableRow);

    // Create Error Handling
    }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);

    });