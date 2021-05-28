<template>
	<div class="contact-section pt-90">
		<div class="image-section mb-5">
			<div class="for-desk">
				<div class="image-section-desk">
					<img src="~assets/Events/banner-all.jpg" alt="" class="img-fluid" />
					<span class="banner-text">Contact Us</span>
				</div>
			</div>
			<div class="for-mob">
				<div class="image-section-mob">
					<img src="~assets/Events/banner-all.jpg" alt="" class="img-fluid" />
					<span class="banner-text">Contact Us</span>
				</div>
			</div>
		</div>
		<b-container>
			<div class="contact-content text-center mb-5 text-dark">
				<!-- <div class="sub-heading pb-4 secondary">Please Get In Touch</div> -->

				<div class="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3104.415615192981!2d114.14952721010535!3d22.285824572524856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFM%20Trading%20House%20Limited%20No.3%2C%2017%2FF%2C%20Strand%2050%2050%20Bonham%20Strand%2C%20Sheung%20Wan%20Hong%20Kong!5e0!3m2!1sen!2sin!4v1622095691741!5m2!1sen!2sin"
						width="100%"
						height="400"
						style="border: 0;"
						allowfullscreen=""
						loading="lazy"
					></iframe>
				</div>

				<!-- <div class="row contact-strip">
					<div class="col-md-6 col-sm-12 p-3">
						<div>
							<div class="font-18 font-weight-bold pb-3">
								<img
									src="~assets/images/icons/address.svg"
									alt=""
									width="20px"
								/>
								<span class="secondary">Address:</span>
							</div>
							<div class="font-16">
								FM Trading House Limited <br />No.3, 17/F, Strand 50 <br />50
								Bonham Strand, Sheung Wan <br />Hong Kong
							</div>
						</div>
					</div>

					<div class="col-md-6 col-sm-12 p-3">
						<div class="mt-3">
							<div class="font-18 font-weight-bold pb-3">
								<img src="~assets/images/icons/mail.svg" alt="" width="20px" />

								<span class="secondary">Email Id:</span>
							</div>
							<div class="font-16">
								<a href="mailto:sales@fmtradinghouse.com">
									sales@fmtradinghouse.com</a
								>
							</div>
						</div>
					</div>
				</div> -->

				<div class="row contact-strip">
					<div class="col-md-12 col-sm-12 p-3 strip-border">
						<div>
							<div class="font-18 font-weight-bold pb-3">
								<img
									src="~assets/images/icons/address.svg"
									alt=""
									width="20px"
								/>
								<span class="secondary">Address:</span>
							</div>
							<div class="font-16">
								FM Trading House Limited, No.3, 17/F, Strand 50 ,50 Bonham
								Strand, Sheung Wan, Hong Kong
							</div>
						</div>
					</div>

					<div class="col-md-12 col-sm-12 p-3 strip-border">
						<div class="mt-3">
							<div class="font-18 font-weight-bold pb-3">
								<img src="~assets/images/icons/mail.svg" alt="" width="20px" />

								<span class="secondary">Email Id:</span>
							</div>
							<div class="font-16">
								<a href="mailto:sales@fmtradinghouse.com">
									sales@fmtradinghouse.com</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</b-container>
	</div>
</template>
<style lang="scss" scoped>
.card-body {
	box-shadow: 0 5px 35px rgba(0, 0, 0, 0.1);
	height: 200px;
}
@media only screen and (max-width: 767px) {
	.card {
		margin-bottom: 15px;
	}
}

.contact-strip {
	// background-color: #db5616;
	color: #000000;
	a {
		color: #000000;
	}
}

.image-section-desk {
	background-color: #1f232b;
	img {
		max-height: 480px;
		width: 100%;
		opacity: 0.8;
	}
}

.strip-border {
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
