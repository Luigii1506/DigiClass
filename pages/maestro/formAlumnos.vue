<template>
    <v-card class="v-card">
        <div class="title-agregar-grupo">
            Agregar alumnos
        </div>
        <div class="form-wrapper">
            <v-container class="container-form">
                <v-form
                    ref="form"
                    v-model="valid"
                    :lazy-validation="lazy"
                >
                    <v-text-field
                        v-model="alumno.avatar"
                        :rules="avatarules"
                        label="Imagen del alumno"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="alumno.title"
                        :rules="titleRules"
                        label="Nombre del alumno"
                        required
                    ></v-text-field>
                
                    <v-btn
                        color="success"
                        @click="addEstudent"
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
      avatarules: [
        v => !!v || 'El nombre del grupo es requerido',
      ],
       titleRules: [
        v => !!v || 'El nombre  de la escuela es requerido',
      ],
       locationRules: [
        v => !!v || 'La informacion extra es necesaria',
      ],
      select: null,
      items: [
        'Primer grado',
        'Segundo grado',
        'Tercer grado',
        'Cuarto grado',
        'Quinto grado',
        'Sexto grado',
      ],
      checkbox: false,
      lazy: false,
      location: '',
      alumno: {
        avatar: '',
        title: ''
      },
      index: 0
    }),

    methods: {
      addEstudent () {
        console.log('Index del grupo',this.index);
        this.$store.dispatch('addEstudiante', {alumno: this.alumno, index: this.index } ).then(() => {
          console.log('En el estore', this.$store.getters.loadEstudiantes[this.index]);
          this.$router.push("/maestro/grupos/" + this.index);
      });
      }
    },
    mounted() {
      this.index = this.$route.params.id;
      console.log(this.index);

    }
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

