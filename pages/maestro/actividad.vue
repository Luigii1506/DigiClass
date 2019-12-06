<template>
    <v-card class="v-card-menu ">
      <div class="title-actividad">
        Crear actividades
      </div>
      <div class="row-wrapper">
        <v-row class="v-row">
          <v-col cols="12" sm="6">
              <v-card class="v-card-actividad" @click.stop="dialog2 = true"> 
                <div class="vertical">
                  <v-row>
                    <v-col cols="12">
                      <img src="https://image.flaticon.com/icons/svg/744/744422.svg" class="icono-actividad"/>
                    </v-col>
                    <v-col cols="12">
                      <div class="agregar-actividad"> Agregar actividad</div>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
          </v-col>
          <v-col cols="12" sm="6">
              <v-card class="v-card-actividad" @click.stop="dialog = true">
                <div class="vertical">
                  <v-row>
                    <v-col cols="12">
                      <img src="https://image.flaticon.com/icons/svg/394/394269.svg" class="icono-actividad"/>
                    </v-col>
                    <v-col cols="12">
                      <div class="agregar-actividad"> Agregar juego</div>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
          </v-col>
        </v-row>
      </div>
        <v-dialog
          v-model="dialog"
          max-width="500"
        >
        <v-card>
          <v-card-title class="headline"> Selecciona el juego a crear</v-card-title>
          <v-card-text>
            <v-form> 
              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Juego es requerido']"
                label="Juego"
                required
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="checkGame"
            >
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
          v-model="dialog2"
          max-width="500"
        >
        <v-card>
          <v-card-title class="headline"> Selecciona la actividad a crear</v-card-title>
          <v-card-text>
            <v-form> 
              <v-select
                v-model="select2"
                :items="items2"
                :rules="[v => !!v || 'Actividad es requerida']"
                label="Actividad"
                required
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog2 = false"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="dialog2 = false"
            >
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
</template>

<script>

export default {
  layout: 'maestroLayout',
  methods: {
    open() {
      console.log('abierto')
    },
    checkGame() {
      console.log(this.select);
      this.dialog = false;
      if(this.select == 'Mi tienda') {
        this.$router.push('/maestro/formTienda');
      } else {
      }
    }
  },
   data: () => ({
      dialog: false,
      dialog2: false,
      select2: null,
      select: null,
      items: [
        'Mi tienda',
        'Rompecabezas',
        'Memorama',
      ],
      items2: [
        'Examen',
        'Operaciones',
        'Lectura'
      ]
    }),
}
</script>

<style scoped>

  .vertical {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }

  .icono-actividad {
    width: 90px;
    margin: auto;
    display: block;
  }

  .title-actividad {
    text-align: center;
    color: rebeccapurple;
    font-size: 24px;
    font-weight: 700;
    padding-top: 8px;
  }

  .v-card-menu {
    height: calc( 100vh - 85px);
  }

  .v-row {
    margin: 0px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }

  .v-card-actividad {
    border: 3px solid rebeccapurple;
    height: 100%;
    max-width: 300px;
    margin: auto;
    height: 250px;
    width: auto;
    cursor: pointer;
  }

  .row-wrapper {
    height: calc(100% - 36px);
  }

  .agregar-actividad {
    text-align: center;
    color: rebeccapurple;
    font-weight: 900;
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    .v-card-actividad {
      height: 185px;
    }
  }

</style>

