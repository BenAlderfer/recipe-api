const Recipe = sequelize.define('recipe', {
    id: { type: Sequelize.STRING, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING },
    lastUpdated: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
});
