<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div class="alert alert-primary" v-my-on:click="clickHandler">Click me</div>
                <div class="alert alert-primary" v-my-on-basic:click="clickHandler">Click me</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        myOn: {
          bind(el, binding, vnode) {
            if(binding.arg) {
              var eventType;
              console.log("v-myOn: " + binding.arg + " event specified");
              eventType = binding.arg;
            } else {
              console.log("v-myOn: " + eventType + " default event set");
              eventType = "click";
            }

            let handler = binding.value;

            if(typeof handler === "function") {
              console.log("v-myOn: Binding " + eventType + " event to a valid handler");
              el.addEventListener(eventType, handler);
            } else {
              console.log("v-myOn: Passed value is an invalid method. No action taken.");
            }
          }
        },
        myOnBasic: {
          bind(el, binding, vnode) {
              el.addEventListener(binding.arg, binding.value);
          }
        }
      },
      methods: {
        clickHandler() {
          console.log("Click!");
        }
      }
    }
</script>

<style>
</style>
