<template>
  <div class="container-sm">
    <form @submit.prevent="verificar()">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input
          placeholder="Ingrese su nombre"
          type="text"
          class="form-control"
          id="nombre"
          v-model="formulario.nombre"
        />
      </div>
      <div class="mb-3">
        <label for="monto" class="form-label">Monto a invertir</label>
        <input
          placeholder="Ingrese el monto a invertir"
          type="number"
          class="form-control"
          id="monto"
          v-model="formulario.monto"
        />
      </div>
      <div class="mb-3">
        <label for="dias" class="form-label">Cantidad de dias</label>
        <input
          placeholder="Ingrese la cantidad de dias"
          type="number"
          class="form-control"
          id="dias"
          v-model="formulario.dias"
        />
      </div>
      <div class="mb-3 form-check d-flex justify-content-center">
        <input
          v-model="formulario.reinvertir"
          type="checkbox"
          class="form-check-input"
          id="reinvertir"
        />
        <label class="form-check-label" for="reinvertir">Reinvertir</label>
      </div>
      <button type="submit" class="btn btn-primary">Calcular</button>
    </form>
    <Error v-show="formulario.mensaje != ''" :msg="formulario.mensaje" />
    <Resultado
      v-if="this.formulario.verificado && !this.formulario.reinvertir"
      :dias="this.formulario.dias"
      :monto="this.formulario.monto"
      :reinvertir="this.formulario.reinvertir"
      :verificado="this.formulario.verificado"
    />
    <Reinvertir
      v-if="this.formulario.verificado && this.formulario.reinvertir"
      :dias="this.formulario.dias"
      :monto="this.formulario.monto"
      :reinvertir="this.formulario.reinvertir"
      :verificado="this.formulario.verificado"
      ref="child"
    />
  </div>
</template>

<script>
import Error from "@/components/Error.vue";
import Resultado from "@/components/Resultado.vue";
import Reinvertir from "@/components/Reinvertir.vue";
export default {
  name: "FormularioComponente",
  components: {
    Error,
    Resultado,
    Reinvertir,
  },

  data() {
    return {
      formulario: {
        nombre: "",
        monto: null,
        dias: null,
        reinvertir: false,
        mensaje: [],
        verificado: false,
      },
    };
  },

  methods: {
    verificar: function () {
      this.formulario.mensaje = [];

      if (this.formulario.nombre === "") {
        this.formulario.mensaje.push("El nombre no puede ser vacio");
      } else if (this.formulario.monto < 1000 || this.formulario.monto == "") {
        this.formulario.mensaje.push("El monto debe ser mayor o igual a 1000");
      } else if (this.formulario.dias < 30 || this.formulario.dias == "") {
        this.formulario.mensaje.push(
          "La cantidad de dias debe ser mayor o igual a 30"
        );
      } else {
        this.formulario.verificado = true;
        this.$refs.child.calcular();
      }

      //Validacion correcta
    },
  },
};
</script>
