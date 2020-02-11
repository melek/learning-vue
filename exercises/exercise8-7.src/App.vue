<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details
              :selectedServerIndex="selectedServerIndex"
              :selectedServer="selectedServer">
            </app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    import { eventBus } from './main';

    export default {
        data: function() {
          return {
            selectedServerIndex: undefined,
            selectedServer: {
              name: "No server specified",
              status: "none"
            }
          }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer,
        },
        created() {
          eventBus.$on('serverViewUpdate', (serverIndex, server) => {
            this.selectedServerIndex = serverIndex;
            this.selectedServer = server;
          });
        }
    }
</script>

<style>

</style>
