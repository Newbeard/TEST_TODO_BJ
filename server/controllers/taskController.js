const { Task } = require('../db/models');

const taskGet = async (req, res) => {
  const pageSize = 3;
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

const taskApproved = async (req, res) => {
  const pageSize = 3;
  const {
    id, title, page, paramsort1, paramsort2,
  } = req.body;
  const offset = (page - 1) * pageSize;
  try {
    await Task.update(
      { isApproved: 'Проверено', title },
      { where: { id } },
    );
    const result = await Task.findAll();
    const tasks = await Task.findAll({
      order: [[paramsort2, paramsort1]],
      offset,
      limit: pageSize,
    });
    res.json({ tasks, amountTask: result.length });
  } catch (error) {
    res.sendStatus(500);
  }
};

const taskPage = async (req, res) => {
  const pageSize = 3;
  const { page, paramsort1, paramsort2 } = req.body;
  const offset = (page - 1) * pageSize;
  try {
    if (paramsort1 && paramsort2) {
      const result = await Task.findAll();
      const tasks = await Task.findAll({
        order: [[paramsort2, paramsort1]],
        offset,
        limit: pageSize,
      });
      res.json({ tasks, amountTask: result.length });
    } else {
      const result = await Task.findAll();
      const tasks = await Task.findAll({
        offset,
        limit: pageSize,
      });
      res.json({ tasks, amountTask: result.length });
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const taskFilter = async (req, res) => {
  const pageSize = 3;
  const { page, paramsort1, paramsort2 } = req.body;
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
    res.sendStatus(500);
  }
};

const taskNew = async (req, res) => {
  const pageSize = 3;
  const { name, email, title } = req.body;
  try {
    await Task.create({
      name, email, title, status: 'В процессе', isApproved: 'Не проверено',
    });
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

const taskComplet = async (req, res) => {
  const pageSize = 3;
  const {
    id, page, paramsort1, paramsort2,
  } = req.body;
  const offset = (page - 1) * pageSize;
  try {
    await Task.update(
      { status: 'Выполнено' },
      { where: { id } },
    );
    if (paramsort1 && paramsort2) {
      const result = await Task.findAll();
      const tasks = await Task.findAll({
        order: [[paramsort2, paramsort1]],
        offset,
        limit: pageSize,
      });
      res.json({ tasks, amountTask: result.length });
    } else {
      const result = await Task.findAll();
      const tasks = await Task.findAll({
        offset,
        limit: pageSize,
      });
      res.json({ tasks, amountTask: result.length });
    }
  } catch (error) {
    res.sendStatus(500);
  }
};
module.exports = {
  taskGet, taskPage, taskFilter, taskApproved, taskNew, taskComplet,
};
