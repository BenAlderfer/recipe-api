const Recipe = sequelize.define("recipe", {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING },
  lastUpdated: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  ingredients: { type: Sequelize.STRING, allowNull: false }, // markdown formatted string
  instructions: { type: Sequelize.STRING }, // markdown formatted string
  tools: { type: Sequelize.STRING }, // tools needed to make the recipe, markdown formatted string
  image: { type: Sequelize.STRING }, // base64 encoded image
});
