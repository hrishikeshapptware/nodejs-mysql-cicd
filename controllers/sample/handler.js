const services = require("./services");
const { success, error } = require("../../response");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await services.getAllEmployees();
    res.json(success(employees));
  } catch (e) {
    console.log(e);
    res.json(error(e.message));
  }
};

const createTables = async (req, res) => {
  try {
    await services.createTables();
    res.json(success());
  } catch (e) {
    console.log(e);
    res.json(error(e.message));
  }
};

const addEmployee = async (req, res) => {
  try {
    const result = await services.addEmployee(req.body);
    res.json(success(result));
  } catch (e) {
    console.log(e);
    res.json(error(e.message));
  }
};

module.exports = { addEmployee, createTables, getAllEmployees };
