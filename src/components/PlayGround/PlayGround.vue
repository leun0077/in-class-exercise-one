<template>
  <div class="hello">
    <!-- Input -->
    <div class="input-wrapper">
      <input class="text" v-model="inputValue" v-bind:class="inputValidatationClass">
      <div v-if="inlineValidatetionClass" class="inline-validation">You exceeded 50</div>
    </div>
    <!-- Button -->
    <div class="button-wrapper">
      <button v-bind:disabled="isButtonDisabled">Submit</button>
    </div>
  </div>
</template>
<script src = "./PlayGround.js"></script>
<style src = "./PlayGround.css" scoped></style>
