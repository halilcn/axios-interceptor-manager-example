import companyInstance from "./instances/company";

export const getAllTodosOnCompany = async () => {
  const { data } = await companyInstance.get("/todos");
  return data;
};

export const getTodoOnCompanyWithoutAuth = async (id) => {
  try {
    companyInstance.interceptorManager.remove("auth-token");
    const { data } = await companyInstance.get(`/todos/${id}`);
    return data;
  } finally {
    companyInstance.interceptorManager.set("auth-token");
  }
};

export const getTodoOnCompanyWithoutHeavyCompute = async (id) => {
  try {
    companyInstance.interceptorManager.remove("heavy-compute");
    const { data } = await companyInstance.get(`/todos/${id}`);
    return data;
  } finally {
    companyInstance.interceptorManager.set("heavy-compute");
  }
};

export const postTodoOnCompany = async () => {
  const test = await companyInstance.post("/todos");
  return test;
};
