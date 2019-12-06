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
                @click="toGame"
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
  </div>
</template>


<script>
  export default {
    layout: 'maestroLayout',
    data: () => ({
      items: [
        { active: true, title: 'Mi tienda', avatar: 'https://image.flaticon.com/icons/svg/641/641829.svg' },
        { active: true, title: 'Rompecabezas', avatar: 'https://image.flaticon.com/icons/svg/1256/1256638.svg' },
      ]
    }),
    methods: {
        toGame() {
            this.$router.push('/estudiante');
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

