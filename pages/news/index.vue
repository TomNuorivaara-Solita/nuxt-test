<template>
  <div>
    <top-nav></top-nav>
    <content class="content">
        <section class="content__section">
            <div class="row">
                <div class="col-xs">
                    Tällä sivulla on uutisia.
                </div>
            </div>
            <div class="row">
                <div class="col-xs">
                    <nuxt-link to="/"><button class="button"><i class="button__icon material-icons md-light md-md">home</i><span class="button__text">Etusivu</span></button></nuxt-link>
                </div>
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
