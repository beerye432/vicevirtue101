function submitHabit() {
 Parse.initialize("V6NcQkeFHBu6SOcSYJptWFgKzgOiuc2ywEXnmL31", "Xw3yYjXIFL6tVLwN3vhmPJMYLmd4AiJI3mRUjl1l");
 var objectId = Parse.User.current().id;
 var user = Parse.Object.extend("User");
 var query = new Parse.Query(user);
 query.equalTo("objectId", objectId);
 query.find({
  success : function (results) {
   var ParseHabit = Parse.Object.extend("Habit");
   var Habit = new ParseHabit();
   var weekArray = [0, 0, 0, 0, 0, 0, 0];
   var frequency = 0;
   var userObject = results[0];
   var userName = userObject.get('username');
   var userId = Parse.User.current().id;
   var icons = '';
   var fileUploadControl;
   var parseFile;
   var file;
   var name;
   var weekdaysSelected = 0;
   var nanFlag = 0;
   var emailAddress = Parse.User.current().getEmail();
   if (document.getElementById('sunday').checked) {
    weekArray[0] = 1;
    weekdaysSelected++;
	Parse.Analytics.track('Add_Habits', {"Days_Selected": "Sun", "User": emailAddress});
   }
   if (document.getElementById('monday').checked) {
    weekArray[1] = 1;
    weekdaysSelected++;
	Parse.Analytics.track('Add_Habits', {"Days_Selected": "Mon", "User": emailAddress});
   }
   if (document.getElementById('tuesday').checked) {
    weekArray[2] = 1;
    weekdaysSelected++;
	Parse.Analytics.track('Add_Habits', {"Days_Selected": "Tue", "User": emailAddress});
   }
   if (document.getElementById('wednesday').checked) {
    weekArray[3] = 1;
    weekdaysSelected++;
	Parse.Analytics.track('Add_Habits', {"Days_Selected": "Wed", "User": emailAddress});
   }
   if (document.getElementById('thursday').checked) {
    weekArray[4] = 1;
    weekdaysSelected++;
	Parse.Analytics.track('Add_Habits', {"Days_Selected": "Thur", "User": emailAddress});
   }
   if (document.getElementById('friday').checked) {
    weekArray[5] = 1;
    weekdaysSelected++;
	Parse.Analytics.track('Add_Habits', {"Days_Selected": "Fri", "User": emailAddress});
   }
   if (document.getElementById('saturday').checked) {
    weekArray[6] = 1;
    weekdaysSelected++;
	Parse.Analytics.track('Add_Habits', {"Days_Selected": "Sat", "User": emailAddress});
   }

   //icon choose or file upload
   if (document.getElementById('icon1').className == "icon active") {
    icons = '/img/sleep.jpg';
	Parse.Analytics.track('Add_Habits', {"Icons": "Default_Icons", "User": emailAddress});
   } else if (document.getElementById('icon2').className == "icon active") {
    icons = '/img/salad.jpg';
	Parse.Analytics.track('Add_Habits', {"Icons": "Default_Icons", "User": emailAddress});
   } else if (document.getElementById('icon3').className == "icon active") {
    icons = '/img/run.jpg';
	Parse.Analytics.track('Add_Habits', {"Icons": "Default_Icons", "User": emailAddress});
   } else if (document.getElementById('icon4').className == "icon active") {
    fileUploadControl = $("#icon4Upload")[0];
    file = fileUploadControl.files[0];
    name = "photo.jpg";
    parseFile = new Parse.File(name, file);
    parseFile.save().then(function () {
     // The file has been saved to Parse.
		Parse.Analytics.track('Add_Habits', {"Icons": "Upload_Icons", "User": emailAddress});
    }, function (error) {
     // The file either could not be read, or could not be saved to Parse.
    });
   } else {
    icons = '/img/no-image.jpg';
	Parse.Analytics.track('Add_Habits', {"Icons": "No_Icons", "User": emailAddress});
   }

   if (document.getElementById('others').value == 0) {
    if (document.getElementById('frequency_one').checked) {
     frequency = 1;
	 Parse.Analytics.track('Add_Habits', {"Frequency": "Default", "User": emailAddress});
    }
    if (document.getElementById('frequency_two').checked) {
     frequency = 2;
	 Parse.Analytics.track('Add_Habits', {"Frequency": "Default", "User": emailAddress});
    }
    if (document.getElementById('frequency_three').checked) {
     frequency = 3;
	 Parse.Analytics.track('Add_Habits', {"Frequency": "Default", "User": emailAddress});
    }
   } else {
    document.getElementById('frequency_one').checked = false;
    document.getElementById('frequency_two').checked = false;
    document.getElementById('frequency_three').checked = false;
    if (isNaN(document.getElementById('others').value)) {
     nanFlag = 1;
    } else {
     frequency = parseInt(document.getElementById('others').value);
	 Parse.Analytics.track('Add_Habits', {"Frequency": "Other_Frequency", "User": emailAddress});
    }
   }

   if (weekdaysSelected == 0 && frequency <= 0) {
    showAlertDialog('Please select your weekly frequency and also input or select your daily frequency');
	Parse.Analytics.track('Error_Add_Habits', {"Error_weekday": "Weekday_Selection", "Error_frequency": "Frequency_Selection", "Error": emailAddress});
   } else if (weekdaysSelected == 0) {
    showAlertDialog('Please select some of the weekly to track your habits.');
	Parse.Analytics.track('Error_Add_Habits', {"Error_weekday": "Weekday_Selection", "Error": emailAddress});
   } else if (nanFlag) {
    showAlertDialog('Please input a number and not characters for your daily frequency.');
	Parse.Analytics.track('Error_Add_Habits', {"Error_frequency": "Frequency_Selection", "Error": emailAddress});
   } else if (frequency <= 0) {
    showAlertDialog('Please input or select your daily frequency to a value greater than 0.');
	Parse.Analytics.track('Error_Add_Habits', {"Error_frequency": "Frequency_Selection", "Error": emailAddress});
   } else {
    Habit.save({
     Title : document.getElementById("title").value,
     day : weekArray,
     freq : frequency,
     username : userName,
     user : userId,
     icon : icons,
     iconUpload : parseFile,
     successCount : 0,
     currentStreak : 0,
     bestStreak : 0,
     timesCompleted : 0,
     habitTotal : 0,
     streaksUpdatedAt : new Date(Date.UTC(1970, 1, 1)),
     edited : false,
     completed : false
    }, {
     success : function (Habit) {
      // The object was saved successfully.
	  var emailAddress1 = Parse.User.current().getEmail();
	  Parse.Analytics.track('Add_Habits', {"User": emailAddress1});
      window.location = "list.html";
     },
     error : function (Habit, error) {
      // The save failed.
      // error is a Parse.Error with an error code and message.
      showAlertDialog("Error: " + error.code + " " + error.message);
     }
    });
   }
  },
  error : function (error) {
   showAlertDialog("Error: " + error.code + " " + error.message);
  }
 });
}

function cancelAddHabit() {
 var emailAddress = Parse.User.current().getEmail();
 Parse.Analytics.track('Add_Habits', {"Cancel": emailAddress});
 window.location = "./list.html";
}
