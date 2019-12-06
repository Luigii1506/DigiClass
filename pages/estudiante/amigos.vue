<template>
  <div style="position: relative">
    <v-list >
        <div class="title-lista-alumnos">
            Lista de amigos
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
  </div>
</template>


<script>
  export default {
    layout: 'estudianteLayout',
    data: () => ({
      items: [
        { active: true, title: 'Luis Gerardo Encinas Ramos', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { active: true, title: 'Edgar Flores Perez', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { active: true, title: 'Andres Rodriguez Sanchez', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
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

