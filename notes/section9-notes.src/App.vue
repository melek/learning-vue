<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">No quote selected</component>
        </keep-alive>
        <!--app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>Be the change you want to see in the world...</p>
        </app-quote-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
    data: function() {
      return {
          quoteTitle: "Quote of the Day",
          selectedComponent: 'appQuote'
        }
      },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
}
</script>

<style scoped>

h2 {
  color: red;
}
</style>
