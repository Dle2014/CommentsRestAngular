(function() {
    var as = angular.module('myApp.controllers', []);
    as.controller('AppCtrl',['$scope', '$rootScope', '$http', 'i18n', '$location', 'apiUrl', function($scope, $rootScope, $http, i18n, $location, apiUrl) {
        $scope.language = function() {
            return i18n.language;
        };
        $scope.setLanguage = function(lang) {
            i18n.setLanguage(lang);
        };
        $scope.activeWhen = function(value) {
            return value ? 'active' : '';
        };

        $scope.path = function() {
            return $location.url();
        };

        $scope.login = function() {
            $scope.$emit('event:loginRequest', $scope.username, $scope.password);
        };

        $scope.logout = function() {
            $rootScope.user = null;
            $scope.username = $scope.password = null;
            $scope.$emit('event:logoutRequest');
        };


    }]);

    as.controller('CommentListCtrl', ['$scope', '$rootScope', '$http', '$location', 'apiUrl', function($scope, $rootScope, $http, $location, apiUrl) {
        var load = function() {
            console.log('call load()...');
            $http.get(apiUrl + '/comments.json')
                    .success(function(data, status, headers, config) {
                        $scope.comments = data;
                        angular.copy($scope.comments, $scope.copy);
                    });
        }

        load();

        $scope.addComment = function() {
            console.log('call addComment');
            $location.path("/new");
        }

        $scope.editComment = function(index) {
            console.log('call editComment');
            $location.path('/edit/' + $scope.comments[index].id);
        }

        $scope.delComment = function(index) {
            console.log('call delComment');
            var todel = $scope.comments[index];
            $http
                    .delete(apiUrl + '/comments/' + todel.id + '.json')
                    .success(function(data, status, headers, config) {
                        load();
                    }).error(function(data, status, headers, config) {
            });
        }

    }]);

    as.controller('NewCommentCtrl', ['$scope', '$rootScope', '$http', '$location', 'apiUrl', function($scope, $rootScope, $http, $location, apiUrl) {

        $scope.comment = {};

        $scope.saveComment = function() {
            console.log('call saveComment');
            $http
                    .post(apiUrl + '/comments.json', $scope.comment)
                    .success(function(data, status, headers, config) {
                        $location.path('/comments');
                    }).error(function(data, status, headers, config) {
            });
        }
    }]);

    as.controller('EditCommentCtrl', ['$scope', '$rootScope', '$http', '$routeParams', '$location', 'apiUrl', function($scope, $rootScope, $http, $routeParams, $location, apiUrl) {

        var load = function() {
            console.log('call load()...');
            $http.get(apiUrl + '/comments/' + $routeParams['id'] + '.json')
                    .success(function(data, status, headers, config) {
                        $scope.comment = data;
                        angular.copy($scope.comment, $scope.copy);
                    });
        }

        load();

        $scope.comment = {};

        $scope.updateComment = function() {
            console.log('call updateComment');
            $http
                    .put(apiUrl + '/comments/' + $scope.comment.id + '.json',  $scope.comment)
                    .success(function(data, status, headers, config) {
                        $location.path('/comments');
                    }).error(function(data, status, headers, config) {
            });
        }
    }]);
}());