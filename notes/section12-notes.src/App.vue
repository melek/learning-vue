<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h1>Built-in Directives</h1>
                <p v-text="'This is normal text! Tags like <hr> won\'t work.'"></p>
                <p v-html="'This is <em>HTML</em> text, Tags will <strong>work normally</strong>!'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background="'red'">Color this</p>
                <p v-local-highlight:background.blink="{ mainColor: 'pink', secondColor: 'lightpink', delay: 100}">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        localHighlight: { // v-localHighlight
          bind(el, binding, vnode) {
            let delay = 0;
            if(binding.modifiers['delayed']) {
              delay = 2500;
            }
            if(binding.modifiers['blink']) {
              let mainColor = binding.value.mainColor;
              let secondColor = binding.value.secondColor;
              let currentColor = mainColor;

              setTimeout( () => {
                setInterval( () => {
                  currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                  if(binding.arg == 'background') {
                    el.style.backgroundColor = currentColor;
                  } else {
                    el.style.color = currentColor;
                  }
                }, binding.value.delay);
              }, delay);
            } else {
              setTimeout( () => {
                if(binding.arg == 'background') {
                  el.style.backgroundColor = binding.value;
                } else {
                  el.style.color = binding.value;
                }
              }, delay);
            }
          }
        }
      }
    }
</script>

<style>

</style>
