<template>
  <v-card class="v-card">
    <div class="title-calendar">
        Calendario de actividades
    </div>
    <div class="calendar-wrapper">
      <v-sheet class="v-calendar-wrapper">
        <v-calendar
          type="month"
          now="2019-01-08"
          value="2019-01-08"
          :events="events"
        ></v-calendar>
      </v-sheet>
    </div>
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
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card>
</template>

<script>
  export default {
    layout: 'maestroLayout',
    data: () => ({
      events: [
        {
          name: 'Estudio de tablas',
           start: '2019-01-14',
           end: '2019-01-17'
        },
        {
          name: 'Actividad rompecabezas',
          start: '2019-01-07',
        },
        {
          name: 'Actividad mi tienda',
          start: '2019-01-03',
        },
        {
          name: 'Examen',
          start: '2019-01-25',
        },
      ],
    }),
  }
</script>

<style scoped>

  .fab {
    bottom: 15px !important;
  }

  .title-calendar {
    text-align: center;
    color: rebeccapurple;
    font-size: 24px;
    font-weight: 700;
    padding-top: 8px;
  }

  .v-card {
     height: calc( 100vh - 85px);
  }

  .v-calendar-wrapper {
    height: calc(100% - 15px);
    max-height: 500px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    border: 3px solid rebeccapurple;
    margin-left: 10px;
    margin-right: 10px;
  }

  .calendar-wrapper {
    height: calc(100% - 44px);
  }

</style>

