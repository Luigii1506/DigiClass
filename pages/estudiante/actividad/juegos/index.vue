<template>
  <div style="position: relative">
    <v-list >
        <div class="title-lista-alumnos">
            Lista de juegos
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
              @click="toGame(index, item.type)"
          >
              <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

              <v-list-item-content class="item-content">
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.categoria"></v-list-item-subtitle>
                  <v-list-item-subtitle v-html="'Dificultad ' + item.dificultad"></v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>
        </template>
        </div>
    </v-list>
  </div>
</template>


<script>
  export default {
    layout: 'estudianteLayout',
    data: () => ({
      items: null
    }),
    methods: {
        toGame(index, type) {
          console.log(index);
          if(type == 'tienda') {
            this.$router.push({name: 'estudiante-actividad-juegos-tienda', params: {index: index}});
          } 
        }
    },
    mounted() {
      this.items = this.$store.getters.loadTienda;
      console.log(this.items);
    }
  }
</script>


<style scoped>

</style>


<style scoped>
    .fab {
        bottom: 15px !important;
    }

    .title-lista-alumnos {
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

