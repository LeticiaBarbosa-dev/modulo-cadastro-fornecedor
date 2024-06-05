import { ComponentProps } from "react";
import "./styles.css"

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  return (
    <td
      {...props}
      className="td"
    />
  );
}
