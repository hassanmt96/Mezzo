const { Op } = require('sequelize');
const { Story} = require('../../db/models');

const searchStories = async(term) => {
    return await Story.findAll({where: { title: { [Op.like]: term }}});
}

module.exports = searchStories;
