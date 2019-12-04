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
              :key="item.title"
              @click="toDetail(123)"
          >
              <v-list-item-avatar>
                  <v-avatar color="teal" size="48">
                      <span class="white--text headline">103</span>
                  </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content class="item-content">
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
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
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Colegio Ninos Heroes',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }),
    methods: {
    toDetail(url) {
      console.log('prueba', url)
      this.$router.push({ name: "maestro-grupos-id", params: { id: url } });
    }
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

