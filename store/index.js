import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      grupos: [
        {
            name: '2B',
            school: 'Colegio Ninos Heroes',
            select: "Segundo Grado",
            location: "Salon 203"
          },
          {
            name: '1C',
            school: 'Colegio la paz',
            select: "Primer Grado",
            location: "Salon 103"
          },
          {
            name: '4B',
            school: 'Colegio Reina Isabel',
            select: "Cuarto Grado",
            location: "Salon 205"
          },
          {
            name: '3A',
            school: 'Colegio Aleman Cuahtemoc Hank',
            select: "Tercer Grado",
            location: "Salon 233"
          },
          {
            name: '3A',
            school: 'Colegio Aleman Cuahtemoc Hank',
            select: "Tercer Grado",
            location: "Salon 233"
          },
          {
            name: '3A',
            school: 'Colegio Aleman Cuahtemoc Hank',
            select: "Tercer Grado",
            location: "Salon 233"
          }
      ],
      storeData: [
        {
          storeData:[
            {img: 'https://image.flaticon.com/icons/svg/135/135728.svg', price: 3.00, total: 0},
            {img: 'https://image.flaticon.com/icons/svg/415/415767.svg', price: 2.00, total: 0},
            {img: 'https://image.flaticon.com/icons/svg/2224/2224255.svg', price: 4.00, total: 0}
          ],
          dificultad: 0,
          title: 'Mi tienda', 
          avatar: 'https://image.flaticon.com/icons/svg/641/641829.svg', 
          type: "tienda",
          categoria: "Frutas"
        },
        {
          storeData:[
            {img: 'https://image.flaticon.com/icons/svg/135/135666.svg', price: 2.00, total: 0},
            {img: 'https://image.flaticon.com/icons/svg/735/735846.svg', price: 5.00, total: 0},
            {img: 'https://image.flaticon.com/icons/svg/1127/1127837.svg', price: 4.00, total: 0},
          ],
          dificultad: 1,
          title: 'Mi tienda', 
          avatar: 'https://image.flaticon.com/icons/svg/641/641829.svg', 
          type: "tienda",
          categoria: "Bebidas"
        },
        {
          storeData:[
            {img: 'https://image.flaticon.com/icons/svg/1703/1703028.svg', price: 5.00, total: 0},
            {img: 'https://image.flaticon.com/icons/svg/123/123281.svg', price: 7.00, total: 0},
            {img: 'https://image.flaticon.com/icons/svg/123/123283.svg', price: 4.00, total: 0}
          ],
          dificultad: 2,
          title: 'Mi tienda', 
          avatar: 'https://image.flaticon.com/icons/svg/641/641829.svg', 
          type: "tienda",
          categoria: "Carnes"
        },
        {
          storeData:[
            {img: 'https://image.flaticon.com/icons/svg/1159/1159085.svg', price: 4.00, total: 0},
            {img: 'https://image.flaticon.com/icons/svg/2224/2224128.svg', price: 6.00, total: 0},
            {img: 'https://image.flaticon.com/icons/svg/347/347565.svg', price: 3.00, total: 0},
          ],
          dificultad: 3,
          title: 'Mi tienda', 
          avatar: 'https://image.flaticon.com/icons/svg/641/641829.svg', 
          type: "tienda",
          categoria: "Cereales"
        },
      ],
      estudiantes: [
        [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
        [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
        [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
        [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
        [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
        [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ]
      ]
    },
    mutations: {
        setGrupos(state, grupos) {
            state.grupos = grupos;
        }, 
        addGrupos(state, grupos) {
            state.grupos.push(grupos);
            state.estudiantes.push([]);
        },
        setTienda(state, tienda) {
          state.storeData = tienda;
        },
        addTienda(state, tienda) {
          state.storeData.push(tienda);
        },
        setEstudiantes(state, estudiante) {
          state.estudiantes = estudiante;
        }, 
        addEstudiante(state, estudiante) {
          state.estudiantes[estudiante.index].push(estudiante.alumno);
        }
    },
    actions: {     
        addGrupos(vueContext, grupos) {
           vueContext.commit('addGrupos', grupos);
        },
        setGrupos(vueContext, grupos) {
            vueContext.commit('setGrupos', grupos);
        },
        addTienda(vueContext, tienda) {
          vueContext.commit('addTienda', tienda);
        },
        setTienda(vueContext, tienda) {
          vueContext.commit('setTienda', tienda);
        },
        setEstudiantes(vueContext, estudiante) {
          vueContext.commit('setEstudiantes', estudiante);
        },
        addEstudiante(vueContext, estudiante) {
          vueContext.commit('addEstudiante', estudiante);
        }
    },
    getters: {
        loadGrupos(state) {
            return state.grupos;
        },
        loadTienda(state) {
          return state.storeData;
        },
        loadEstudiantes(state) {
          return state.estudiantes;
        }
    }
  });
};

export default createStore;
