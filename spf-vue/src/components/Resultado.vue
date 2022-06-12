<template>
  <div class="d-flex justify-content-center">
    <div class="alert alert-dark mt-2 w-50" role="alert">
      <h4>Resultado</h4>
      {{ calcular() }}{{ resultado }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorComponente",
  data() {
    return {
      resultado: 0,
    };
  },
  props: {
    reinvertir: Boolean,
    verificado: Boolean,
    dias: Number,
    monto: Number,
  },
  methods: {
    montoFinal(porcentaje) {
      let montoFinal;
      montoFinal =
        this.monto + this.monto * ((this.dias / 360) * (porcentaje / 100));

      this.resultado = parseFloat(montoFinal).toFixed(2);
      console.log(this.resultado);
    },
    calcular() {
      if (this.verificado === true && this.reinvertir === false) {
        switch (true) {
          case this.dias >= 30 || this.dias <= 60:
            this.calculado = this.montoFinal(40);
            break;
          case this.dias >= 61 || this.dias <= 120:
            this.calculado = this.montoFinal(45);
            break;
          case this.dias >= 121 || this.dias <= 365:
            this.calculado = this.montoFinal(50);
            break;
          case this.dias >= 366:
            this.calculado = this.montoFinal(65);
            break;
          default:
            break;
        }
      }
    },
  },
};
</script>
