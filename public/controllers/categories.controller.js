/**
 * Created by xiayali on 16/8/8.
 */
angular.module("KB")
.controller('CategoriesCtrl',['$scope','$http',function ($scope,$http) {
    $http.get('/categories').success(function (data) {
        $scope.categories=data;
    })
}])