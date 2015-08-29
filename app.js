angular.module('toDoApp', [])
	.controller('MainCtrl', ['$scope', function($scope){
		$scope.todos = [
			{title: 'practice angular', kind: 'work', created_at: 1440392214138, done: false},
			{title: 'do neda\'s assignment for me', kind: 'health', created_at: 1440291414138, done: true},
			{title: 'hit the gym', kind: 'health', created_at: 1440182814138, done: false}
		];

		$scope.kinds = ['work', 'home', 'family', 'social', 'health'];
		// create a new To Do 
		$scope.addTodo = function(){
			var newTodo = {
				title: $scope.newFormData.title,
				done: false, 
				kind: $scope.newFormData.newKind, 
				created_at: Date.now()

			};
			$scope.todos.push(newTodo);
			$scope.newFormData = "";
		}


		// delete one To Do
		$scope.clearCompleted = function(){
			$scope.todos = $scope.todos.filter(function(item){
				return !item.done
			})
		}




	}])