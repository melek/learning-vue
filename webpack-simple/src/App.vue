<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label>
                    Username
                    <input v-model="user.username" type="text" class="form-control">
                  </label>
                </div>
                <div class="form-group">
                  <label>
                    Email
                    <input v-model="user.email" type="text" class="form-control">
                  </label>
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <ul class="mt-3 list-group">
                  <li v-for="u in users" class="list-group-item" :key="u.email">{{ u.username }} &lt;{{ u.email }}&gt;</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            username: "",
            email: ""
          },
          users: [],
          resource: {},
          node: "data"
        };
      },
      methods: {
        submit() {
          /*this.$http.post('data.json', this.user)
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error);
          });*/
          this.resource.saveAlt(this.user);
        },
        fetchData() {

          /*this.$http.get('data.json')
            .then(response => {
              return response.json();
            })
            .then(data => {
              const resultArray = [];
              for (let key in data) {
                resultArray.push(data[key]);
              }
              this.users = resultArray;
            });*/
            this.resource.getData({node : this.node});
        }
      },
      created() {
        const customActions = {
          saveAlt: { method: 'POST', url: 'alt.json'},
          getData: { method: 'GET'}
        }
        this.resource = this.$resource('{node}', {}, customActions);
      }
    }
</script>

<style>
</style>
