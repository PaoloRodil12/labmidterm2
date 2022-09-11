<template>
     <body><br>
<center>
 <v-card
    class="ma-15"
    max-width="700"
    max-height="700"
    style="background:linear-gradient(#facfce, #f86f4d, #eb603d)"
 >
<center><v-card-title outlined color="white"> String Manipulator </v-card-title></center>
     <v-container fluid>
   <v-text-field label="Enter a String" v-model="stringInput" outlined color="white"></v-text-field>

   <v-card-actions  >
   <v-btn @click="doCountVowel" outlined color="#373e98" id="button">
        Count Vowel
   </v-btn>
   <v-btn @click="doConsonantCount" outlined color="#373e98" id="button">
        Count Consonant
   </v-btn>
   <v-btn @click="doNumberCount" outlined color="#373e98" id="button">
        Count Number
   </v-btn>
   <v-btn @click="doConvertText" outlined color="#373e98" id="button">
        Convert Vowel to *
   </v-btn>
   </v-card-actions>
   <br>
     <hr>
   <p>Vowel Count:</p>{{vowelCount}}<br>
   <p>Consonant Count:</p>{{consonantCount}}<br>
   <p>Number Count:</p>{{numberCount}}<br>
   <p>Convert Vowel :</p>{{convertedText}}<br>
</v-container>
 </v-card>  
</center>
<br>
<br>
<br>
<br>
<br>
<br>
</body>
</template>

<script setup>
import {ref} from 'vue'

const stringInput = ref('')
const vowelCount = ref(0)
const consonantCount = ref(0)
const numberCount = ref(0)
const convertedText = ref('')

function doCountVowel () {
     vowelCount.value = stringInput.value.match(/[aeiou]/gi).length;
     return vowelCount.value; 
}

function doConsonantCount () {
     consonantCount.value = stringInput.value.match(/[bcdfghjklmnpqrstvwxys]/gi).length;
     return consonantCount.value; 
}

function doNumberCount () {
     numberCount.value = stringInput.value.match(/[0-9]/ig).length;
     return numberCount.value; 
}

function doConvertText () {
     convertedText.value = stringInput.value.replace(/[aeiou]/gi,'*');
     return convertedText.value; 
}

</script>

<style scoped>
#button {
  color: white;
  background-color:aliceblue;
}
#button:hover {
  color: #373e98;
}

body {
  background-image: url('https://wallpaperaccess.com/full/2002264.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>