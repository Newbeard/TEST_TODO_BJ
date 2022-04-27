const { Task } = require('../db/models');

const taskGet = async (req, res) => {
  const pageSize = 2;
  try {
    const tasks = await Task.findAll({
      offset: 0,
      limit: pageSize,
    });
    res.json(tasks);
  } catch (error) {
    res.sendStatus(500);
  }
};
const taskPage = async (req, res) => {
  const pageSize = 2;
  const { page } = req.body;
  const offset = (page - 1) * pageSize;
  try {
    const tasks = await Task.findAll({
      offset,
      limit: pageSize,
    });
    res.json(tasks);
  } catch (error) {
    res.sendStatus(500);
  }
};

const taskFilter = async (req, res) => {
  const pageSize = 2;
  const { page, paramsort1, paramsort2 } = req.body;
  const offset = (page - 1) * pageSize;
  try {
    const tasks = await Task.findAll({
      order: [[paramsort1, paramsort2]],
      offset,
      limit: pageSize,
    });
    res.json(tasks);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { taskGet, taskPage, taskFilter };
