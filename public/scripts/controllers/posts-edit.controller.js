PostsEditController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsEditController ($location, $http, $routeParams) {
  var vm = this;
  vm.post = {}; // form data


  vm.update = function() {
    $http({
      method: 'PUT',
      url: '/api/posts/' + $routeParams.id,
      data: vm.post
    }).then(
      function onEditSuccess(response) {
        console.log('success editing post:', response.data);
      },
      function onEditError(response) {
        console.log('error editing post:', response);
      });
  };



}
