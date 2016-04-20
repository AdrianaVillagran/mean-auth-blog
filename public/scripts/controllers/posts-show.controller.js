PostsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.post = {};
  get();

  function get() {
    $http({
      method: 'GET',
      url: '/api/posts/' + $routeParams.id
    }).then(function onSuccess(response) {
      console.log(response.data);
      vm.post = response.data;
    },
    function onError(response) {
      console.log('error showing post', response);
    });
  }


}
