<template>
	<div class="deatils-section pt-90">
		<!-- <div class="banner-image">
			<img
				src="../assets/images/Home_Web_banner1.png"
				class="banner-image-1 d-none d-sm-none d-md-block"
			/>
			<img
				src="../assets/images/Home_mob_banner1.png"
				class="banner-image-1 d-block d-sm-block d-md-none"
			/>
		</div> -->

		<div class="carousel-mobile">
			<b-carousel
				id="carousel-1"
				v-model="slide"
				:interval="4000"
				controls
				indicators
				background="#ababab"
				img-width="1024"
				img-height="480"
				style="text-shadow: 1px 1px 2px #333;"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd"
			>
				<!-- Text slides with image -->
				<b-carousel-slide
					img-src="../assets/Banner/fm-mobile.png"
				></b-carousel-slide>

				<!-- Slides with custom text -->
				<b-carousel-slide img-src="../assets/Banner/Phone/Frame 9.png">
				</b-carousel-slide>

				<!-- Slides with image only -->
				<b-carousel-slide
					img-src="../assets/Banner/Phone/Frame 10.png"
				></b-carousel-slide>
			</b-carousel>
		</div>

		<div class="carousel-web">
			<b-carousel
				id="carousel-1"
				v-model="slide"
				:interval="4000"
				controls
				indicators
				background="#ababab"
				img-width="1024"
				img-height="480"
				style="text-shadow: 1px 1px 2px #333;"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd"
			>
				<!-- Text slides with image -->
				<b-carousel-slide
					img-src="../assets/Banner/fm-web.png"
				></b-carousel-slide>

				<!-- Slides with custom text -->
				<b-carousel-slide img-src="../assets/Banner/Web/Frame 6.png">
				</b-carousel-slide>

				<!-- Slides with image only -->
				<b-carousel-slide
					img-src="../assets/Banner/Web/Frame 7.png"
				></b-carousel-slide>
			</b-carousel>
		</div>

		<!-- <section class="stuck_container">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 mt-4">
						<div class="section-titel-contact text-justify">
							<h3 class="aboutus-title">
								Being stuck with a cleaning company that underperforms is no fun
							</h3>
							<p>
								Poor management, slow responses, poor cleaning standards – these
								are all a drag you can do without.<br />
								Busy office managers, facilities managers and finance managers
								want a service they can just rely on so they can get on with
								their own ever increasing demands. <br />Cleaning can be
								problematic, but with Cletide you can leave us to manage the
								COSHH, foreign worker permits, lone worker issues,
								eco-credentials, quality assessments and the many other facets
								of our work.<br />
								Which means you can get on with your own work throughout the
								user journey, integrating online and offline datasets across
								devices to create a holistic view. Identify which campaigns
								drive the most engagement.
							</p>
						</div>
					</div>
				</div>

				<div class="quote-button">
					<a href="/contact-us"
						><button>
							<h3>Get a Quote</h3>
						</button>
					</a>
				</div>
			</div>
		</section> -->

		<section class="call-us-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-7 mt-4 for-desk">
						<div class="why-choose-section-img">
							<img src="~assets/Banner/About.png" alt="" />
						</div>
					</div>
					<div class="col-sm-12 for-mob">
						<div class="why-choose-section-img">
							<img src="~assets/Banner/About.png" alt="" />
						</div>
					</div>

					<div class="col-lg-5 mt-4">
						<div class="section-titel-contact text-justify pb-3">
							<!-- <h6>OUR COMPANY</h6> -->
							<h4>
								Welcome!
							</h4>
							<h2>
								About Us
							</h2>
						</div>
						<div class="call-us-image">
							<p>
								Our Company is based in Hong Kong which is one of the major
								centres for trading of branded Electronics.<br />
								​ We regularly Export/Import products for brands like Apple,
								Nikon, Fujifilm, Leica, Sekonic, Samsung, Panasonic, Tokina,
								Sony, Olympus, Leica, Canon, GoPro, Tamron, Sigma, Bose,
								Sennheiser, FitBit, OnePlus, Huawei etc. ​<br />
								With our more than 10 years experience in this field, we have
								great network locally and overseas to move goods faster and
								efficiently.
							</p>
						</div>
						<div class="quote-button">
							<a href="/about-us"
								><button>
									<h3>READ MORE</h3>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="brands-container">
			<div class="container inner-container-brands">
				<div class="brands-title text-justify pt-4">
					<!-- <h6>OUR COMPANY</h6> -->
					<h2>
						Brands We do
					</h2>
				</div>

				<div class="image-section">
					<b-row class="pb-3">
						<b-col
							class="pt-4 pb-4"
							md="3"
							cols="6"
							v-for="brand in brands"
							:key="brand.id"
						>
							<div class="image-content">
								<img :src="brand.img" class="img-fluid image-main" />
							</div>
						</b-col>
					</b-row>
				</div>
				<div class="quote-button brands-button pb-5">
					<a href="/brands"
						><button>
							<h3>MORE BRANDS</h3>
						</button>
					</a>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import img1 from "../assets/Brands/img1.webp";
import img2 from "../assets/Brands/img2.webp";
import img4 from "../assets/Brands/img4.webp";
import img5 from "../assets/Brands/img5.webp";
import img6 from "../assets/Brands/img6.webp";
import img7 from "../assets/Brands/img7.webp";
import img8 from "../assets/Brands/img8.webp";
import img9 from "../assets/Brands/img9.webp";

export default {
	data() {
		return {
			slide: 0,
			sliding: null,
			brands: [
				{
					id: 1,
					img: img1,
				},
				{
					id: 2,
					img: img2,
				},
				{
					id: 4,
					img: img4,
				},
				{
					id: 5,
					img: img5,
				},
				{
					id: 6,
					img: img6,
				},
				{
					id: 7,
					img: img7,
				},
				{
					id: 8,
					img: img8,
				},
				{
					id: 9,
					img: img9,
				},
			],
		};
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true;
		},
		onSlideEnd(slide) {
			this.sliding = false;
		},
	},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";

.deatils-section {
	.banner-image-1 {
		height: 500px;
		width: 100%;
	}
	.container {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
		margin-top: 4rem;
	}
}

.text-left {
	text-align: left !important;
}
.font-sz {
	font-size: 2rem;
}
.mt-10 {
	margin-top: 10rem;
}

@media (max-width: 767px) {
	.title h1 {
		font-size: 40px;
		padding-left: 35px;
	}
}

@media (max-width: 767px) {
	.aboutus-title {
		font-size: 21px;
		margin-left: 8px;
	}
}

// .services-title,
.aboutus-title,
.aboutus-title-2,
.review-title {
	text-align: center;
	padding-bottom: 2rem;
}

.review-title {
	color: #ffffff;
}

.pt-100 {
	padding-top: 0px;
}

.contact-content {
	.contact-section {
		// background-color: #efefef;
		color: $black;
		font-size: $font-20;
	}
	.business-title {
		font-size: $font-24;
		color: #414242;
		font-weight: 700;
	}
}

h1 {
	font-size: 60px;
	font-weight: 700;
	// font-family: "Orbitron", sans-serif;
}
// h4 {
// 	font-family: "Orbitron", sans-serif;
// }
p {
	// font-family: "Roboto", sans-serif;
	font-size: 14px;
	font-weight: 500;
	line-height: 24px;
	margin: 0 0 15px;
}

// .review_quote_form{
// 	border: 1px solid #000000;
// }

.review_container .star-rating--medium img {
	width: 108px;
}

.review_container .review-content-title {
	margin-left: 0px;
}

.review_container {
	.review-section-1,
	.review-section-2,
	.review-section-3 {
		// box-shadow: 1px 1px 5px 1px #dddddd;
		padding: 5px;
		background-color: #ffffff;
		border-radius: 10px;
		min-height: 200px;
	}
}

.review-section-1,
.review-section-2,
.review-section-3 {
	.review-inner {
		padding: 10px;
	}
}

.review-section-main {
	padding-bottom: 20px;
}

.call-us-section {
	padding-top: 5px !important;
	margin-bottom: 5rem !important;
	// color: #000000;
}

.call-us-section {
	h6 {
		color: #1dc2ef;
	}
	h2 {
		font-weight: 600;
		font-size: 60px;
		text-transform: uppercase;
		line-height: 0.8;
	}
	h4 {
		font-size: 30px;
		line-height: 0.8 !important;
	}
	p {
		font-size: 16px;
		line-height: 1.9rem;
	}
}

.review-container-main {
	background-color: #03487a;
	padding-top: 5px;
	padding-bottom: 50px;
}

.review-container-main h3 {
	font-weight: 600;
}

.quote-button {
	// padding: 20px 0px;
	display: flex;
	justify-content: flex-start;
}

.quote-button {
	h3 {
		color: #902a00;
		font-size: 14px !important;
		font-weight: 600;
	}
	button {
		// border-radius: 20px;
		padding: 16px 35px 8px 35px;
		// background-color: #03487a;
		background-color: #fff;
		border-color: #ffb506;
	}
	button:hover {
		background-color: #ff8a26;
		// border-radius: 20px;
		h3 {
			color: #000000;
		}
	}
}

.review-content-text-date {
	color: #9b9898;
}

@media (max-width: 768px) {
	.carousel-web {
		display: none;
	}
}

@media (min-width: 769px) {
	.carousel-mobile {
		display: none;
	}
}

.service-area .services-title {
	color: #1dc2ef;
	text-align: center;
}

.service-area .services-title-subheading {
	font-weight: 600;
	color: #0e2b5c;
	font-size: 1.875rem;
	line-height: 1.2em;
	text-align: center;
	padding-bottom: 50px;
}

.brands-container .brands-title {
	display: flex;
	justify-content: center;
}

.brands-container .many-more {
	display: flex;
	justify-content: center;
	font-weight: 600;
}

.brands-container h2 {
	font-weight: 600;
	color: #000000;
	font-size: 40px;
	text-transform: uppercase;
}
@media (max-width: 767px) {
	.brands-container h2 {
		font-size: 30px;
	}
}

.brands-button {
	justify-content: center;
}
.image-section {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
}

// .image-main {
// 	box-shadow: 2px 2px 4px rgb(192, 192, 192);
// }

.brands-container {
	background-color: #ff8a26;
}

.why-choose-section-img {
	img {
		vertical-align: middle;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
}
@media only screen and (max-width: 767px) {
	.why-choose-section-img {
		width: 100%;
		img {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	}
}

@media only screen and (min-width: 768px) {
	.why-choose-section-img {
		padding: 50px 25px 15px 15px;
	}
}

.inner-container-brands {
	padding-top: 3rem;
	padding-bottom: 2rem;
}
</style>
