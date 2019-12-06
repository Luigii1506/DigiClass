<template>
    <v-card class="v-card-menu ">
      <div class="title-actividad">
        En construcion...
      </div>
      <div class="row-wrapper">
        <v-col cols="12">
          <img src="https://image.flaticon.com/icons/svg/1660/1660192.svg" class="img-warning"/>
        </v-col>
        <v-col>
            <v-btn large color="primary" class="btn-logout" @click="logout">Logout</v-btn>
        </v-col>
      </div>      
    </v-card>
</template>

<script>

export default {
  layout: 'estudianteLayout',
  methods: {
    logout() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

.btn-logout {
  margin: auto;
  display: block;
}

.img-warning {
  width: 400px;
  margin: auto;
  display: block;
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
    text-align: center;
    color: #E53935;
    font-size: 36px;
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

