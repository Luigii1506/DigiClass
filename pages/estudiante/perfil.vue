<template>
  <v-card class="v-card-profile">
    <div class="title-perfil">
        Perfil de alumno
    </div>
    <div class="perfil-wrapper">
      <div class="vertical-profile">
        <v-row style="margin: 0;">
          <v-col cols="12" md="5">
            <img src="https://icon-library.net/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg" class="img-perfil"/>
          </v-col>
          <v-col cols="12" md="7">
            <div class="vertical">
              <v-text-field
                value="John Doe"
                label="Solo"
                solo
                readonly
                ></v-text-field>
              <v-text-field
                value="John Doe"
                label="Solo"
                solo  
                readonly
              ></v-text-field>
              <v-text-field
                value="John Doe"
                label="Solo"
                solo
                readonly
              ></v-text-field>
              <v-text-field
                value="John Doe"
                label="Solo"
                solo
                readonly
              ></v-text-field>
              <div class="horizontal">
                <v-btn large color="primary" style="margin-right: 50px;">Editar</v-btn>
                <v-btn large color="error" to="/">Logout</v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
  export default {
    layout: 'estudianteLayout',
    data: () => ({
      events: [
        {
          name: 'Vacation',
          start: '2018-12-30',
          end: '2019-01-02',
        },
        {
          name: 'Meeting',
          start: '2019-01-07',
        },
        {
          name: '30th Birthday',
          start: '2019-01-03',
        },
        {
          name: 'New Year',
          start: '2019-01-01',
        },
        {
          name: 'Conference',
          start: '2019-01-21',
        },
        {
          name: 'Hackathon',
          start: '2019-01-30',
          end: '2019-02-01',
        },
      ],
    }),
  }
</script>

<style scoped>

  .horizontal {
    margin: auto;
    display: block;
    width: max-content;
  }

  .vertical-profile {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }

  .vertical {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }

  .fab {
    bottom: 15px !important;
  }

  .title-perfil {
    text-align: center;
    color: rebeccapurple;
    font-size: 24px;
    font-weight: 700;
    padding-top: 8px;
  }

  .v-card-profile {
     height: calc( 100vh - 85px);
  }

  .perfil-wrapper {
    height: calc(100% - 44px);
    overflow-y: auto;
  }

  .img-perfil {
    width: 100%;
    max-width: 450px;
    margin: auto;
    display: block;
  }

  @media only screen and (max-width: 965px) {
    .vertical-profile {
      position: unset;
      top: 0px;
      transform: unset;
      -webkit-transform: unset;
    }
  }

</style>

