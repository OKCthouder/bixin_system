$(function(){
	$('#log_a').click(function(){
		$('#log').dialog('open');
	});

	$('#log').dialog({
		autoOpen : false,
		modal : true,
		resizable : false,
		width : 360,
		height : 280,
		show: true,
		hide: true,
		title:'用户登录',
		closeText:'关闭',
		buttons : {
		'提交' : function () {
			$(this).submit();
		}},
	});

	$('#log').validate({

		submitHandler : function (form) {
			$('form').ajaxSubmit({
				url:'add.php',
				type:'POST',
				beforeSubmit : function (formData, jqForm, options) {
					//$('#loading').dialog('open');
					$('#log').dialog('widget').find('button').eq(1).button('disable');
					setTimeout(function(){
						$('#loading').dialog('close');
					},1500);
				},

				success:function(responseText,statusText){
					alert('111');
					$('#log').resetForm();
					/*$('#reg').dialog('widget').find('button').eq(1).button('enable');
					if (responseText) {
						$('#loading').html('数据提交成功...');
						setTimeout(function () {
							$('#loading').dialog('close');
							$('#loading').html('数据交互中...');
							$('#reg').dialog('close');
							$('#reg').resetForm();
							$('#reg span.star').html('*').removeClass('success');
						}, 1000);
					}*/
				},

				error : function (event, errorText, errorType) { //错误时调用
					alert(errorText + errorType);
				},
			});
		},

	});

	$('#log').buttonset();
	$('#log input[title]').tooltip();

});