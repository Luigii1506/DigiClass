<template>
    <v-row wrap>
        <v-col>
            <div>adsd</div>
            <v-text-field type="number" v-model.number="objeto1"></v-text-field>
        </v-col>
         <v-col>
            <div>adsd</div>
            <v-text-field type="number" v-model.number="objeto2"></v-text-field>
        </v-col>
         <v-col>
            <div>adsd</div>
            <v-text-field type="number" v-model.number="objeto3"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-btn @click="comparar">Darle click</v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        objeto1: 0,
        objeto2: 0,
        objeto3: 0
    }),
    methods: {
        comparar() {
            console.log(this.objeto1 + this.objeto2 + this.objeto3)
        }
    }
}
</script>

<style scoped>

</style>