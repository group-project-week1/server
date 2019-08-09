function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

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

  function githubSignIn() {
      $.ajax({
         url: 'http://localhost:3000/user/github-sign-in',
         type:'GET'
      })
        .done((getUrl) => {
            console.log(getUrl)
            window.location.href = getUrl
        })
  }
