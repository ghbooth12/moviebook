(function() {
  angular
    .module('root')
    .controller('SignBtnCtrl', ['PopUp', 'UserAuth', SignBtnCtrl]);

  function SignBtnCtrl(PopUp, UserAuth) {
    this.registerUser = PopUp.registerUser;
    this.userAuth = UserAuth;
  }
})();
