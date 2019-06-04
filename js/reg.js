$(function(){

		$('#loading').dialog({
		modal : true,
		autoOpen : false,
		closeOnEscape : false, //按下 esc 无效
		resizable : false,
		draggable : false,
		width : 240,
		height: 80,
	}).parent().parent().find('.ui-widget-header').hide();


	$('#reg_a').click(function(){
		$('#reg').dialog('open');
	});
	$('#reg').dialog({
		autoOpen : false,
		modal : true,
		resizable : false,
		width : 400,
		height : 500,
		show: true,
		hide: true,
		title:'用户注册',
		closeText:'关闭',
		buttons : {
		'提交' : function () {
			$(this).submit();
		}},
	});

	

	$('#reg').validate({

		rules : {
			username : {
				required:true,
				minlength:6,
				remote:{
					url:'php/is_user.php',
					type:'POST',
				}
			},
			pass : {
				required:true,
				minlength:4,
			},
			pass1 : {
				required:true,
				minlength:4,
				equalTo:'#pass',
			},
			email : {
				required:true,
				email:true,
			},
			messages : {
				username : {
					required : "帐号不得为空！",
					minlength : "请最少输入 {0} 位账号！",
					remote:"账号已被占用，请重新输入",
				},
				pass : {
					required:"密码不得为空！",
					minlength:"密码不得少于4位",
				},
				pass1 : {
					required:"密码不得为空！",
					equalTo:"两次密码不一致，请重新输入！",
				},
				email : {
					required:"邮箱不得为空！"
				},
			},
		},

		showErrors : function (errorMap, errorList) {
			var errors = this.numberOfInvalids();
				if (errors > 0) {
					$('#reg').dialog('option', 'height', 20 * errors + 500);
				} 
				else {
				$('#reg').dialog('option', 'height', 500);
				}
				this.defaultShowErrors();
			},

		highlight: function (element, errorClass) {
			$(element).css('border', '1px solid #630');
			},

		unhighlight : function (element, errorClass) {
			$(element).css('border', '1px solid #ccc');
			$(element).parent().find('span').html('&nbsp;').addClass('succ');
			},

		errorLabelContainer : 'ol.reg_error',
			wrapper : 'li',



		submitHandler : function (form) {
			$('form').ajaxSubmit({
				url:'php/add.php',
				type:'POST',
				beforeSubmit : function (formData, jqForm, options) {
					$('#loading').dialog('open');
					$('#reg').dialog('widget').find('button').eq(1).button('disable');
				},

				success:function(responseText, statusText){
					$('#reg').resetForm();
					$('#reg').dialog('widget').find('button').eq(1).button('enable');
					if (1) {
						setTimeout(function () {
							$('#loading').dialog('close');
							$('#loading').html('数据交互中...');
							$('#reg').dialog('close');
							$('#reg').resetForm();
							$('#reg span.star').html('*').removeClass('succ');
							alert('success!');
						}, 1000);
					}
				},

				error : function (event, errorText, errorType) { //错误时调用
					alert(errorText + errorType);
				},
			});
		},




	});



	$('#reg').buttonset();
	$('#reg input[title]').tooltip();
});

