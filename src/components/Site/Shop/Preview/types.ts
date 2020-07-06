// React Types
import React from "react";
// Types
import { DetailProductProps } from "./Product/types";

export interface CardProductProps {
  title?: string;
  // TODO: tipar
  items?: Array<DetailProductProps>;
  children?: React.ReactNode;
}
