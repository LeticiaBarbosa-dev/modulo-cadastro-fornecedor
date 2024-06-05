import { ComponentProps } from "react";
import "./styles.css"

interface TableProps extends ComponentProps<"table"> {

}

export function Table(props: TableProps) {
  return (
    <div className="container-table">
      <table className="table" {...props}></table>
    </div>
  );
}
