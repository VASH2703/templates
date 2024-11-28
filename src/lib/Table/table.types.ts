import {HTMLAttributes, Ref } from "react";

export interface TableProps extends Omit<HTMLAttributes<HTMLTableElement>, 'className'> {
    id?: string;
    columns?: string[];
    colCount?: number;
    data: string[][];
    rows?: boolean;
    sortable?: boolean;
    noStriped?: boolean;
    className?: string;
    ref?: Ref<HTMLTableElement>;
  }