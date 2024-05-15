/* eslint-disable react-refresh/only-export-components */
import { CSSProperties } from "react";

// rrd imports
import { Params, useLoaderData } from "react-router-dom";

// library
import { toast } from "react-toastify";

// components
import AddExpenseForm from "../components/AddExpenseForm";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";

// helpers
import { createExpense, deleteItem, getAllMatchingItems } from "../helpers";

//types
import { Budget, BudgetLoaderData, Expense } from "../types.tsx";

// loader
export function budgetLoader({ params }: { params: Params }) {
  const [budget] = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id as string,
  }) as Budget[];

  const expenses = getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id as string,
  }) as Expense[];

  if (!budget) {
    throw new Error(`The budget you’re trying to find doesn't exist`);
  }

  return { budget, expenses };
}

// action
export async function budgetAction({ request }: { request: Request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense as string,
        amount: parseFloat(values.newExpenseAmount as string),
        budgetId: values.newExpenseBudget as string,
      });
      return toast.success(`Expense ${values.newExpense} created!`);
    } catch (e) {
      throw new Error("There was a problem creating your expense.");
    }
  }

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId as string,
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

const BudgetPage = () => {
  const { budget, expenses } = useLoaderData() as BudgetLoaderData;

  return (
    <div
      className="grid-lg"
      style={
        {
          "--accent": budget.color,
        } as CSSProperties
      }
    >
      <h1 className="h2">
        <span className="accent">{budget.name}</span> Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span> Expenses
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
};
export default BudgetPage;
