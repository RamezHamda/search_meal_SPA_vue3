function setSearchedMeals(state, meals) {
    state.searchedMeals = meals;
}
function setSearchedMealsByLetter(state, meals) {
    state.searchedMealsByLetter = meals;
}
function setSearchedMealsByingredient(state, meals) {
    state.searchedMealsByingredient = meals;
}
export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
  }


export default {
    setSearchedMeals,
    setSearchedMealsByLetter,
    setSearchedMealsByingredient,
    setIngredient
};