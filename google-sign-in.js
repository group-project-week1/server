function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    const id_token = googleUser.getAuthResponse().id_token;

    $.ajax({
        url: 'http://localhost:3000/user/google-sign-in',
        type: 'POST',
        data: { id_token }
    })
        .done(function(returnedData) {
            localStorage.setItem("token", returnedData.token)
            console.log(returnedData)
            console.log("User sign in")
        })
        .catch(err => {
            console.log(err)
        })
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        localStorage.removeItem('token')
      console.log('User signed out.');
    });
  }
