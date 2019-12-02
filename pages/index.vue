<template>
  <v-container>
    <v-layout
      row
      wrap
    >
      <v-flex xs12 md6>
        <v-card color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
