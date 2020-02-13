<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                :value="userData.email"
                                @input="userData.email = $event.target.value"
                                type="text"
                                id="email"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                v-model.lazy="userData.password"
                                type="password"
                                id="password"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                v-model.lazy.number="userData.age"
                                type="number"
                                id="age"
                                class="form-control">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"
                            placeholder="Enter a comment here..."></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    v-model="sendMail"
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    v-model="sendMail"
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="userData.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="userData.gender"> Female
                    </label>
                    <label for="nonbinary">
                        <input
                                type="radio"
                                id="nonbinary"
                                value="Nonbinary"
                                v-model="userData.gender"> Nonbinary
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <option v-for="priority in priorities" :key="priority">{{ priority }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <appSwitch v-model="dataSwitch"></appSwitch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>

        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <div class="card">
                  <h3 class="card-header">Your Data</h3>
                    <div class="card-body">
                      <div class="card-text">
                          <p>Mail: {{ userData.email }}</p>
                          <p>Password:  {{ userData.password }}</p>
                          <p>Age: {{ userData.age }}</p>
                          <p style="white-space:pre;">Message:<br>{{ message }}</p>
                          <p v-if="sendMail.length > 0">
                            <strong>Requested Mailings:</strong>
                          <ul>
                              <li v-for="mailtype in sendMail" :key="mailtype">{{mailtype}}</li>
                          </ul></p>
                          <p>Gender: {{ userData.gender }}</p>
                          <p>Priority: {{ selectedPriority }}</p>
                          <p>Switched: {{ dataSwitch }}</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from './components/Switch.vue';

    export default {
      data() {
        return {
          userData: {
            email: '',
            password: '',
            age: 36,
            gender: 'Male'
          },
          message: '',
          sendMail: [],
          priorities: [ 'High', 'Medium', 'Low' ],
          selectedPriority: 'High',
          dataSwitch: true,
          isSubmitted: false
        }
      },
      methods: {
        submitted() {
          this.isSubmitted = true;
        }
      },
      components: {
        appSwitch: Switch
      }
    }
</script>

<style>

</style>
