import { ReactElement } from "react";

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export type ReactChildren<T> = ReactElement | ReactElement[] | T