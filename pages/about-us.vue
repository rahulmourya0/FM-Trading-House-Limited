<template>
  <div class="pt-90">
    <div>
      <div class="image-section">
        <div class="for-desk">
          <div class="image-section-desk">
            <img
              src="~assets/Events/banner-all.jpg"
              alt=""
              class="img-fluid"
            />
            <span class="banner-text">About Us</span>
          </div>
        </div>
        <div class="for-mob">
          <div class="image-section-mob">
            <img
              src="~assets/Events/banner-all.jpg"
              alt=""
              class="img-fluid"
            />
            <span class="banner-text">About Us</span>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-content">
      <div class="page-content">
        <section class="Why-choose-us-section">
          <div class="container pt-5">
            <div class="row">
              <div class="col-6 for-desk">
                <div class="why-choose-section-img">
                  <img
                    src="~assets/Events/about-us.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-sm-12 for-mob">
                <div class="why-choose-section-img">
                  <img
                    src="~assets/Events/about-us.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-12 m-auto">
                <div class="section-titel-contact text-justify">
							<!-- <h6>OUR COMPANY</h6> -->
							<h4>
								Welcome!
							</h4>
							<h2>
								About Us
							</h2>
						</div>
            <div>
                <p>
								Our Company is based in Hong Kong which is one of the major
								centres for trading of branded Electronics.<br /><br />

								​ We regularly Export/Import products for brands like Apple,
								Nikon, Fujifilm, Leica, Sekonic, Samsung, Panasonic, Tokina,
								Sony, Olympus, Leica, Canon, GoPro, Tamron, Sigma, Bose,
								Sennheiser, FitBit, OnePlus, Huawei etc. ​<br /><br />
		
								With our more than 10 years experience in this field, we have
								great network locally and overseas to move goods faster and
								efficiently.<br /><br />

								We not only work with FedEX, UPS, DHL for courier based
								shipments, but also with Freight Forwarders who specialize in
								country specific shipments and clearance, therefore we can ship
								virtually any part of the world. We welcome our client's own
								Freight Forwarders as well.<br /><br />

								Our company regulary visits industry's best known trade fairs
								and also participates from time to time. This gives us a
								flexibility to meet our clients/vendors not only in Hong Kong,
								but also at one of the trade fairs we visit in different parts
								of the globe. We are always keen to meet new customers and
								vendors in order to develop new markets and long term business
								relations. <br /><br />

								​ Feel free to drop us an email at sales@fmtradinghouse.com to discuss
								business possibilities.
							</p>
            </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  watch: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
// .image-section {
//   width: 100%;
//   height: 400px;
//   img {
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
//   }
// }
.why-choose-section-img {
  // width: 400px;
  // height: 400px;
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

.Why-choose-us-section p{
  font-size: 18px;
  line-height: 1.9rem;
  color: #000000;
}

.image-section-desk {
  background-color: #1f232b;
  img{
  max-height: 480px;
  width:100%;
  opacity: 0.8;
}
}

.section-titel-contact {
  h2{
    	font-weight: 600;
		font-size: 60px;
  }
  h4{
		font-size: 30px;
	}
}
</style>
