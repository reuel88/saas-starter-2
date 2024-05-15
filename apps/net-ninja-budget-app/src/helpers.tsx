import { Budget, Expense } from "./types.tsx";

export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

// Get all items from local storage
export const getAllMatchingItems = <T extends Expense | Budget>({
  category,
  key,
  value,
}: {
  category: string;
  key: keyof T;
  value: string;
}) => {
  const data: T[] = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// delete item from local storage
export const deleteItem = ({ key, id }: { key: string; id?: string }) => {
  if (id) {
    const existingData = fetchData(key) as Expense[] | Budget[];

    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

// create budget
export const createBudget = ({
  name,
  amount,
}: {
  name: string;
  amount: number;
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem]),
  );
};

// create expense
export const createExpense = ({
  name,
  amount,
  budgetId,
}: {
  name: string;
  amount: number;
  budgetId: string;
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem]),
  );
};

// total spent by budget
export const calculateSpentByBudget = (budgetId: string) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc: number, expense: Expense) => {
    // check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc;

    // add the current amount to my total
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// FORMATTING
export const formatDateToLocaleString = (epoch: number) =>
  new Date(epoch).toLocaleDateString();

// Formating percentages
export const formatPercentage = (amt: number) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// Format currency
export const formatCurrency = (amt: number) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "AUD",
  });
};
