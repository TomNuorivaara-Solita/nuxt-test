<template>
  <div>
    <top-nav></top-nav>
    <content class="content">
        <section class="content__section">
            <div class="row" style="margin-top:4rem;">
                <div class="col-xs">
                    <nuxt-link to="/"><button class="button"><i class="button__icon material-icons md-light md-md">home</i><span class="button__text">Etusivu</span></button></nuxt-link>
                    <button class="button" @click="toggleFilter"><i class="button__icon material-icons md-light md-md">home</i><span class="button__text">Filter</span></button>
                </div>
            </div>
            <div class="row">
                <div class="col-xs">
                    <h1 class="h1">Tällä sivulla on uutisia.</h1>
                </div>
            </div>
            <section v-for="article in items" :key="article">
                <div class="row">
                    <div class="col-xs">
                        <h2 class="h2">{{ article.title }}</h2>
                        <p>{{ article.body[0].content }}</p>
                    </div>
                </div>
            </section>
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
  methods: {
    toggleFilter () {
      this.isFiltered = !this.isFiltered
    }
  },
  computed: {
    items () {
      console.log(this.news)
      if (this.news.length === 0) {
        return this.news
      }
      return this.isFiltered ? this.news.slice(0, 1) : this.news
    }
  },
  data () {
    return {
      isFiltered: false,
      news: []
    }
  },
  asyncData ({ params }) {
    return axios.get(`http://127.0.0.1:3000/nuxt-test/data/news.json`)
    .then(res => ({ news: res.data }))
    .catch(error => console.log(error))
  }
}
</script>

<style>
  
</style>
