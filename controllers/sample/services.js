const { sqlQuery } = require("../../config/db");
const {
  ADD_EMPLOYEE,
  CREATE_EMPLOYEE_TABLE,
  GET_ALL_EMPLOYEES,
} = require("./sql");

const getAllEmployees = async () => {
  const [employees] = await sqlQuery(GET_ALL_EMPLOYEES);
  return employees;
};

const createTables = async () => {
  const result = await sqlQuery(CREATE_EMPLOYEE_TABLE);
  return result;
};

const addEmployee = async (data) => {
  const result = await sqlQuery(ADD_EMPLOYEE, [data]);
  return result;
};

module.exports = { addEmployee, createTables, getAllEmployees };
