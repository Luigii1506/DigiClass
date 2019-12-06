<template>
  <v-app class="theme--light">
    <v-content class="main">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-navigation app
        v-model="bottomNav"
        :value="true"
        fixed
        grow
        color="teal"
      >
      <v-btn to="/estudiante/amigos" nuxt class="btn-nav">
        <span>Amigos</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn to="/estudiante/perfil" nuxt class="btn-nav">
        <span>Perfil</span>
        <v-icon>mdi-face-profile</v-icon>
      </v-btn>
      <v-btn to="/estudiante/actividad" nuxt class="btn-nav">
        <span>Actividad</span>
        <v-icon>mdi-dice-6</v-icon>
      </v-btn>
      <v-btn to="/estudiante/tienda" nuxt class="btn-nav">
        <span>Tienda</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>
<style scoped>
  .theme--light {
    background: #fafafa; 
    color: rgba(0, 0, 0, 0.87);
  }

  .main {
    background-color: rebeccapurple;
  }

  .btn-nav {
      height: 56px !important;
  }
</style>