	$( document ).ready(function() {
		
		var json = []; 
	    
	    refrestList();

	    $("#btn_add").on('click', function(){
	    	if($("#txt_item").val() == '')
	    	{

	    	}
	    	else
	    	{
	    		//add to json array 
	    		var item = {'name': $("#txt_item").val(), 'country': 'USA'}
		    	json.push(item); 
		    	//to json and pass to cookie
		    	//$.removeCookie('wishlist');
				$.cookie("wishlist", JSON.stringify(json), { expires: 7 , path:'/'}); 
				//empty the textbox
				$("#txt_item").val(''); 
		  		refrestList();
	    	}
	    	

	    }); 

	    $(document).keypress(function(e) {
		  if(e.which == 13) {

		   if($("#txt_item").val() == '')
	    	{

	    	}
	    	else
	    	{
	    		//add to json array 
	    		var item = {'name': $("#txt_item").val(), 'country': 'USA'}
		    	json.push(item);  
		    	//to json and pass to cookie
		    	//$.removeCookie('wishlist');
				$.cookie("wishlist", JSON.stringify(json), { expires: 7 , path:'/'}); 
				//empty the textbox
				$("#txt_item").val(''); 
		  		refrestList();
	    	}

		  }
		});

	    function refrestList()
	    {
	    	if($.cookie("wishlist") == null)
	    		$("#shopping_box").hide(); 
		    else
		    {
		    	$("#shopping_box").show(); 
		    	wishlist = $.cookie("wishlist");
		    	if (wishlist.length>1)
		    	{
			    	var parsed = JSON.parse(wishlist);
			  		//empty the ul
			  		$("#shopping_box ul").empty(); 
			  		 //$("#shopping_box ul").append('<li class="title">I Want </li>');
			  		$.each( parsed, function( key, value ) {
					  $("#shopping_box ul").append('<li>' + value.name + '</li>');
					  console.log(value); 
					});	
		    	}

		    }
	    }
	    
	    	

	});