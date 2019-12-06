<template>
    <v-card class="v-card-menu">
        <div class="title-actividad">
          <img src="@/static/logo.png" class="img-logo"> 
        </div>
        <div class="row-wrapper">
          <v-row class="v-row">
            <v-col cols="12" sm="6">
                <v-card class="v-card-actividad" @click="goMaestro"> 
                  <div class="vertical">
                    <v-row>
                      <v-col cols="12">
                        <img src="https://image.flaticon.com/icons/svg/1597/1597110.svg" class="icono-actividad"/>
                      </v-col>
                      <v-col cols="12">
                        <div class="agregar-actividad"> Maestro</div>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card class="v-card-actividad" @click="goEstudiante">
                  <div class="vertical">
                    <v-row>
                      <v-col cols="12">
                        <img src="https://image.flaticon.com/icons/svg/1046/1046372.svg" class="icono-actividad"/>
                      </v-col>
                      <v-col cols="12">
                        <div class="agregar-actividad"> Alumno</div>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
            </v-col>
          </v-row>
        </div>
    </v-card>
</template>

<script>

export default {
  layout: 'home',
  methods: {
    goMaestro() {
      this.$router.push({ name: "maestro-perfil" });
    },
    goEstudiante() {
      this.$router.push({ name: "estudiante-actividad" });
    }
  },
}
</script>

<style scoped>

  .img-logo {
    margin: auto;
    display: block;
    max-width: 500px;
    width: 100%;
  }

  .v-card-menu {
    background-color: white;
  }

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
    width: 100%;
    height: 30%;
  }

  .v-card-menu {
    height: calc( 100vh - 35px);
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
    height: 60%;
  }

  .agregar-actividad {
    text-align: center;
    color: rebeccapurple;
    font-weight: 900;
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    .title-actividad {
      display: none;
    }

    .row-wrapper {
      height: calc( 100vh - 35px);
      background-color: rebeccapurple;
      border: 3px solid white;
    }


    .v-card-actividad {
      height: 185px;
    }
  }

</style>

