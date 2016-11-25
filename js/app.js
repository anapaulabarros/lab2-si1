angular.module('ToDo',[]).
	controller('todoController', ['$scope', function($scope){
	
		$scope.todos = [
            {'title':'Pedalar por 30min e correr 1 Km', 'done':false},         
            {'title': 'Estudar 1h30min para cada disciplina', 'done':false},
            {'title': 'Carregar o celular', 'done':false},
		];
	
		$scope.addTodo = function(){
			$scope.todos.push({'title':$scope.newTodo, 'done':false});
			$scope.newTodo = '';
		}
		$scope.clearCompleted = function(){
			$scope.todos = $scope.todos.filter(function(item){
				return !item.done;
			})
		}
		$scope.removeToDo = function() {
			$scope.todos.splice(this.$index, 1);
		}
		
		$scope.pendingToDo = function () {
			var count = 0;
			angular.forEach($scope.todos, function (todo) {
				count += todo.done ? 0 : 1;
			});
			return count;
		};
	}]);