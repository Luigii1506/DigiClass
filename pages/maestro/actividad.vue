<template>
    <v-card class="v-card">
      <div class="title-actividad">
        Crear actividades
      </div>
      <div class="row-wrapper">
        <v-row class="v-row">
          <v-col cols="12" sm="6">
              <v-card class="v-card-actividad">
                <div class="agregar-actividad"> Agregar actividad</div>
              </v-card>
          </v-col>
          <v-col cols="12" sm="6">
              <v-card class="v-card-actividad">
                <div class="agregar-actividad"> Agregar juego</div>
              </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
</template>

<script>

export default {
  layout: 'maestroLayout',
}
</script>

<style scoped>

  .title-actividad {
    text-align: center;
    color: rebeccapurple;
    font-size: 24px;
    font-weight: 700;
    padding-top: 8px;
  }

  .v-card {
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
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    font-size: 30px;
  }

</style>

