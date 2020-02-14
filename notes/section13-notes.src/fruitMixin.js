export const fruitMixin = {
  data() {
    return {
      fruits: ['Kiwi', 'Mango', 'Apple', 'Banana', 'Eeple', 'Boonoonoo'],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter( (element) => {
        return element.match(this.filterText);
      });
    }
  },
  created() {
    console.log("Created!");
  }
};
