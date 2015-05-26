angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaToast) {
    function alertDismissed() {

    }

    $scope.iosAlert = function() {
        navigator.notification.alert(
            'You are the winner!',  // message
            alertDismissed,         // callback
            'Game Over',            // title
            'Done'                  // buttonName
        );
    };

    function onConfirm (buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }


    $scope.iosConfirm = function() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']     // buttonLabels
        );
    };


    $scope.toastPopup = function() {
        $cordovaToast
        .show('Here is a message', 'long', 'center')
        .then(function(success) {
          // success
        }, function (error) {
          // error
        });
    };

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
