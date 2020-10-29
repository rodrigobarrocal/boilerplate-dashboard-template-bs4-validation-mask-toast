var FormControl = (function () {
	'use strict';
	console.log("FormControl");
	// Variables
	var $input = $('.form-control');

	// Methods
	function init($this) {
		$this.on('focus blur', function (e) {
			$(this).parents('.form-group').toggleClass('infocus', (e.type === 'focus' || this.value.length > 0));
		}).trigger('blur');
	}
	// Events
	if ($input.length) {
		init($input);
	}
})();

var Valida = (function () {
	$.validator.methods.email = function (value, element) {
		console.log(value);
		return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
	};
	$.validator.methods.telefone = function (value, element) {
		return this.optional(element) || /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/.test(value);
	};
	$.validator.methods.cnpj = function (cnpj, element) {
		console.log(cnpj);
		cnpj = cnpj.replace(/[^\d]+/g, '');
		if (cnpj == '') return false;
		if (cnpj.length != 14)
			return false;
		if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || cnpj == "99999999999999") {
			return false;
		}
		/* Valida DVs */
		var tamanho = cnpj.length - 2;
		var numeros = cnpj.substring(0, tamanho);
		var digitos = cnpj.substring(tamanho);
		var soma = 0;
		var pos = tamanho - 7;
		for (var i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2) {
				pos = 9;
			}
		}
		var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0)) {
			return false;
		}
		tamanho = tamanho + 1;
		numeros = cnpj.substring(0, tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
			soma += numeros.charAt(tamanho - i) * pos--;
			if (pos < 2) {
				pos = 9;
			}
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1)) {
			return false;
		}
		return true;
	};
	$.validator.methods.cep = function (value, element) {
		return this.optional(element) || /^[0-9]{8}$/.test(value);
	};

	$.validator.setDefaults({
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
			error.addClass('invalid-feedback');
			element.after(error);
		},
	});



})();
