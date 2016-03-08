export interface oData {
  select?: string;
  orderBy?: string;
  expand?: string;
  filter?: string;
  top?: number;
  skip?: number;
  count?: boolean;
}
