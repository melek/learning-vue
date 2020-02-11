<template>
<div class="row">
  <ldg-serverapp-list></ldg-serverapp-list>
  <ldg-serverapp-details></ldg-serverapp-details>
</div>
</template>

<script>
import ServerAppList from './ServerAppList.vue'
import ServerAppDetails from './ServerAppDetails.vue'

export default {
  components: {
    'ldg-serverapp-list': ServerAppList,
    'ldg-serverapp-details': ServerAppDetails
  }
}
</script>
