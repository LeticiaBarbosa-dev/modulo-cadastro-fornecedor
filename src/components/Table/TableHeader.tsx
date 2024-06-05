import { ComponentProps } from "react";
import "./styles.css"

interface TableHeaderProps extends ComponentProps<"th"> {}

export function TableHeader(props: TableHeaderProps) {
    return (
        <th className="th" {...props} />
    )
}