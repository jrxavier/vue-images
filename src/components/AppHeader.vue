<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="item">
      Image Storage
    </a>
    {{ isLoggedIn }}
    <div class="right menu">
      <div v-if="isLoggedIn">
        Galeria de butoes
        Upload
      </div>
      <a v-else href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login'])
}
</script>
