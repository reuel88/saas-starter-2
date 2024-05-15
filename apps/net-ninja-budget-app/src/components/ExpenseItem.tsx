import { CSSProperties } from "react";

// rrd imports
import { Link, useFetcher } from "react-router-dom";

// library import
import { TrashIcon } from "@heroicons/react/24/solid";

// helper imports
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";

// types
import { Budget, Expense } from "../types.tsx";

const ExpenseItem = ({
  expense,
  showBudget,
}: {
  expense: Expense;
  showBudget?: boolean;
}) => {
  const fetcher = useFetcher();

  const budgets = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  }) as Budget[];

  const budget = budgets[0];

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>

      {showBudget && (
        <td>
          <Link
            to={`/budget/${budget.id}`}
            style={
              {
                "--accent": budget.color,
              } as CSSProperties
            }
          >
            {budget.name}
          </Link>
        </td>
      )}
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};
export default ExpenseItem;
