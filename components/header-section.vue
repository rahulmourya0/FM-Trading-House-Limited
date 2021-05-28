<template>
	<div>
		<div class="header-section">
			<div class="container">
				<b-navbar toggleable="md" class="">
					<!-- logo -->

					<!-- Just an image -->
					<b-navbar variant="faded" type="light">
						<b-navbar-brand href="#">
							<img
								src="@/assets/fm-logo/Logo.svg"
								class="img-fluid header-logo"
								alt="cletide"
							/>
						</b-navbar-brand>
					</b-navbar>

					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav class="text-center ml-auto">
							<nuxt-link class="nav-link" to="/">
								<div class="font-12">Home</div></nuxt-link
							>
							<nuxt-link class="nav-link" to="/about-us">
								<div class="font-12">About Us</div></nuxt-link
							>
							<nuxt-link class="nav-link" to="/brands">
								<div class="font-12">Brands</div></nuxt-link
							>
							<nuxt-link class="nav-link" to="/contact-us">
								<div class="font-12">Contact Us</div></nuxt-link
							>
						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import "@/assets/scss/variable.scss";

.header-section {
	// border-bottom: 1px solid #373738 !important;
	position: fixed;
	width: 100%;
	z-index: 9999;
	box-shadow: rgba(0, 0, 0, 0.12) 0 10px 60px;
	background-color: rgba(255, 255, 255, 0.97);
	opacity: 1;
	@media (max-width: 400px) {
		.header-logo {
			height: 30px;
			float: left;
			display: block;
		}
	}

	.header-logo {
		float: left;
		height: 50px;
	}
	.navbar {
		//padding:5px;
		// background-color: transparent;
		text-transform: uppercase;
		font-weight: 600;
		.navbar-nav {
			margin-left: auto !important;
			margin-right: auto !important;
		}
		.nuxt-link-exact-active.nuxt-link-active {
			color: #902a00;
			font-weight: 600;
		}
		.nav-link {
			color: $black;
			padding: 0px 20px;
			font-weight: 600;
		}
		.nav-link:hover {
			color: #902a00;
			font-weight: 600;
		}
		.link-section {
			border-right: 1px solid $black;
		}
	}
}
.banner-image {
	width: 100%;
}

.font-12 {
	font-family: "Roboto", sans-serif;
	font-size: 12px;
}
.col-lg-4,
.col-md-12,
col-sm-12 {
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
}

@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&Roboto:wght@400;900&display=swap");
@import "@/assets/scss/mobile.scss";
</style>
