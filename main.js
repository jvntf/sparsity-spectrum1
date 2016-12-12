$(document).ready(function(){
	// $('.content').toggleClass("open");
	// $('.content').toggleClass("open");

	var arr=[]
	while(arr.length<10){
		var rand = Math.ceil(Math.random()*100)
		if(arr.indexOf(rand)>-1) continue;
		arr[arr.length]=rand;
	}
	arr.sort(function(a, b){return a-b});
	console.log(arr);
	var j=0;


	for(i=0;i<100;i++)
	{
		var box = document.createElement('DIV');
		box.setAttribute("class","box");
		if(i==arr[j])
		{
			console.log("hello");
			//box.setAttribute("border-left","0.1vw solid black");
			box.className+=" control";
			box.setAttribute("move",j);
			box.style.backgroundColor="#444444";
			j++
		}
		//console.log(box);
		$('#grid').append(box);
	};


	var arr2=[]
	while(arr2.length<100){
		var rand = Math.ceil(Math.random()*255)
		if(arr2.indexOf(rand)>-1) continue;
		arr2[arr2.length]=rand;
	}
	arr2.sort(function(a, b){return a-b});

	console.log(arr2);
	var k=0;
	for(i=0;i<255;i++)
	{
		var box = document.createElement('DIV');
		box.setAttribute("class","box");
		if(i==arr2[k])
		{
			console.log(k);
			//box.setAttribute("border-left","0.1vw solid black");
			// box.className+=" control";
			// box.setAttribute("move",j);
			box.style.backgroundColor="#444444";
			k++;
		}
		//console.log(box);
		$('#load').append(box);
	};



	var nodes=document.getElementById('load').children;
	console.log(nodes);
	var terminate = false;

		
	var loading = window.setInterval(change, 100);
	$('.projTitle').on("click",function(){
		console.log("yo");
		clearInterval(loading);
		$('#load').fadeOut();
		$('#load').css("display","none");
		$('#title').css({"opacity":0.3});
		

	});



	function change(){

		var arr3=[]
		while(arr3.length<100){
			var rand = Math.ceil(Math.random()*255)
			if(arr3.indexOf(rand)>-1) continue;
			arr3[arr3.length]=rand;
		}
		arr3.sort(function(a, b){return a-b});

		var k=0;
		// console.log("top of loop");
		// console.log(arr3+"'");
		for(i=0;i<255;i++)
		{
			//var load = document.getElementById('load');
			

			if(i==arr3[k])
			{
		
				//box.setAttribute("border-left","0.1vw solid black");
				// box.className+=" control";
				// box.setAttribute("move",j);
				nodes[i].style.backgroundColor="#444444";
				//console.log(nodes[i]);
				k++;
			}
			else{
				nodes[i].style.backgroundColor="#bbbbbb";

			}
		
		};

	}

	
// for(i=1; i<11;i++)
// {
// 	$('#operation1').append('<img id="slide" src="images/operation_1/operation_1-'+i+'.png"/>');

// }


	
	$('#footer').click(function(){
		$('#grid').fadeIn();
		$('#blurb').fadeIn();
	});






	// $('#rect').mouseover(function(){
	// 	$('#rect').animate({
	// 		height:"200",
	// 		width:"200"
	// 	});
	// });

	// $('#rect').mouseout(function(){
	// 	$('#rect').animate({
	// 		height:"100",
	// 		width:"100"
	// 	});
	// });

var descriptions;


	$('#op1').click(function(){
		console.log("hello");
		$('.content').fadeOut().removeClass("open");
		$('#operation1').fadeIn().toggleClass("open");
		descriptions=op1_desc;

	});
	$('#op2').click(function(){
		$('.content').fadeOut().removeClass("open");
		$('#operation2').fadeIn().toggleClass("open");
		descriptions=op2_desc;
	});
	$('#op3').click(function(){
		$('.content').fadeOut().removeClass("open");
		$('#operation3').fadeIn().toggleClass("open");
		descriptions=op3_desc;
	});
	$('#op4').click(function(){
		$('.content').fadeOut().removeClass("open");
		$('#operation4').fadeIn().toggleClass("open");
		descriptions=op4_desc;
	});



	$('.control').click(function(event){
		//console.log(event.target);
		var moveTo = event.target.getAttribute("move");
		// var src= '<img src=/images/operation_1/operation_1-1.png/>';
		// console.log(src);
		// $('#slide').html(src);

		// $('#blurb').fadeOut();
		console.log(moveTo);
		 $('.open').animate({
			left: -35.2*(moveTo)+"vw",
		});

		 $('#blurb').animate({
		 	backgroundColor:"rgba(0,0,0,0)"
		 }).html("");
	})
	.hoverIntent(function(e){
		console.log(e.target);
		$('#blurb')
		.html("<p>"+descriptions[e.target.getAttribute("move")][0]+"</p>")
		.animate({
			backgroundColor:"rgba(0,0,0,1)",
		});
		$('#blurb p').animate({opacity:"1"},1000);

	},function(){
		$('#blurb').animate({
			backgroundColor:"rgba(0,0,0,0)"
		}).html("");
	});


console.log(op1_desc);
});



	
