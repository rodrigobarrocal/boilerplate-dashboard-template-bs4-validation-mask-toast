(function ($) {
	("use strict");
	// console.log("LOGIN JS");
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
})(jQuery);
var FormLogin = (function () {
	"use strict";
	$("#ispb").mask("00000000");

	var validator = $("#login").validate({
		validClass: "is-valid",
		errorClass: "is-invalid",
		errorElement: "div",
		highlight: function (element, errorClass, validClass) {
			// console.log("highlight");
			$(element).addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function (element, errorClass, validClass) {
			// console.log("unhighlight");
			$(element).addClass(validClass).removeClass(errorClass);
		},
		errorPlacement: function (error, element) {
			// console.log("element", element);
			// console.log("error", error);
			error.addClass("invalid-feedback");
			element.after(error);
		},
		rules: {
			ispb: {
				required: true,
				minlength: 8,
			},
			login: {
				required: true,
			},
			senha: {
				required: true,
				minlength: 6,
			},
		},
		messages: {
			ispb: {
				required: "Preencha com ISPB, normalmente é o 8 primeiros digitos do CNPJ",
				pattern: "Não parace ser um ISPB",
			},
			login: {
				required: "Preencha com seu Login",
			},
			senha: {
				required: "Preencha com sua Senha",
			},
		},
		submitHandler: function (form) {
			// fake login primiro acesso =====================
			// if (sessionStorage.getItem('first')) {
			// 	$(form).attr('action', 'main.php');
			// } else {
			// 	sessionStorage.setItem('first', true);
			// }
			// to remove =====================================
			form.submit();
		},
	});
})();

var FormForgotPassword = (function () {
	"use strict";
	$(document).ready(function () {
		$("#cnpj").inputmask("99.999.999/9999-99");
		var validator = $("#forgotPassword").validate({
			validClass: "is-valid",
			errorClass: "is-invalid",
			errorElement: "div",
			highlight: function (element, errorClass, validClass) {
				console.log("highlight");
				$(element).addClass(errorClass).removeClass(validClass);
			},
			unhighlight: function (element, errorClass, validClass) {
				console.log("unhighlight");
				$(element).addClass(validClass).removeClass(errorClass);
			},
			errorPlacement: function (error, element) {
				console.log("element", element);
				console.log("error", error);
				error.addClass("invalid-feedback");
				element.after(error);
			},
			rules: {
				ispb: {
					required: true,
					minlength: 8,
				},
				login: {
					required: true,
				},
			},
			messages: {
				ispb: {
					required: "Preencha com ISPB, normalmente é o 8 primeiros digitos do CNPJ",
					pattern: "Não parace ser um ISPB",
				},
				login: {
					required: "Preencha com seu Login",
				},
			},
			submitHandler: function (form) {
				form.submit();
			},
		});
	});
})();
