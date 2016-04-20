PostsEditController.$inject = ["$location", "$http", "$routeParams", "UserService"]; // minification protection
function PostsEditController ($location, $http, $routeParams, UserService) {
  var vm = this;
  vm.post = {}; // form data

  var id = $routeParams.id;
  get();

  function get() {

    $http({
      method: 'GET',
      url: '/api/posts/' + id
    }).then(function onSuccess(response) {
      // console.log('get is getting called. user id:', response.data.user._id);

      vm.post = response.data;
    },
    function onError(response) {
      console.log('error showing post', response);
    });
  }

  vm.update = function() {
    $http({
      method: 'PUT',
      url: '/api/posts/' + id,
      data: vm.post
    }).then(
      function onEditSuccess(response) {
        console.log('success editing post:', response);
        $location.path('/posts/' + id);
      },
      function onEditError(response) {
        console.log('error editing post:', response);
      });
  };

  vm.delete = function() {
    $http({
      method: 'DELETE',
      url:'/api/posts/' + id
    }).then(
      function onDeleteSuccess(response) {
        console.log('success deleting post', response);
        $location.path('/posts');
      },
      function onDeleteError(response) {
        console.log('error deleting post', response);
      }
    );
  };

  vm.verifyUser = function() {
    // someCtrl.post.user._id === main.currentUser.user_id;
    console.log('hi');
  };



}
