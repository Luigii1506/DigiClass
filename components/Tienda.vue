<template>
    <div class="main-wrapper"> 
        <div>
            <v-alert :value="alert_succes" type="success">
                Respuesta correcta
            </v-alert>
            <v-alert :value="alert_error" type="error">
                Respuesta equivocada, vuelte a internarlo
            </v-alert>
            <div id="instructions" class="paper">
                <div class="title-tienda">
                    Mi Lista de Compras
                </div>
                <v-row>
                   <v-col cols="12" md="4" v-for="(item, index) in storeData" :key="index">
                       <div class="list-wrapper">
                            <span class="span-list">{{item.total}} x</span>
                            <img :src="item.img" class="img-prodcuto-lista"> 
                       </div>
                    </v-col>
                </v-row>
            </div>
        </div>
        <div class="price-wrapper">
            <v-row wrap>
                <v-col cols="12" md="4" v-for="(item, index) in storeData" :key="index">
                    <div class="price-white">
                        <img :src="item.img" class="img-monedas">
                        <span class="tag">$ {{item.price}}.00</span>
                    </div>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-row wrap>
                <v-col cols="12" md="4">
                    <img src="~/static/1_peso_T.png" class="img-monedas" style="margin-bottom: 15px;">
                    <v-text-field type="number" min="0" v-model.number="objeto1" class="input-numbers" outlined single-line hide-details color="light-green accent-3"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <img src="~/static/2_peso_T.png" class="img-monedas" style="margin-bottom: 16px;">
                    <v-text-field type="number" min="0" v-model.number="objeto2" class="input-numbers" outlined single-line hide-details color="light-green accent-3"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <img src="~/static/5_peso_T.png" class="img-monedas" style="margin-bottom: 21px;">
                   <v-text-field type="number" min="0" v-model.number="objeto3" class="input-numbers" outlined single-line hide-details color="light-green accent-3"></v-text-field>
                </v-col>
                <v-col cols="12" class="btn-col">
                    <v-btn @click="comparar" class="btn-comprar">Comprar</v-btn>
                </v-col>
            </v-row>
        </div>
        <v-dialog
          v-model="dialog"
          max-width="500"
        >
        <v-card>
          <v-card-title class="headline">Reglas del juego</v-card-title>
          <v-card-text>
            Compra todo lo que se te pide en la lista utilizando las monedas necesarias para pagar exactamente el total.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="cancelGame"
            >
              Cancelar
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Aceptar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
        <v-dialog
            v-model="dialog2"
            max-width="350"
        >
        <v-card>
            <v-card-title class="headline">Felicidades, ganaste ...</v-card-title>

            <v-card-text>
               <div>
                   <v-row>
                       <v-col cols="12">
                           <div class="coin-wrapper">       
                                <span class="icon-span"> + 3 </span>
                                <img src="https://image.flaticon.com/icons/svg/336/336007.svg" class="coin" />
                            </div>
                           
                       </v-col>
                       <v-col cols="12">
                           Muy bien hecho, sigue asi
                       </v-col>
                   </v-row>
                </div>
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                text
                @click="dialog2 = false"
            >
                Agree
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
        <v-dialog
            v-model="dialog3"
            max-width="350"
        >
        <v-card>
            <v-card-title class="headline">{{this.dialog3Text}}</v-card-title>

            <v-card-text>
               Vuelve a intentarlo, puedes apoyarte de tu libreta o calculadora si es necesario.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                text
                @click="dialog3 = false"
            >
                Agree
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default  {
    data: () => ({
        dialog3Text: '',
        dialog3: false,
        dialog2: false,
        dialog: true,
        alert_succes: false,
        alert_error: false,
        objeto1: 0,
        objeto2: 0,
        objeto3: 0,
        valor1: 0,
        storeData: null,
        dificultad: 0
    }),
    methods: {
        cancelGame() {
            this.$router.push('/estudiante/actividad/juegos')
        },
        comparar() {
            var totalPagar = 0;
            var totalMonedas = (this.objeto1 + (2 * this.objeto2) + (5 * this.objeto3));
            for(let i = 0; i < this.storeData.length; i++) {
                totalPagar += (this.storeData[i].price * this.storeData[i].total);
            }
            console.log(totalPagar);
            console.log(totalMonedas)
            if(totalPagar == totalMonedas) {
                console.log('correcto')
                //this.alert_succes = true;
                //this.alert_error = false;
                this.dialog2 = true;

            } else if (totalPagar >= totalMonedas ){
                console.log('incorrecto');
                this.dialog3Text = "Diste dinero de menos";
                this.dialog3 = true;
                //this.alert_error = true;
                //this.alert_succes = false;
            } else if (totalPagar <= totalMonedas) {
                 console.log('incorrecto');
                this.dialog3Text = "Diste dinero de mas";
                this.dialog3 = true;
            }
        }
    },
    mounted() {
        let i = this.$route.params.index;
        this.dificultad = this.$store.getters.loadTienda[i].dificultad;
        this.storeData = this.$store.getters.loadTienda[i].storeData;
         console.log('i', i);
          console.log('store', this.storeData);
        console.log('data', this.storeData);
        if(this.dificultad == 0) {
            console.log('Dificultado 0');
            for(let i = 0; i < this.storeData.length; i++) {
                this.storeData[i].total = 1;
            }
        } else if (this.dificultad == 1) {
            console.log('Dificultado 1');
            for(let i = 0; i < this.storeData.length; i++) {
                this.storeData[i].total = Math.floor(Math.random() * 3) + 1;
            }
        } else if (this.dificultad == 2) {
            console.log('Dificultado 2');
            for(let i = 0; i < this.storeData.length; i++) {
                this.storeData[i].total = Math.floor(Math.random() * 5) + 1;;
            }
        } else {
            console.log('Dificultado 3');
            for(let i = 0; i < this.storeData.length; i++) {
                this.storeData[i].total = Math.floor(Math.random() * 7) + 1;;
            }
        }
    }
}
</script>

<style scoped>

    .coin-wrapper {
        width: max-content;
        margin: auto;
    }

    .icon-span {
        font-size: 40px;
        bottom: m;
        position: relative;
        top: -10px;
        color: goldenrod;
    }

    .coin {
        width: 50px;
    }

    .btn-col {
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .input-numbers {
        background-color: white;
        max-width: 400px;
        margin: auto;
    }

    .btn-comprar {
        margin: auto !important;
        display: block !important;
        font-size: 41px !important;
        height: auto !important;
        border-radius: 50px !important;
        padding: 15px !important;
        background-color: limegreen !important; 
        color: white !important;
    }

    .price-white {
        background-color: burlywood;
        border-radius: 30px;
        padding-bottom: 27px;
        padding-top: 20px;
        max-width: 371px;
        width: auto;
        margin: auto;
    }

    .price-wrapper {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .main-wrapper {
        margin-top: 15px;
    }

    .title-tienda {
        text-align: center;
        font-family: 'Indie Flower', cursive;
        font-size: 60px;
        color: black;
        margin-bottom: 25px;
        line-height: 60px
    }

    .span-list {
        top: -18px;
        position: relative;
        font-family: 'Indie Flower', cursive;
        font-size: 50px;
    }

    .img-prodcuto-lista {
        width: 75px;
    }

    .list-wrapper {
        width: max-content;
        margin: auto;
    }

    .img-monedas {
        margin: auto;
        display: block;
        width: 135px;
    }

    .tag {
        margin-top: 20px;
        display: inline-block;
        width: 230px;
        text-align: center;
        height: 38px;
        background-color: #979797;
        -webkit-border-radius: 3px 4px 4px 3px;
        -moz-border-radius: 3px 4px 4px 3px;
        border-radius: 3px 4px 4px 3px;
        border-left: 1px solid #979797;
        /* This makes room for the triangle */
        margin-left: 19px;
        position: relative;
        color: white;
        font-weight: 300;
        font-size: 22px;
        line-height: 38px;
        padding: 0 10px 0 10px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        font-size: 27px;
        font-weight: 600;
    }

    /* Makes the triangle */
    .tag:before {
        content: "";
        position: absolute;
        display: block;
        left: -19px;
        width: 0;
        height: 0;
        border-top: 19px solid transparent;
        border-bottom: 19px solid transparent;
        border-right: 19px solid #979797;
    }

    /* Makes the circle */
    .tag:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        width: 4px;
        height: 4px;
        display: block;
        position: absolute;
        left: -9px;
        top: 17px;
    }

    #instructions {font: 16px 'AmericanTypewriter', Cambria, Georgia; color: #282625; margin: 0 auto; }
    .paper {
        min-height: 122px;
        height: auto;
        width: 100%;
        padding-right: 55px;
        padding-left: 55px;
        padding-top: 60px;
        padding-bottom: 15px;
        position: relative;
        border: 1px solid #B5B5B5;
        background: white;
        background: -webkit-linear-gradient(to top, #DFE8EC 0%, white 8%) 0 57px;
        background: -moz-linear-gradient(to top, #DFE8EC 0%, white 8%) 0 57px;
        background: linear-gradient(to top, #DFE8EC 0%, white 8%) 0 57px;
        -webkit-background-size: 100% 30px;
        -moz-background-size: 100% 30px;
        -ms-background-size: 100% 30px;
        background-size: 100% 30px;
    }
    .paper::before {content:""; z-index:-1; margin:0 1px; height:10px; position:absolute; bottom:-3px; left:0; background:white; border:1px solid #B5B5B5;}
    .paper::after {content:''; position:absolute; width:0px; top:0; left:39px; bottom:0; border-left:1px solid #F8D3D3;}

</style>