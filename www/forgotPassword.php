<!DOCTYPE html>
<html class="no-js" lang="">

	<head>
		<meta charset="UTF-8">
		<title><?php echo($ini_title['site-title']);?> Recuperação de Senha</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="manifest" href="site.webmanifest">
		<link rel="apple-touch-icon" href="icon.png">
		<link rel="stylesheet" href="assets/css/login.min.css?t=1602794499235">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<meta name="theme-color" content="#fafafa">
	</head>

	<body class="bg-light-gray">
		<!-- Content -->
		<div class="container-login">
			<div class="row no-gutters">
				<div class="col-md-7 form-col d-flex justify-content-center align-items-center">
					<!-- Card -->
					<div class="card card-login">
						<div class="logo text-center"><?php echo file_get_contents($_SERVER['DOCUMENT_ROOT']."/assets/images/LogoCornerPIX.svg"); ?></div>
						<div class="card-body mb-2">
							<h3 class="card-title text-dark text-center">Recuperação de Senha</h3>
							<p class="card-text text-dark text-center">Acontece com qualquer um, informe seu Login e o ISPB, que enviaremos um email com instruções para recuperar sua senha.</p>
						</div>
						<form role="form" class="mb-3" name="forgotPassword" id="forgotPassword" action="forgotPassword_success.php" method="post">
							<input type="hidden" name="type" value="forgotpassword">
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"> <i class="fa fa-key" aria-hidden="true"></i> </span>
									</div>
									<input class="form-control" placeholder="ISPB" type="tel" pattern="^([0-9]{8,8})$" maxlength="8" name="ispb" id="ispb">
								</div>
							</div>
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"> <i class="fa fa-user" aria-hidden="true"></i> </span>
									</div>
									<input class="form-control" placeholder="Login" type="text" name="login" id="login">
								</div>
							</div>
							<div class="text-center">
								<button type="submit" class="btn btn-button-primary btn-block">Enviar</button>
								<a href="index.php" class="btn btn-button-secondary text-theme btn-block">Voltar</a>
							</div>
						</form>
					</div>
					<!-- Card -->
				</div>
			</div>
		</div>
		<!-- /Content -->
		<!-- Scripts -->
		<script>
			//Exibe o erro e .
			setTimeout(function () {
				$('#toast-container').fadeOut('fast');
			}, 5000);

		</script>
		<script src="assets/js/login.min.js?t=1602794499235"></script>
		<!-- /Scripts -->
	</body>

</html>
