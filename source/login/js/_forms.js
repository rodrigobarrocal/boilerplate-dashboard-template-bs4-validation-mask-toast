var FormControl = (function () {
	"use strict";
	// console.log("FormControl");
	// Variables
	var $input = $(".form-control");

	// Methods
	function init($this) {
		$this
			.on("focus blur", function (e) {
				$(this)
					.parents(".form-group")
					.toggleClass("infocus", e.type === "focus" || this.value.length > 0);
			})
			.trigger("blur");
	}
	// Events
	if ($input.length) {
		init($input);
	}
})();

(function ($) {
	// console.debug("Toastr Validation");
	//
	toastr.options = {
		closeButton: false,
		debug: false,
		newestOnTop: false,
		progressBar: false,
		positionClass: "toast-top-right",
		preventDuplicates: false,
		onclick: null,
		showDuration: "500",
		hideDuration: "500",
		timeOut: "7500",
		extendedTimeOut: "2500",
		showEasing: "swing",
		hideEasing: "linear",
		showMethod: "fadeIn",
		hideMethod: "fadeOut",
	};
	//

	$.validator.methods.email = function (value, element) {
		// console.log(value);
		return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
	};
	$.validator.methods.telefone = function (value, element) {
		return this.optional(element) || /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/.test(value);
	};
	$.validator.methods.cpf = function (cpf, element) {
		cpf = cpf.replace(/[^\d]+/g, "");
		if (cpf == "") return false;
		// Elimina CPFs invalidos conhecidos
		if (
			cpf.length != 11 ||
			cpf == "00000000000" ||
			cpf == "11111111111" ||
			cpf == "22222222222" ||
			cpf == "33333333333" ||
			cpf == "44444444444" ||
			cpf == "55555555555" ||
			cpf == "66666666666" ||
			cpf == "77777777777" ||
			cpf == "88888888888" ||
			cpf == "99999999999"
		)
			return false;
		// Valida 1o digito
		var add = 0;
		for (var i = 0; i < 9; i++) {
			add += parseInt(cpf.charAt(i)) * (10 - i);
		}
		var rev = 11 - (add % 11);
		if (rev == 10 || rev == 11) {
			rev = 0;
		}
		if (rev != parseInt(cpf.charAt(9))) {
			return false;
		}
		// Valida 2o digito
		add = 0;
		for (i = 0; i < 10; i++) {
			add += parseInt(cpf.charAt(i)) * (11 - i);
		}
		rev = 11 - (add % 11);
		if (rev == 10 || rev == 11) {
			rev = 0;
		}
		if (rev != parseInt(cpf.charAt(10))) {
			return false;
		}
		return true;
	};
	$.validator.methods.cnpj = function (cnpj, element) {
		// console.log(cnpj);
		cnpj = cnpj.replace(/[^\d]+/g, "");
		if (cnpj == "") return false;
		if (cnpj.length != 14) return false;
		if (
			cnpj == "00000000000000" ||
			cnpj == "11111111111111" ||
			cnpj == "22222222222222" ||
			cnpj == "33333333333333" ||
			cnpj == "44444444444444" ||
			cnpj == "55555555555555" ||
			cnpj == "66666666666666" ||
			cnpj == "77777777777777" ||
			cnpj == "88888888888888" ||
			cnpj == "99999999999999"
		) {
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
		var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
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
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado != digitos.charAt(1)) {
			return false;
		}
		return true;
	};
	$.validator.methods.cep = function (value, element) {
		return this.optional(element) || /^[0-9]{8}$/.test(value);
	};
})(jQuery);
