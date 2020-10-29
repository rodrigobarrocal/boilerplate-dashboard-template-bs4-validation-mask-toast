<nav class="navbar navbar-marketing navbar-expand-xl navbar-full" data-scroll-header>
	<div class="container pr-0">
		<a class="navbar-brand" href="/"><?php echo file_get_contents($_SERVER['DOCUMENT_ROOT']."/assets/images/Logo.svg"); ?></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="mainNavbar">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
					<a class="nav-link main-nav" href="/">inicio</a>
				</li>
				<li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
					<a class="nav-link main-nav" data-scroll href="/blog">blog</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
