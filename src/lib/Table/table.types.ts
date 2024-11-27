export interface TableProps {
    id?: string;
    columns?: string[];
    colCount?: number;
    data: string[][];
    rows?: boolean;
    sortable?: boolean;
    noStriped?: boolean;
  }