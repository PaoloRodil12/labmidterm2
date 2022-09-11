<template>
<body><br>
  <center>
<v-card
    class="ma-15"
    max-width="700"
    max-height="800"
    style="background:linear-gradient(#facfce, #f86f4d, #eb603d)"
 >
<v-container fluid>

  <center><v-card-title id="Title"> Calculator </v-card-title></center>
  <v-text-field label="Input First Number:" v-model.number="fNumber" outlined color="white"></v-text-field>
  <v-text-field label="Input Second Number:" v-model.number="sNumber" outlined color="white"></v-text-field>

  <div class="btnRes">
  <v-btn id="button" outlined color="#FFFFFF" @click="doResult">Result</v-btn><br>
  </div>
 
  <div class="result">
    <br>
    <hr>
    <p>Sum :</p> {{sum}}<br>
    <p>Difference :</p>  {{diff}}<br>
    <p>Product :</p>  {{prod}}<br>
    <p>Quotient :</p>  {{quot}}<br>
    <p>Average :</p>  {{ave}}<br>
  </div>

</v-container>
</v-card>
</center>
<br>
<br>
<br>
<br>

</body>

 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref(0)
  const sNumber=ref(0)
  const sum=ref(0)
  const diff=ref(0)
  const prod=ref(0)
  const quot=ref(0)
  const ave=ref(0)

  function doResult(){
    sum.value = fNumber.value + sNumber.value
    diff.value = fNumber.value - sNumber.value
    prod.value = fNumber.value * sNumber.value
    quot.value = fNumber.value / sNumber.value
    ave.value = (parseInt(fNumber.value) + parseInt(sNumber.value)) / 2
    return sum.value, diff.value, prod.value, quot.value, ave.value
  }
</script>


<style scoped>
.result{
  color:white;
}

#button {
  color: gray;
  width: 800px;
}
#button:hover {
  color: #373e98;
}

#Title:hover {
  color: white;
}
body {
  background-image: url('https://wallpaperaccess.com/full/2002264.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>