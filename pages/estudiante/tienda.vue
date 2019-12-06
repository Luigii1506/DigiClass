<template>
    <v-card class="v-card-menu ">
      <div class="title-actividad">
        Tienda
      </div>
      <div class="row-wrapper">
        tienda
      </div>      
    </v-card>
</template>

<script>

export default {
  layout: 'estudianteLayout',
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

