import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

// import icons from '../img/icons.svg'; // Parcel 1

import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Reciple
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
controlRecipes();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init(); //xx
