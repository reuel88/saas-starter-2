export type Budget = {
  id: string;
  name: string;
  createdAt: number;
  amount: number;
  color: string;
};

export type Expense = {
  id: string;
  name: string;
  createdAt: number;
  amount: number;
  budgetId: string;
};

export type DashboardLoaderData = {
  userName: string;
  budgets: Budget[];
  expenses: Expense[];
};

export type BudgetLoaderData = {
  budget: Budget;
  expenses: Expense[];
};

export type ExpensesLoaderData = { expenses: Expense[] };
