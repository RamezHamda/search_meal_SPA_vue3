import axiosClient from '../axiosClient.js';

function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then((res) => {
        commit('setSearchedMeals', res.data.meals);
    });
}

function searchMealsByLetter({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`)
    .then((res) => {
        commit('setSearchedMealsByLetter', res.data.meals);
    });
}

function searchMealsByingredient({commit}, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
    .then((res) => {
        commit('setSearchedMealsByingredient', res.data.meals);
    });
}

export default {
    searchMeals,
    searchMealsByLetter,
    searchMealsByingredient
};
