const { Task } = require('../db/models');

const taskGet = async (req, res) => {
  const pageSize = 2;
  try {
    const result = await Task.findAll();
    const tasks = await Task.findAll({
      offset: 0,
      limit: pageSize,
    });
    res.json({ tasks, amountTask: result.length });
  } catch (error) {
    res.sendStatus(500);
  }
};
const taskPage = async (req, res) => {
  const pageSize = 2;
  const { page } = req.body;
  const offset = (page - 1) * pageSize;
  try {
    const result = await Task.findAll();
    const tasks = await Task.findAll({
      offset,
      limit: pageSize,
    });
    res.json({ tasks, amountTask: result.length });
  } catch (error) {
    res.sendStatus(500);
  }
};

const taskFilter = async (req, res) => {
  const pageSize = 2;
  const { page, paramsort1, paramsort2 } = req.body;
  console.log(page, paramsort1, paramsort2);
  const offset = (page - 1) * pageSize;
  try {
    const result = await Task.findAll();
    const tasks = await Task.findAll({
      order: [[paramsort2, paramsort1]],
      offset,
      limit: pageSize,
    });
    res.json({ tasks, amountTask: result.length });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = { taskGet, taskPage, taskFilter };
