<?php $ini_title = parse_ini_file($_SERVER["DOCUMENT_ROOT"]."/site.ini"); ?>
<!doctype html>
<html lang="pt_BR">
	<base href="/">

	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title><?php echo($ini_title['site-title']);?> Login</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="manifest" href="site.webmanifest">
		<link rel="apple-touch-icon" href="icon.png">
		<link rel="stylesheet" href="assets/css/login.min.css?t=1602794499285">
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
						<div class="logo text-center"></div>
						<form role="form" class="mb-3" name="login" id="login" method="post" action="dashboard/">
							<input type="hidden" name="type" id="type" value="login">
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
							<div class="form-group">
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"> <i class="fa fa-lock" aria-hidden="true"></i> </span>
									</div>
									<input class="form-control" placeholder="Senha" type="password" name="senha" id="senha">
								</div>
							</div>
							<div class="text-center">
								<button type="submit" class="btn btn-button-primary btn-block">Entrar</button>
							</div>
						</form>
						<ul class="list-unstyled">
							<li><a href="forgotPassword.php" class="text-dark small">Esqueci minha senha!</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<?php include 'template/footer.php' ?>
		<!-- /Content -->
		<!-- Scripts -->
		<script>
			//Exibe o erro e .
			setTimeout(function () {
				$('#toast-container').fadeOut('fast');
			}, 5000);

		</script>
		<script src="/assets/js/login.min.js?t=1602794499285"></script>

	</body>

</html>
