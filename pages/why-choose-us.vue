<template>
  <div class="pt-90">
    <div>
      <div class="image-section">
        <div class="for-desk">
          <div class="image-section-desk">
            <img
              src="~assets/Banner/banner-image.png"
              alt=""
              class="img-fluid"
            />
            <span class="banner-text">Why Choose Us</span>
          </div>
        </div>
        <div class="for-mob">
          <div class="image-section-mob">
            <img
              src="~assets/Banner/banner-image.png"
              alt=""
              class="img-fluid"
            />
            <span class="banner-text">Why Choose Us</span>
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
                  <!-- <img
                    src="~assets/Cletide Illustraitons/Why Choose Us /Why Choose Us 1.svg"
                    alt=""
                  /> -->
                </div>
              </div>
              <div class="col-sm-12 for-mob">
                <div class="why-choose-section-img">
                  <!-- <img
                    src="~assets/Cletide Illustraitons/Why Choose Us /Why Choose Us 1.svg"
                    alt=""
                  /> -->
                </div>
              </div>
              <div class="col-md-6 col-sm-12 m-auto">
                <div>Often we get asked what is our single USP.</div>
                <div>The answer is there isn’t one.</div>
                <div>
                  It’s actually a combination of about 6 things. And if we had
                  to sum them up, and show you how they benefit YOU, it would go
                  something like this:
                </div>
              </div>
            </div>
            <div class="row pt-5">
              <div class="col-md-6 col-sm-12 for-mob m-auto">
                <div class="why-choose-section-img">
                  <!-- <img
                    src="~assets/Cletide Illustraitons/Why Choose Us /Why Choose Us 3.svg"
                    alt=""
                  /> -->
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div>Showing the Love to the Cleaning Staff</div>
                <p>
                  The Team, is convinced that the greatest differentiator in
                  cleaning companies is how we treat our staff, especially our
                  cleaning staff.
                </p>
                <p>
                  Respect is culturally embedded in Cletide . We love our staff,
                  and we want them to love us too.
                </p>
                <p>
                  We chat and develop relationships. We make sure their pay is
                  right. Every time. We send them thank you cards for every
                  completed year of safety. We genuinely care for their health
                  and wellbeing.
                </p>
                <p>
                  And when they get the offer of another job, we want them to
                  stay with us because they feel respected and recognised.
                </p>
              </div>
              <div class="col-md-6 col-sm-12 for-desk m-auto">
                <div class="why-choose-section-img">
                  <!-- <img
                    src="~assets/Cletide Illustraitons/Why Choose Us /Why Choose Us 3.svg"
                    alt=""
                  /> -->
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

<style lang="scss">
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
  width: 400px;
  height: 400px;
  img {
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
</style>
