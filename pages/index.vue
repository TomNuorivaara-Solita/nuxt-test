<template>
  
  <div>
    <top-nav></top-nav>
    <content class="content">
      <section class="hero-image hero-image--frontpage">
          <div class="hero-image__overlay">
              <div class="row">
                  <div class="col-xs">
                      <h1 class="hero-image__heading">Palvelu</h1>
                      <p class="hero-image__intro">Palvelun introteksti tulee tähän.</p>
                  </div>
              </div>
          </div>
      </section>
      <section class="content__section">
          <div class="row">
              <div class="col-xs">
                  <h2 class="h2 u--centered">Ajankohtaista</h2>
              </div>
          </div>
          <div class="row">
              <div class="col-xs-12 col-md">
                  <section class="latest-item">
                      <a href="#" class="latest-item__header-link"><p class="latest-item__header-text">Tiedotteen otsikko tulee tähän</p></a>
                      <p><span class="latest-item__timestamp">22.02.2017</span><a href="#" class="latest-item__content-type">Tiedotteet</a></p>
                      <p><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 1</a></span><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 2</a></span><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 3</a></span></p>
                  </section>
              </div>
              <div class="col-xs-12 col-md">
                  <section class="latest-item">
                      <a href="#" class="latest-item__header-link"><p class="latest-item__header-text">Tiedotteen otsikko tulee tähän</p></a>
                      <p><span class="latest-item__timestamp">22.02.2017</span><a href="#" class="latest-item__content-type">Tiedotteet</a></p>
                      <p><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 1</a></span><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 2</a></span><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 3</a></span></p>
                  </section>
              </div>
              <div class="col-xs-12 col-md">
                  <section class="latest-item">
                      <a href="#" class="latest-item__header-link"><p class="latest-item__header-text">Tiedotteen otsikko tulee tähän</p></a>
                      <p><span class="latest-item__timestamp">22.02.2017</span><a href="#" class="latest-item__content-type">Tiedotteet</a></p>
                      <p><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 1</a></span><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 2</a></span><span class="latest-item__traffic-type"><a href="#" class="latest-item__traffic-type-link">Kategoria 3</a></span></p>
                  </section>
              </div>
          </div>
          <div class="row">
              <section class="frontpage-button-area">
                  <nuxt-link to="/news"><button class="button"><i class="button__icon material-icons md-light md-md">info</i><span class="button__text">Tiedotteet</span></button></nuxt-link>
                  <nuxt-link to="/test"><button class="button"><i class="button__icon material-icons md-light md-md">format_quote</i><span class="button__text">Artikkelit</span></button></nuxt-link>
                  <a href="#"><button class="button"><i class="button__icon material-icons md-light md-md">event</i><span class="button__text">Tapahtumat</span></button></a>
              </section>
          </div>
      </section>
    </content>
  </div>

</template>

<script>
import TopNav from '~components/top-nav.vue'

export default {
  components: {
    TopNav
  }
}
</script>

<style>
</style>
