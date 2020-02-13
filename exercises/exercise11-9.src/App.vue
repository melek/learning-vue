<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                  <h1>Registration</h1>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                      <appFullNameInput v-model="fullName"></appFullNameInput>
                    <!-- Mail -->
                      <div class="form-group">
                        <label>
                          Email
                          <input type="email" name="email" v-model="email" class="form-control">
                          <small class="form-text text-muted">We never share your email.</small>
                        </label>
                      </div>
                    <!-- Password -->
                      <div class="form-group">
                        <label>Password <input type="password" name="password" v-model="password" class="form-control"></label>
                      </div>
                    <!-- Store Data? Yes/No -->
                      <div class="form-group">
                        <legend>May we store and use your visitor data to help improve our services?</legend>
                        <label>Yes <input type="radio" name="consent" value="Yes" v-model="storeConsent"></label>
                        <label>No <input type="radio" name="consent" value="No" v-model="storeConsent"></label>
                      </div>
                      <button type="submit" class="btn btn-primary" @click.prevent.once="isSubmitted = true">Submit</button>

                </div>
            </div>
        </form>
        <div class="row mt-5">
            <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
              <div class="alert alert-success">Thank you for submitting!</div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{storeConsent}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullNameControlVue from './components/FullNameControl.vue';
    export default {
      data() {
        return {
          fullName: "",
          email: "",
          password: "",
          storeConsent: "No",
          isSubmitted: false
        };
      },
      components: {
        appFullNameInput: FullNameControlVue
      }
    }
</script>

<style>
</style>
