const taskGet = async (req, res) => {
  try {
    const task = await Task.findAll({ raw: true });
    res.json(task);
  } catch (error) {
    res.sendStatus(500);
  }
};

const taskFilter = async (req, res) => {

};

module.exports = { taskGet, taskFilter };
