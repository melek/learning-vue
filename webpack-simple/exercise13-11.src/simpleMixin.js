export const simpleMixin = {
  data() {
    return {
      text: "This is a sample sentence!"
    };
  },
  filters: {
    myReverse(value) {
      return value.split("").reverse().join("");
    }
  },
  computed: {
    myReverseComputed() {
      return this.text.split("").reverse().join("");
    },
    appendLengthComputed() {
      return this.text + " (" + this.text.length + ")";
    },
    appendLengthComputedReversed() {
      return this.myReverseComputed + " (" + this.text.length + ")";
    }
  }
}
