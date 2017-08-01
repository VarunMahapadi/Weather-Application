var app = angular.module('myApp', []);
app.controller('LoginCtrl', function($scope) {

    $scope.weatherData = "Varun";
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log("Logged in", firebaseUser);
            $scope.emailText = firebaseUser.email;
            $scope.close();
            $scope.loggedIn = true;
        } else {
            console.log('Not logged in');
            $scope.emailText = "Login to continue";
            $scope.close();
            $scope.loggedIn = false;
            $scope.login();
        };
        //btnLogout.classList.add('hide');
    });

    $scope.init = function() {
        $scope.loggedIn = false;
        $scope.emailText = "Login to continue";
        $scope.currentPage = "Home";
    }

    $scope.login = function() {
        if (!$scope.loggedIn) {
            var dialog = document.querySelector('dialog');
            dialog.showModal();
        }
    }

    $scope.close = function() {

        var dialog = document.querySelector('dialog');
        if (dialog.open)
            dialog.close();
    }

    $scope.signIn = function() {

        firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {

        });
    }

    $scope.logout = function() {
        firebase.auth().signOut();
    }

    $scope.register = function() {

        firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {

        });
    }

    $scope.navigate = function(page) {
        $scope.currentPage = page;
    }
});