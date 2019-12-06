import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      grupos: [
        {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            school: 'Colegio Ninos Heroes',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            school: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            school: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            school: 'Birthday gift',
            subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
          }
      ],
      prueba: ''
    },
    mutations: {
        setGrupos(state, grupos) {
            state.grupos = grupos;
        }, 
        addGrupos(state, grupos) {
            state.grupos.push(grupos)
        },
        setPrueba(state, prueba) {
            state.prueba = prueba;
        }
    },
    actions: {     
        addGrupos(vueContext, grupos) {
           vueContext.commit('addGrupos', grupos);
        },
        setGrupos(vueContext, grupos) {
            vueContext.commit('setGrupos', grupos);
        }
    },
    getters: {
        loadGrupos(state) {
            return state.grupos;
        }, 
        loadPrueba(state) {
            return state.prueba;
        }
    }
  });
};

export default createStore;
