<template>
  <div style="position: relative">
    <v-list >
        <div class="title-lista-alumnos">
            Lista de alumnos
        </div>
        <div class="list-wrapper">
            <v-list-item
                v-for="item in items"
                :key="item.title"
                @click=""
            >
                <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon color="deep-purple accent-4">mdi-information</v-icon>
                </v-list-item-icon>
            </v-list-item>
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
        @click="addStudent"
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
      i: 0
    }),
    mounted() {
      this.i = this.$route.params.id;
      this.items = this.$store.getters.loadEstudiantes[this.i]
    },
    methods: {
      addStudent() {
        this.$router.push({name: 'maestro-formAlumnos', params: { id: this.i}})
      }
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

