angular.module("App",[])
	//controller scope-----------------------------------------------------------------------
	.controller("myCtrl",['$scope',function($scope){

		//define variable-----------------------------------------
		
		$scope.hoge="hoge fuga piyo";
		
		//key variable
		var ctrl_key;
		var temp_key;
		var current_place=0;

		//key_code
		var keyEvent={
			KEY_A : 65,
			KEY_E : 69,
		};

		//-------------------------------------------------------
		
		//function----------------------------------------------------------------

		//key_class
		var judgePressedKey={
	        init:function(e){
	            ctrl_key=false;
	            temp_key=0;
	            e.preventDefault();
	        },
	        //if Ctrl is pressed or not
	        isCtrlPressed:function(e){
	            ctrl_key=e.ctrlKey;
	            return ctrl_key;
	        },
	        //if _keyCode is pressed or not
	        isKeyPressed:function(e,_keyCode){
	            temp_key=e.keyCode;
	            if(temp_key==_keyCode){
	                return true;
	            }
	            return false;
	        }
    	};

    	//keydown_function
    	var keydown_action=function(e){
    		//Ctrl
        	if(judgePressedKey.isCtrlPressed(e)){
        		//Ctrl+A
            	if(judgePressedKey.isKeyPressed(e,keyEvent.KEY_A)){
            		//process
            		select_tag_CtrlA();
                	judgePressedKey.init(e);
            	}
            	//Ctrl+E
            	if(judgePressedKey.isKeyPressed(e,keyEvent.KEY_E)){
            		alert("編集権限がありません");
            		//process
            		judgePressedKey.init(e);
            	}
        	}
   		};

		//process if ctrl+A is pressed
		var select_tag_CtrlA=function(){
			//get <p> element
			var elements_p=document.getElementsByTagName("p");
			if(elements_p && elements_p.length > 0 ){//<p> exist;
				if(current_place >= elements_p.length){
					current_place=0;
				}
				highlightText(elements_p[current_place]);
				current_place++;
			}
		};

		//controll Ctrl+A
		var highlightText = function(element) {
			var selection = window.getSelection();
			var range = document.createRange();
			range.selectNodeContents(element);
			selection.removeAllRanges();
			selection.addRange(range);
			var top = element.offsetTop - (window.innerHeight / 2 );
			window.scrollTo( 0, top );
		};

		//key event process
		document.addEventListener("keydown",keydown_action);

		//----------------------------------------------------------------------------------

	}]);

	//---------------------------------------------------------------------------------------------------

