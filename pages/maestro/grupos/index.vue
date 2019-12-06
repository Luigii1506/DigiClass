<template>
  <div style="position: relative">
    <v-list three-line>
      <div class="title-grupos">
        Lista de Grupos
      </div>
      <div class="list-wrapper">
        <template v-for="(item, index) in items">
          <v-subheader
              v-if="item.header"
              :key="index"
              v-text="item.header"
          ></v-subheader>

          <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
          ></v-divider>

          <v-list-item
              v-else
              :key="index"
              @click="toDetail(index)"
          >
              <v-list-item-avatar>
                  <v-avatar color="teal" size="48">
                      <span class="white--text headline">{{item.name}}</span>
                  </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content class="item-content">
                  <v-list-item-title v-html="item.school"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.select"></v-list-item-subtitle>
                  <v-list-item-subtitle v-html="item.location"></v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>
        </template>
      </div>
    </v-list>
    <v-fab-transition>
      <v-btn
        class="fab"
        color="pink"
        dark
        absolute
        bottom
        right
        fab
        large
        to="/maestro/formGrupos" nuxt
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>


<script>
  export default {
    layout: 'maestroLayout',
    data: () => ({
      items: null,
    }),
    methods: {
    toDetail(url) {
      console.log('prueba', url)
      this.$router.push({ name: "maestro-grupos-id", params: { id: url } });
    }
  },
  mounted() {
    console.log('montada', this.$store.getters.loadGrupos);
    this.items = this.$store.getters.loadGrupos;
  }
}
</script>

<style scoped>
    .fab {
        bottom: 15px !important;
    }

    .title-grupos {
        text-align: center;
        color: rebeccapurple;
        font-size: 24px;
        font-weight: 700;
    }

    .list-wrapper {
      overflow-y: auto;
      height: calc( 100vh - 135px);
    }
</style>

