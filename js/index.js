var app = angular.module('app', []);

app.controller('controller', controller);

controller.$inject = ['$timeout', '$scope'];

function controller($timeout, $scope) {
  var _this = this;
  
  window.Intercom('boot', {
    app_id: 'jmha3u6f',
    email: 'tobecomebig@gmail.com',
    widget: {
      activator: '#intercom-activator'
    }
  }); 
  
  _this.samples = [];
  for (var i = 0; i < 100; i++) {
    _this.samples.push(i);
  }
}