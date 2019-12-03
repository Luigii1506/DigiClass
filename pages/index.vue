<template>
  <div>
    <v-layout
      row
      wrap
      class="row-logo"
    >
      <v-flex xs12>
         <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          class="img-logo"
        >
        </v-img>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex xs12 md6>
        <v-card color="primary" class="card-menu">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            class="img-teacher-student">
          </v-img>
        </v-card>
      </v-flex>
     <v-flex xs12 md6>
        <v-card color="primary" class="card-menu">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            class="img-teacher-student">
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  layout: 'home',
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style scoped>

  .row-logo {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .img-logo {
    width: 400px;
    height: 400px;
    margin: auto;
    display: block;
  }

  .img-teacher-student {
    width: 250px;
    height: 250px;
    margin: auto;
    padding-top: 20px;
  }

  .card-menu {
    width: 400px;
    height: 400px;
    margin: auto;
    display: block;
    padding-top: 30px;
  }

</style>

