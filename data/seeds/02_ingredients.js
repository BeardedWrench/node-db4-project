exports.seed = function (knex) {
  return knex("ingredients").del()
    .then(() => {
      return knex("ingredients").insert([
        { ingredient_id: 1, ingredient_name: "cheese", ingredient_quanity: 0 },
        { ingredient_id: 2, ingredient_name: "peperoni", ingredient_quanity: 0 },
        { ingredient_id: 3, ingredient_name: "sauce", ingredient_quanity: 0 },
        { ingredient_id: 4, ingredient_name: "flour", ingredient_quanity: 0 },
        { ingredient_id: 5, ingredient_name: "eggs", ingredient_quanity: 0 },
        { ingredient_id: 6, ingredient_name: "noodles", ingredient_quanity: 0 },
        { ingredient_id: 7, ingredient_name: "chicken broth", ingredient_quanity: 0 },
        { ingredient_id: 8, ingredient_name: "veggies", ingredient_quanity: 0 },
      ]);
    });
}; 