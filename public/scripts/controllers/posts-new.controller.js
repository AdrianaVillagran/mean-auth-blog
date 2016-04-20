PostsNewController.$inject = ["$location", "$http"]; // minification protection
function PostsNewController ($location, $http) {
  var vm = this;
  vm.post = {}; // form data

vm.create = function () {
  console.log('creating post:', vm.post);
  $http({
      method: 'POST',
      url: '/api/posts',
      data: vm.post
    }).then(function onSuccess(response) {
      console.log(response.data);
      $location.path('/posts/' + response.data._id);
    },
    function onError(response) {
      console.log('error creating post:', response);

    });
  };
}
