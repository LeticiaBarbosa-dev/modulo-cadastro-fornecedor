import { ComponentProps } from "react";
import "./styles.css"

interface TableRowProps extends ComponentProps<"tr"> {}

export function TableRow(props: TableRowProps) {
    return <tr className="tr" {...props}></tr>
}