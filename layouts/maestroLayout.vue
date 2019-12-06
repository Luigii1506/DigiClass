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
      <v-btn to="/maestro/grupos" nuxt class="btn-nav">
        <span>Grupos</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn to="/maestro/perfil" nuxt class="btn-nav">
        <span>Perfil</span>
        <v-icon>mdi-face-profile</v-icon>
      </v-btn>
      <v-btn to="/maestro/actividad" nuxt class="btn-nav">
        <span>Actividad</span>
        <v-icon>mdi-dice-6</v-icon>
      </v-btn>
      <v-btn to="/maestro/calendario" nuxt vclass="btn-nav">
        <span>Calendario</span>
        <v-icon>mdi-calendar-month</v-icon>
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