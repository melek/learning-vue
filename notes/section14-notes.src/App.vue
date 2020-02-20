<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                Mode:
                 <select v-model="showExercises" class="form-control">
                  <option value="css">CSS</option>
                  <option value="js">Javascript</option>
                </select>
                <hr>
                <div v-if="showExercises == 'css'">
                <select v-model="alertAnimation" class="form-control">
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br>
                <transition :name="alertAnimation" mode="out-in">
                  <div v-if="show" key="success" class="alert alert-success mt-3">All's Well :)</div>
                  <div v-else key="warning" class="alert alert-warning mt-3">Alert!!</div>
                </transition>
                <br>
                <transition :name="alertAnimation">
                  <div v-if="show" class="alert alert-info mt-3">Some Info</div>
                </transition>
                <transition name="slide">
                  <div v-if="show" class="alert alert-warning mt-3">Some Info</div>
                </transition>
                <transition name="fade-slide" type="animation" appear>
                  <div v-if="show" class="alert alert-primary mt-3">Some Info</div>
                </transition>
                <transition
                  appear
                  name="fade"
                  enter-active-class="animated bounce fade-enter-active"
                  leave-active-class="animated shake fade-leave-active">
                  <div v-if="show" class="alert alert-success mt-3">Some Info</div>
                </transition>
                </div>
                <div v-else>
                  <button class="btn btn-primary" @click="load = !load">Load/Remove</button>
                  <br><br>
                  <transition
                    :css="false"

                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
                    <div style="width:300px; height: 100px; background-color:lightgreen" v-if="load"></div>
                  </transition>
                  <hr>
                  <button class="btn btn-primary mb-3" @click="selectedComponent == 'app-danger-alert' ? selectedComponent = 'app-success-alert' : selectedComponent = 'app-danger-alert'">
                    Toggle Alert
                  </button>
                  <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                  </transition>
                  <hr>
                  <button class="btn btn-primary mb-1" @click="addItem">Add Item</button>
                  <ul class="list-group">
                    <transition-group name="fade-slide">
                      <li
                        class="list-group-item"
                        style="cursor: pointer"
                        v-for="(number, index) in numbers"
                        @click="removeItem(index)"
                        :key="number">
                          {{ number }}
                      </li>
                    </transition-group>
                  </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DangerAlertVue from './DangerAlert.vue';
import SuccessAlertVue from './SuccessAlert.vue';
    export default {
        data() {
            return {
              show: false,
              alertAnimation: "fade",
              showExercises: "js",
              load: false,
              elementWidth: 100,
              selectedComponent: 'appSuccessAlert',
              numbers: [1,2,3,4,5]
            }
        },
        components: {
          appDangerAlert: DangerAlertVue,
          appSuccessAlert: SuccessAlertVue
        },
        methods: {
          addItem() {
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length+1);
          },
          removeItem(index) {
            this.numbers.splice(index,1);
          },
          beforeEnter(el) {
              console.log('beforeEnter');
              this.elementWidth = 100;
              el.style.width = this.elementWidth + "px";
          },
          enter(el, done) {
            console.log('enter');
            let round = 1;
              const interval = setInterval(() => {
                el.style.width = (this.elementWidth + round * 10) + "px";
                round++;
                if(round > 20) {
                  clearInterval(interval);
                  done();
                }
              }, 20);
          },
          afterEnter(el) {
            console.log('afterEnter');
          },
          enterCancelled(el) {
            console.log('enterCancelled');
          },
          beforeLeave(el) {
            console.log('beforeLeave');
            this.elementWidth = 300
            el.style.width = this.elementWidth + "px";
          },
          leave(el, done) {
            console.log('leave');
            let round = 1;
              const interval = setInterval(() => {
                el.style.width = (this.elementWidth - round * 20) + "px";
                round++;
                if(round > 20) {
                  clearInterval(interval);
                  done();
                }
              }, 20);
          },
          afterLeave(el) {
            console.log('afterLeave');
          },
          leaveCancelled(el) {
            console.log('leaveCancelled');
          }
        }
    }
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {

}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {

}
.slide-enter-active {
  animation: slide-left-in 1s ease-out forwards;

}
.slide-leave {

}
.slide-leave-active {
  animation: slide-right-out 1s ease-out forwards;

}


.fade-slide-enter {
  opacity: 0;
}
.fade-slide-enter-active {
  animation: slide-up-in 1s ease-out forwards;
  transition: opacity .5s;
}
.fade-slide-leave {

}
.fade-slide-leave-active {
  animation: slide-down-out 1s ease-out forwards;
    transition: opacity .5s;
  opacity: 0;
  position: absolute;
}

.fade-slide-move {
  transition: transform 0.5s;
}


@keyframes slide-up-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-down-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

@keyframes slide-left-in {
  from {
    transform: translateX(20px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-right-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(20px);
  }
}

</style>>
