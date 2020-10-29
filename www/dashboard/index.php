<!DOCTYPE html>
<html class="no-js" lang="">
	<base href="/dashboard/">

	<head>
		<meta charset="UTF-8">
		<title><?php echo($ini_title['site-title']);?> Dashboard</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="apple-touch-icon" href="icon.png">
		<link rel="stylesheet" href="assets/css/dashboard.min.css?t=1602794499298">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<meta http-equiv="Content-Language" content="pt-br">
		<meta name="theme-color" content="#fafafa">
	</head>

	<body id="wrapper">
		<div id="wrapper-top">
			<nav class="navbar navbar-top">
				<a class="navbar-brand" href="/dashboard/"></a>
				<button class="" type="button" id="sidebarToggle">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>

				<!-- <h5 class="topbar-title"><span class="brand"><i class="icon fa fa-shield-alt fa-fw" aria-hidden="true"></i> LOGO</span></h5> -->
			</nav>
		</div>
		<div id="wrapper-middle">
			<!-- Sidebar -->
			<?php include_once "template/sidebar-nav.php" ?>
			<!-- /Sidebar -->
			<!-- Main -->
			<div id="wrapper-main">
				<div class="row h-100">
					<div class="col">
						<div class="card h-100">
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<table class="table list-group-flush table-bordered table-striped table-sm">
									<thead>
										<tr>
											<th>HEAD</th>
											<th>STATIC</th>
											<th>SELECT</th>
											<th>CHECK</th>
											<th>RADIO</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">1</th>
											<td class="p-0">
												<div class="input-group">
													<select class="border-0 custom-select mb-0" id="inputGroupSelect01">
														<option selected>Choose...</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
												</div>
											</td>
											<td>
												Value
											</td>
											<td class="text-left">
												<div class="custom-control custom-checkbox custom-control-inline">
													<input type="checkbox" class="custom-control-input" id="1check">
													<label class="custom-control-label" for="1check">Check</label>
												</div>
											</td>
											<td class="text-left">
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" id="1sim" name="radio['1']" class="custom-control-input">
													<label class="custom-control-label" for="1sim">Sim</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" id="1nao" name="radio['1']" class="custom-control-input">
													<label class="custom-control-label" for="1nao">Não</label>
												</div>

											</td>
										</tr>
										<tr>
											<th scope="row">1</th>
											<td class="p-0">
												<div class="input-group">
													<select class="border-0 custom-select mb-0" id="inputGroupSelect01">
														<option selected>Choose...</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</select>
												</div>
											</td>
											<td>
												Value
											</td>
											<td class="text-left">
												<div class="custom-control custom-checkbox custom-control-inline">
													<input type="checkbox" class="custom-control-input" id="2check">
													<label class="custom-control-label" for="2check">Check</label>
												</div>
											</td>
											<td class="text-left">
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" id="2sim" name="radio['2']" class="custom-control-input">
													<label class="custom-control-label" for="2sim">Sim</label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" id="2nao" name="radio['2']" class="custom-control-input">
													<label class="custom-control-label" for="2nao">Não</label>
												</div>

											</td>
										</tr>
									</tbody>
								</table>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
				</div>


			</div>
		</div>
		<!-- /Main -->
		</div>
		<!-- Scripts -->
		<script>
			var activenav = "anothernavitem";
			// var activenav = "somenavitem";

		</script>
		<script src="assets/js/dashboard.min.js?t=1602794499298"></script>
		<script>


		</script>
	</body>

</html>
