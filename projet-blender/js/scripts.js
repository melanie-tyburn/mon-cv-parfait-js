$(document).ready(function(){
	$(document).on('click',function(){
			$('#audio1')[0].play();
			
		});
	
		setTimeout(function() {
			$('.msg1').css('display','none');
			$("#et0").css('display','none');
			$(".msg2").css('display','block');
			$("#et1").css('display','flex');
		},10000);
		setTimeout(function() {
			$('#myModal3').css('display','none');
			$('.msg2').css('display','none');
			$(".msg3").css('display','block');
			$("#et1").css('display','none');
			$("#et2").css('display','flex');
			$("#et2").css('flex-wrap','wrap');
		},30000);
		setTimeout(function() {
			$('#myModal5').css('display','none');
			$('#myModal5-1').css('display','none');
			$('#myModal5-2').css('display','none');
			$('.msg3').css('display','none');
			$(".msg4").css('display','block');
			$("#et2").css('display','none');
			$("#et3").css('display','flex');
		},50000);
		setTimeout(function() {
			$('#myModal7').css('display','none');
			$('.msg4').css('display','none');
			$(".msg5").css('display','block');
			$("#et3").css('display','none');
			$("#et4").css('display','flex');
		},70000);
		setTimeout(function() {
			$('#myModal10').css('display','none');
			$('.msg5').css('display','none');
			$(".msg6").css('display','block');
			$("#et4").css('display','none');
			$("#et5").css('display','flex');
		},90000);
		setTimeout(function() {
			$('#myModal12').css('display','none');
			$('#myModal13').css('display','block');
			$('.close').on('click',function(){
				$('#myModal13').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal13').css('display','none');
			});
			$('.msg6').css('display','none');
			$(".msg7").css('display','block');
			$("#et5").css('display','none');
			$("#recommencer").css('display','block');
			$("#sortir").css('display','block');
		},110000);
		
		$('#recommencer').on('click',function(){
			location.reload();
		});
		
		//apparition des modales
		
		setTimeout(function() {
			$('#myModal').css('display','block');	
			$('.close').on('click',function(){
				$('#myModal').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal').css('display','none');
			});
		},13000);
		
		setTimeout(function() {
			$('#myModal').css('display','none');
			$('#myModal2').css('display','block');	
			$('.close').on('click',function(){
				$('#myModal2').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal2').css('display','none');
			});
		},19000);
		
		setTimeout(function() {
			$('#myModal2').css('display','none');
			$('#myModal3').css('display','block');	
			$('.close').on('click',function(){
				$('#myModal3').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal3').css('display','none');
			});
		},24000);

		setTimeout(function() {
			$('#myModal4').css('display','block');	
			$('.close').on('click',function(){
				$('#myModal4').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal4').css('display','none');
			});
		},33000);
		
		setTimeout(function() {
			$('#myModal4').css('display','none');
			$('#myModal5').css('display','block');	
			$('.close').on('click',function(){
				$('#myModal5').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal5').css('display','none');
			});
		},39000);
		
		$('.rep1').on('click',function(){
				$('#myModal5').css('display','none');
				$('#myModal5-1').css('display','block');
		});
		$('.rep2').on('click',function(){
				$('#myModal5').css('display','none');
				$('#myModal5-2').css('display','block');
		});
		$('.close').on('click',function(){
				$('#myModal5-1').css('display','none');
				$('#myModal5-2').css('display','none');
		});
		$('.ok').on('click',function(){
			$('#myModal5-1').css('display','none');
			$('#myModal5-2').css('display','none');
		});
		
		setTimeout(function() {
			$('#myModal6').css('display','block');	
			$('.close').on('click',function(){
				$('#myModal6').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal6').css('display','none');
			});
		},53000);
		
		$('.rep3').on('click',function(){
				$('#myModal6').css('display','none');
				$('#myModal6-1').css('display','block');
		});
		$('.rep4').on('click',function(){
				$('#myModal6').css('display','none');
				$('#myModal6-2').css('display','block');
		});
		$('.close').on('click',function(){
				$('#myModal6-1').css('display','none');
				$('#myModal6-2').css('display','none');
		});
		$('.ok').on('click',function(){
			$('#myModal6-1').css('display','none');
			$('#myModal6-2').css('display','none');
		});
		
		setTimeout(function() {
			$('#myModal6').css('display','none');	
			$('#myModal6-1').css('display','none');
			$('#myModal6-2').css('display','none');
			$('#myModal7').css('display','block');
			$('.close').on('click',function(){
				$('#myModal7').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal7').css('display','none');
			});
		},65000);
		
		setTimeout(function() {
			$('#myModal8').css('display','block');
			$('.close').on('click',function(){
				$('#myModal8').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal8').css('display','none');
			});
		},71000);
		
		setTimeout(function() {
			$('#myModal8').css('display','none');
			$('#myModal9').css('display','block');
			$('.close').on('click',function(){
				$('#myModal9').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal9').css('display','none');
			});
		},80000);
		
		setTimeout(function() {
			$('#myModal9').css('display','none');
			$('#myModal10').css('display','block');
			$('.close').on('click',function(){
				$('#myModal10').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal10').css('display','none');
			});
		},85000);
		
		setTimeout(function() {
			$('#myModal11').css('display','block');
			$('.close').on('click',function(){
				$('#myModal11').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal11').css('display','none');
			});
		},93000);
		
		setTimeout(function() {
			$('#myModal11').css('display','none');
			$('#myModal12').css('display','block');
			$('.close').on('click',function(){
				$('#myModal12').css('display','none');
			});
			$('.ok').on('click',function(){
				$('#myModal12').css('display','none');
			});
		},99000);
		
});