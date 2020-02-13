<template>
  <div class="d-flex flex-row flex-wrap mt-4">
    <appQuote
      v-for="(quote, index) in quotes"
      @click.native="$emit('remove-quote', index)"

      :key="index">
      <template v-if="quote != ''">{{ quote }}</template>
    </appQuote>
  </div>
</template>

<script>
import QuoteCard from './QuoteCard.vue'

export default {
  props: ['quotes'],
  components: {
    appQuote: QuoteCard
  }
}
</script>

<style>

</style>
