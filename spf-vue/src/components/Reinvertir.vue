<template>
  <div class="d-flex justify-content-center">
    <ul class="list-group w-50 mt-4">
      <li class="list-group-item">Monto final</li>
      <li
        class="list-group-item"
        v-for="(item, index) in this.resultados"
        :key="index"
      >
        {{ calcular() }} Periodo {{ index + 1 }}: {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // {{ calcular() }}{{ resultado }}
  name: "ReinvertirComponente",
  data() {
    return {
      resultados: [],
    };
  },
  props: {
    reinvertir: Boolean,
    verificado: Boolean,
    dias: Number,
    monto: Number,
  },
  methods: {
    montoFinal(monto, porcentaje) {
      let montoFinal;
      montoFinal = monto + monto * ((this.dias / 360) * (porcentaje / 100));
      return parseFloat(montoFinal);
    },
    reinversion(porcentaje) {
      this.resultados = [];
      let nuevoMonto = this.monto;
      for (let i = 0; i < 4; i++) {
        console.log(this.monto);
        nuevoMonto = this.montoFinal(nuevoMonto, porcentaje);
        this.resultados.push(nuevoMonto.toFixed(2));
      }
    },
    calcular() {
      if (this.verificado === true) {
        switch (true) {
          case this.dias >= 30 || this.dias <= 60:
            this.reinversion(40);

            break;
          case this.dias >= 61 || this.dias <= 120:
            this.reinversion(45);
            break;
          case this.dias >= 121 || this.dias <= 365:
            this.reinversion(50);
            break;
          case this.dias >= 366:
            this.reinversion(65);
            break;
          default:
            break;
        }
      }
    },
  },
};
</script>
