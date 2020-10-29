<?php

if (!isset($_SESSION)) {
    session_start();
}

if(empty($_SESSION)){
    header("Location: ../index.php"); exit;
}

?>

<ul class="navbar-nav ml-auto">
	<div class="topbar-divider d-none d-sm-block"></div>
	<!-- Nav Item - User Information -->
	<li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle" href="#" id="userDropdown" data-toggle="dropdown">
        <?php echo $_SESSION['nomeUsuario']; ?>
		</a>
		<!-- Dropdown - User Information -->
		<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in">
            <?php if((int)$_SESSION['idPerfil'] !== 3) {?>
                <a class="dropdown-item" href="users-detail.php?id=<?php echo $_SESSION['idUsuarioPJ']; ?>">
    				<i class="fas fa-user fa-sm fa-fw mr-2"></i> Dados
    			</a>
            <?php } ?>
			<a class="dropdown-item" href="../../logout.php" data-toggle="modal" data-target="#logoutModal">
				<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i> Sair
			</a>
		</div>
	</li>
</ul>
