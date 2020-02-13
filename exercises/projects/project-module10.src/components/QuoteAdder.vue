<template>
            <div>
              <label class="mb-1">Enter a quote</label>
              <textarea class="form-control mb-2" v-model="newQuote" autofocus style="width: 100%"></textarea>
              <div class="text-center">
                <button
                  class="btn btn-primary"
                  @click.prevent="newQuoteEvent">
                  Add Quote
                </button>
              </div>
            </div>
          </template>
<script>
export default {
  data() {
    return {
      newQuote: ""
    }
  },
  methods: {
    newQuoteEvent() {
      this.$emit('add-quote', this.newQuote);
      this.newQuote = "";
    }
  }
};
</script>

<style>
</style>
