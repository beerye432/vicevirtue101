function toggleForms() {
  var signup_form = document.getElementById("signupForm");
  var login_form = document.getElementById("loginForm");
  var date = new Date();
  var month = date.getUTCMonth() + 1; //months from 1-12
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  var newdate = month + "/" + day + "/" + year;
  signup_form.style.display = (signup_form.style.display == "none") ? "block" : "none";
  login_form.style.display = (login_form.style.display == "none") ? "block" : "none";
  Parse.Analytics.track('SignUpCancel', {"Date": newdate});
}

function checkBrowser() {
	uagent = navigator.userAgent;
	isIE = /Internet Explorer/.test(uagent);
	if(isIE) alert("We're sorry, but we currently do not support IE due to particularities with our backend. " +
						"Please visit in another popular browser such as Firefox, Chrome, Safari or Opera to use our app.");
}

function login(evt) {
  evt.preventDefault(); // prevent form submission
  Parse.initialize("V6NcQkeFHBu6SOcSYJptWFgKzgOiuc2ywEXnmL31", "Xw3yYjXIFL6tVLwN3vhmPJMYLmd4AiJI3mRUjl1l");
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;
  // Find the associated username using the provided email
  var query = new Parse.Query(Parse.User);
  var dimensions;
  var date = new Date();
  var month = date.getUTCMonth() + 1; //months from 1-12
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  var newdate = month + "/" + day + "/" + year;
  query.equalTo("email", email);
  query.find({
    success : function (results) {
      // results.length should be 1 since emails are unique
      var username = (results[0]) ? results[0].get("username") : null;
      // Login using found username
      Parse.User.logIn(username, password, {
        success : function (user) {
		  dimensions = {"E-mail": email, "Date": newdate};
		  Parse.Analytics.track('Login', dimensions);
          document.getElementById("loginForm").submit();
          location.href = "./list.html";
        },
        error : function (user, error) {
		    dimensions = {"Date": newdate};
		    Parse.Analytics.track('Err_Login', dimensions);
            alert("Error: " + error.message);
        }
      });
    },
    error : function (error) {
      alert("Error:" + error.message);
    }
  });
}

function register(evt) {
  evt.preventDefault(); // prevent form submission
  Parse.initialize("V6NcQkeFHBu6SOcSYJptWFgKzgOiuc2ywEXnmL31", "Xw3yYjXIFL6tVLwN3vhmPJMYLmd4AiJI3mRUjl1l");
  var username = document.getElementById("username").value;
  var password = document.getElementById("signup_password").value;
  var email = document.getElementById("signup_email").value;
  var notification = (document.getElementById("notification").checked) ? true : false;
  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);
  user.set("notification", notification);
  user.set("notitoday", false);
  user.signUp(null, {
    success : function (user) {
	  var date = new Date();
	  var month = date.getUTCMonth() + 1; //months from 1-12
	  var day = date.getUTCDate();
	  var year = date.getUTCFullYear();
	  var newdate = month + "/" + day + "/" + year;
	  Parse.Analytics.track('Sign_Up', {"Date": newdate});
	  dimensions = {"E-mail": email, "Date": newdate};
	  Parse.Analytics.track('Login', dimensions);
      alert("Successfully signed up!");
      document.getElementById("signupForm").submit();
    },
    error : function (user, error) {
	  Parse.Analytics.track('Error_Sign_Up', {"E-mail": email});
      alert("Error: " + error.message);
    }
  });
}
