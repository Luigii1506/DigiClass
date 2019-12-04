<template>
    <v-card class="v-card">
        <div class="title-agregar-grupo">
            Agregar grupo
        </div>
        <div class="form-wrapper">
            <v-container class="container-form">
                <v-form
                    ref="form"
                    v-model="valid"
                    :lazy-validation="lazy"
                >
                    <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Nombre del grupo"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="school"
                        :rules="schoolRules"
                        label="Nombre de la escuela"
                        required
                    ></v-text-field>
                    <v-select
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'Grado es requerido']"
                        label="Grado del grupo"
                        required
                    ></v-select>
                      <v-text-field
                        v-model="location"
                        :rules="locationRules"
                        label="Informacion extra del grupo"
                        required
                    ></v-text-field>
                    <v-btn
                        color="success"
                        @click=""
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
      name: '',
      school: '',
      nameRules: [
        v => !!v || 'El nombre del grupo es requerido',
      ],
       schoolRules: [
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
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
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

