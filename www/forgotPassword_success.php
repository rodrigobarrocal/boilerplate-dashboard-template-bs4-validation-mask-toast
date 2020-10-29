<!DOCTYPE html>
<html class="no-js" lang="">

	<head>
		<meta charset="UTF-8">
		<title><?php echo($ini_title['site-title']);?> Recuperação de Senha</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="manifest" href="site.webmanifest">
		<link rel="apple-touch-icon" href="icon.png">
		<link rel="stylesheet" href="assets/css/login.min.css?t=1602794499250">
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
							<h3 class="card-title text-center">Recuperação de Senha</h3>
							<p class="card-text text-center">Tudo Pronto, enviamos um email com as instruções para você recuperar sua senha.</p>
							<a href="index.php" class="btn btn-button-secondary text-theme btn-block">Voltar para o login</a>
						</div>
					</div>
					<!-- /Card -->
				</div>
			</div>
		</div>
		<!-- /Content -->
		<!-- Scripts -->
		<script src="assets/js/login.min.js?t=1602794499250"></script>
		<!-- /Scripts -->
	</body>

</html>
