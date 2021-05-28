<template>
	<div>
		<div class="about-section pt-90">
			<div class="image-section image-section-banner mb-5">
				<div class="for-desk">
					<div class="image-section-desk">
						<img src="~assets/Events/banner-all.jpg" alt="" class="img-fluid" />
						<span class="banner-text">Brands</span>
					</div>
				</div>
				<div class="for-mob">
					<div class="image-section-mob">
						<img src="~assets/Events/banner-all.jpg" alt="" class="img-fluid" />
						<span class="banner-text">Brands</span>
					</div>
				</div>
			</div>
			<div class="image-section mb-6">
				<b-row>
					<b-col
						class="pt-6"
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
		</div>
	</div>
</template>

<script>
import img1 from "../assets/Brands/img1.webp";
import img2 from "../assets/Brands/img2.webp";
// import img3 from "../assets/Brands/img3.webp";
import img4 from "../assets/Brands/img4.webp";
import img5 from "../assets/Brands/img5.webp";
import img6 from "../assets/Brands/img6.webp";
import img7 from "../assets/Brands/img7.webp";
import img8 from "../assets/Brands/img8.webp";
import img9 from "../assets/Brands/img9.webp";
import img10 from "../assets/Brands/img10.webp";
import img11 from "../assets/Brands/img11.webp";
import img12 from "../assets/Brands/img12.webp";
import img13 from "../assets/Brands/img13.webp";
import img14 from "../assets/Brands/img14.webp";
import img15 from "../assets/Brands/img15.webp";
import img16 from "../assets/Brands/img16.webp";
import img17 from "../assets/Brands/img17.webp";
import img18 from "../assets/Brands/img18.webp";
import img19 from "../assets/Brands/img19.webp";
import img20 from "../assets/Brands/img20.webp";
import img21 from "../assets/Brands/img21.webp";

export default {
	data() {
		return {
			brands: [
				{
					id: 1,
					img: img1,
				},
				{
					id: 2,
					img: img2,
				},
				// {
				// 	id: 3,
				// 	img: img3,
				// },
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
				{
					id: 10,
					img: img10,
				},
				{
					id: 11,
					img: img11,
				},
				{
					id: 12,
					img: img12,
				},
				{
					id: 13,
					img: img13,
				},
				{
					id: 14,
					img: img14,
				},
				{
					id: 15,
					img: img15,
				},
				{
					id: 16,
					img: img16,
				},
				{
					id: 17,
					img: img17,
				},
				{
					id: 18,
					img: img18,
				},
				{
					id: 19,
					img: img19,
				},
				{
					id: 20,
					img: img20,
				},
				{
					id: 21,
					img: img21,
				},
				// {
				// 	id: 22,
				// 	img: img22,
				// },
				// {
				// 	id: 23,
				// 	img: img23,
				// },
				// {
				// 	id: 24,
				// 	img: img24,
				// },
				// {
				// 	id: 25,
				// 	img: img25,
				// },
				// {
				// 	id: 26,
				// 	img: img26,
				// },
				// {
				// 	id: 27,
				// 	img: img27,
				// },
				// {
				// 	id: 28,
				// 	img: img28,
				// },
				// {
				// 	id: 29,
				// 	img: img29,
				// },
				// {
				// 	id: 30,
				// 	img: img30,
				// },
				// {
				// 	id: 31,
				// 	img: img31,
				// },
				// {
				// 	id: 32,
				// 	img: img32,
				// },
				// {
				// 	id: 33,
				// 	img: img33,
				// },
			],
		};
	},
};
</script>
<style scoped>
.image-section {
	margin: 2.5rem;
}

.image-section-banner {
	margin: 0px;
}

/* .image-main {
	box-shadow: 2px 2px 4px rgb(192, 192, 192);
} */

/* @media (max-width: 767px) {
	.title h1 {
		font-size: 40px;
		padding-left: 7rem;
	}
} */

@media (min-width: 768px) {
	.col-md-6 {
		-ms-flex: 0 0 50%;
		flex: 0 0 50%;
		max-width: 50%;
	}
}

@media (min-width: 576px) {
	.col-sm-12 {
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}
}

@media (max-width: 767px) {
	.image-main {
		padding: 38px 22px 35px;
	}
	.image-main {
		box-shadow: 2px 2px 4px rgb(192, 192, 192);
	}
}

/* .image-main {
	min-height: 70px;
} */

.image-section-desk {
	background-color: #1f232b;
}
.image-section-desk img {
	max-height: 480px;
	width: 100%;
	opacity: 0.8;
}
</style>
