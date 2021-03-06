(function() {
  angular
    .module('root')
    .factory('User', ['$firebaseArray', 'Validation', User]);

  function User($firebaseArray, Validation) {
    var user = {};
    var ref = new Firebase('https://moviebook-58adb.firebaseio.com');
    var users = $firebaseArray(ref.child('users'));

    user.all = users;
    user.register = function(userInfo) {
      var valid = Validation.matchPassword(userInfo.password, userInfo.passwordConfirm) === 'valid' &&
                  Validation.validPassword(userInfo.password) === 'valid';

      if (valid) {
        users.$add({
          email: userInfo.email,
          password: userInfo.password,
          createdAt: new Date().getTime()
        });
        this.email = '';
        this.password = '';
      }
    };

    user.checkForMember = function(email, password) {
      var member;

      for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          member = users[i].email;
        }
      }
      return member;
    }

    return user;
  }
})();
