<template>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5">
          <appMeter :barValue="quotes.length" :barLimit="quoteLimit">
            <h2 slot="title">Quotes Collected
            </h2>
          </appMeter>
        </div>
      </div>
      <div class="row">
        <div class="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2">
          <appQuoteAdder @add-quote="addQuote"></appQuoteAdder>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <appQuoteList
            @remove-quote="removeQuote"
            :quotes="quotes">
          </appQuoteList>
        </div>
      </div>
      <div class="row"  v-if="info.length > 0">
        <div class="col-12 mt-3">
          <div class="alert alert-primary text-center">{{ info }}</div>
        </div>
      </div>
    </div>
</template>

<script>
import Meter from './components/Meter.vue';
import QuoteAdder from './components/QuoteAdder.vue';
import QuoteList from './components/QuoteList.vue';

export default {
    data() {
      return {
        quotes: ['Sample Quote'],
        quoteLimit: 20,
        info: "Click on a quote to delete it."
      };
    },
    methods: {
      addQuote(newQuote) {
        if(this.quotes.length >= 10) {
          this.quotes.pop();
        }
        this.quotes.unshift(newQuote);
      },
      removeQuote(index) {
        this.quotes.splice(index, 1);
      }
    },
    components: {
      appMeter: Meter,
      appQuoteAdder: QuoteAdder,
      appQuoteList: QuoteList
    }
}
</script>

<style>

</style>
