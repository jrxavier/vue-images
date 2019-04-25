<template>
  <div>
    Please wait ...
  </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created() {
    this.finalizeLogin(window.location.hash);
    //window.location.hash passa todos os parâmetros retornados para a url de callback
  
  }
}
</script>
