<template>
	<div class="footer-section mt-5">
		<div class="container">
			<div class="footer-content text-center">
				<!-- <div>
          Cletide Limited - 73 Derby Road, Croydon, CR0 3SF
        </div>
        <div>
          Tel:
          <a href="tel:+44 7818 668 020" class="text-white"> +44 7818 668 020</a>
        </div>
        <div>
          © 2021 Cletide Limited. All Rights Reserved.
        </div> -->

				<div class="row">
					<div class="col-md-6 col-sm-12 text-left">
						<div class="footer-logo">
							<img src="@/assets/fm-logo/Logo.svg" alt="footer-logo" />
						</div>
						<!-- <div class="">FM Trading House Limited</div> -->
					</div>
					<div class="col-md-6 col-sm-12">
						<!-- <div class="footer-services"> -->
						<!-- <div class="text-left font-22 pb-3">Our Services</div> -->
						<!-- <div class="row"> -->
						<div class="footer-address">
							<div>
								<p>
									FM Trading House Limited No.3, 17/F, Strand 50<br />
									50 Bonham Strand, Sheung Wan<br />
									Hong Kong
								</p>
							</div>
						</div>
						<!-- </div> -->
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
		<div class="copyright-section">
			<div class="row">
				<div class="col-md-12 col-sm-12 text-center pt-3">
					<p>© Copyright 2021 All Rights Reserved</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import "~assets/scss/variable";
.footer-section {
	padding: 20px 0 0 0;
	background: $black;
	font-weight: 500;
	border-top: 1px solid $black;
	color: $white;
	font-size: 0.75rem;
	line-height: 200%;
}

.service-border {
	border-right: 1px solid $white;
}
@media only screen and (max-width: 767px) {
	.footer-services {
		padding-top: 20px;
	}
	.footer-logo {
		text-align: center;
	}
	.footer-address p {
		text-align: center;
	}
}

.footer-address p {
	text-align: center;
	font-size: 14px !important;
}
.footer-logo {
	text-align: center;
}

// .copyright-section {
// 	background-color: #fff;
// 	color: #000;
// 	margin-top: 20px;
// }

//  .footer-address{
//     text-align: left;
//   }
</style>
