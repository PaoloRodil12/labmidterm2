<template>
    <h1>Axios Demo</h1>
    <v-btn @click="getQuestions">GET POST</v-btn>
    <v-list-item
        v-for="question in questions"
        :key="question.id"
        >
            <v-list-item-title>{{question.question}}</v-list-item-title>
            <v-list-item>
                {{question.correct_answer}}
            </v-list-item>
    </v-list-item>
</template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios'

    const question=ref([])

    async function getQuestions() {
        axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple').then( response => {
            questions.value=(response.data.results)
        })
    }
</script>

<style>

</style>