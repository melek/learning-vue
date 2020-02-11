<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
              v-for="server in servers"
              :serverInfo="server">
            </app-server>
        </ul>
    </div>
</template>

<script>
import ServerListItem from './ServerListItem.vue'

export default {
  components: {
    appServer: ServerListItem
  },
  data: function() {
    return {
      servers: [
        { name: "Google", status: "normal" },
        { name: "Boing Boing", status: "critical" },
        { name: "Lionel Tarot", status: "unknown" },
        { name: "Ask Jeeves", status: "unknown" },
        { name: "Pentagon", status: "normal"}
      ]
    }
  }
};
</script>

<style>

</style>
