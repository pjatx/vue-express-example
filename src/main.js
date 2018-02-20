import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

class Errors {
  constructor() {
    this.errors = { };
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    delete this.errors[field];
  }
}

new Vue({
  el: '#app',

  data() {
    return {
      name: '',
      description: '',
      errors: new Errors()
    }
  },

  methods: {
    onSubmit() {
      axios.post('http://localhost:8081/projects', this.$data )
        .then(this.onSuccess)
        .catch(error => this.errors.record(error.response.data));
    },

    onSuccess(response) {
      alert(response.data);
      this.name = '';
      this.description = '';
    }
  },

  mounted() {

  }

})
