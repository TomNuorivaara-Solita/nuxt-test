<template>
  <div>
    <top-nav></top-nav>
    <content class="content">
        <section class="content__section">
            <div class="row" style="margin-top:4rem;">
                <div class="col-xs">
                    <nuxt-link to="/"><button class="button"><i class="button__icon material-icons md-light md-md">home</i><span class="button__text">Etusivu</span></button></nuxt-link>
                </div>
            </div>
            <div class="row">
                <div class="col-xs">
                    <h1 class="h1">Tällä sivulla on uutisia.</h1>
                </div>
            </div>
            <template v-for="article in news">
                <div class="row">
                    <div class="col-xs">
                        <h2 class="h2">{{ article.title }}</h2>
                        <p>{{ article.body[0].content }}</p>
                    </div>
                </div>
            </template>
        </section>
    </content>
  </div>
</template>

<script>
import TopNav from '~components/top-nav.vue'
import axios from 'axios'

export default {
  components: {
    TopNav
  },
  asyncData ({ params }) {
    return axios.get(`/data/news.json`)
    .then(res => ({ news: res.data }))
  }
}
</script>

<style>
  
</style>
