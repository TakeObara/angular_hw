angular.module('todoApp', [])
  .controller('TodoListController', function() {
  	//変数定義---------------------------------------------------------------------
    var todoList = this;
    var elementAddDialog=document.getElementById("add-dialog");
    var elementRemoveDialog=document.getElementById("remove-dialog");
	var elementDialogBackground=document.getElementById("dialog-background");
    
    todoList.todos = [
      {text:'first_task', done:true},
      {text:'second_task', done:false}];

     //関数定義---------------------------------------------------------------------

     //addを押したときadd用のダイアログを表示する
    todoList.openAddDialog=function(){   	
		elementAddDialog.className="dialog";
		elementDialogBackground.className="dialog-background";
    };

    //removeを押したときremove用のダイアログを表示する
    todoList.openRemoveDialog=function(){
    	elementRemoveDialog.className="dialog";
    	elementDialogBackground.className="dialog-background";
    };

    //add用のダイアログを閉じる
    todoList.closeAddDialog=function(){
    	elementAddDialog.className="remove";
    	elementDialogBackground.className="remove";
    };

    //close用のダイアログを閉じる
    todoList.closeRemoveDialog=function(){
    	elementRemoveDialog.className="remove";    	
    	elementDialogBackground.className="remove";
    };

    //todoを追加する処理
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
      todoList.closeAddDialog();
    };

  //todoを削除する処理
	todoList.removeTodo=function(){
  		var oldTodos = todoList.todos;
      	todoList.todos = [];
      	angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      	});
      	todoList.closeRemoveDialog();
  	};
  //-----------------------------------------------------------------------
});
