<template>
    <v-card class="v-card">
        <div class="title-agregar-grupo">
            Agregar juego "Mi tienda"
        </div>
        <div class="form-wrapper">
            <v-container class="container-form">
                <v-form
                    ref="form"
                    v-model="valid"
                    :lazy-validation="lazy"
                >
                    <v-text-field
                        v-model="grupo.categoria"
                        :rules="categoriaRules"
                        label="Categoria de la tienda"
                        required
                    ></v-text-field>
                    <v-select
                        v-model="grupo.select"
                        :items="items"
                        :rules="[v => !!v || 'Dificultad es requerida']"
                        label="Dificultad de la tienda"
                        required
                    ></v-select>
                      <v-text-field
                        v-model="grupo.storeData[0].img"
                        :rules="imgRules"
                        label="Url objeto 1"
                        required
                    ></v-text-field>
                    <v-text-field 
                      type="number" 
                      v-model.number="grupo.storeData[0].price"
                      :rules="priceRules"
                      label="Precio objeto 1"
                      required></v-text-field>
                       <v-text-field
                        v-model="grupo.storeData[1].img"
                        :rules="imgRules"
                        label="Url objeto 2"
                        required
                    ></v-text-field>
                    <v-text-field 
                      type="number" 
                      v-model.number="grupo.storeData[1].price"
                      :rules="priceRules"
                      label="Precio objeto 2"
                      required></v-text-field>
                       <v-text-field
                        v-model="grupo.storeData[2].img"
                        :rules="imgRules"
                        label="Url objeto 3"
                        required
                    ></v-text-field>
                    <v-text-field 
                      type="number" 
                      v-model.number="grupo.storeData[2].price"
                      :rules="priceRules"
                      label="Precio objeto 3"
                      required></v-text-field>
                    <v-btn
                        color="success"
                        @click="addTienda"
                        class="btn-submit"
                        >
                        Agregar
                    </v-btn>
                </v-form>
            </v-container>
        </div>
    </v-card>
</template>

<script>
  export default {
    layout: 'maestroLayout',
    data: () => ({
      valid: true,
      categoria: '',
      school: '',
      categoriaRules: [
        v => !!v || 'La categoria es obligatoria',
      ],
       schoolRules: [
        v => !!v || 'El nombre  de la escuela es requerido',
      ],
       imgRules: [
        v => !!v || 'La imagen es requerida',
      ],
      priceRules: [
        v => !!v || 'El precio es requerido',
      ],
      select: null,
      items: [
        'Nivel 0',
        'Nivel 1',
        'Nivel 2',
        'Nivel 3',
      ],
      checkbox: false,
      lazy: false,
      location: '',
      grupo: {
         storeData :[
            {img: null, price: 0, total: 0},
            {img: null, price: 0, total: 0},
            {img: null, price: 0, total: 0}
          ],
          dificultad: 0,
          title: 'Mi tienda', 
          avatar: 'https://image.flaticon.com/icons/svg/641/641829.svg', 
          type: "tienda",
          categoria: ""
      }
    }),

    methods: {
      addTienda () {

        if(this.select == 'Nivel 0') {
          this.grupo.dificultad = 0;
        } else if(this.select == 'Nivel 1') {
          this.grupo.dificultad = 1;
        } else if(this.select == 'Nivel 2') {
          this.grupo.dificultad = 2;
        } else {
          this.grupo.dificultad = 3;
        }

        this.$store.dispatch('addTienda', this.grupo).then(() => {
          this.$router.push("/maestro/actividad");
        });
      }
    },
  }
</script>

<style scoped>

.btn-submit {
    margin-top: 20px;
}

.v-card {
    height: calc(100vh - 85px);
}

.title-agregar-grupo {
    text-align: center;
    color: rebeccapurple;
    font-size: 24px;
    font-weight: 700;
    padding-top: 8px;
}

.form-wrapper {
    height:calc(100% - 44px);
    overflow-y: auto;
}

.container-form {
    max-width: 680px;
}

</style>

