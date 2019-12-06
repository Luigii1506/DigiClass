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
      <v-btn to="/maestro/grupos" nuxt>
        <span>Amigos</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn to="/maestro/perfil" nuxt>
        <span>Perfil</span>
        <v-icon>mdi-face-profile</v-icon>
      </v-btn>
      <v-btn to="/estudiante/actividad" nuxt>
        <span>Actividad</span>
        <v-icon>mdi-dice-6</v-icon>
      </v-btn>
      <v-btn to="/maestro/calendario" nuxt>
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
</style>