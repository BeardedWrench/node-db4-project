exports.seed = function (knex) {
  return knex("steps").del()
    .then(() => {
      return knex("steps").insert([
        { step_id: 1, step_text: "spread over evenly", ingredient_id: 2 },
        { step_id: 2, step_text: "sprinkle thoroughly to your liking ", ingredient_id: 1 },
        { step_id: 3, step_text: "evenly spread across dough flat", ingredient_id: 3 },
        { step_id: 4, step_text: "coat heavily", ingredient_id: 4 },
        { step_id: 5, step_text: "beat, then soak chicken in for 5 minutes", ingredient_id: 5 },
        { step_id: 6, step_text: "place into bowl and pre-soak", ingredient_id: 6 },
        { step_id: 7, step_text: "warm to desired temperature, and pour over noodles", ingredient_id: 7 },
        { step_id: 8, step_text: "add to mixture as needed", ingredient_id: 8 },
      ]);
    });
}; 