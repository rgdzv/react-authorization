import { ReactElement } from "react";

export interface Inputs  {
  firstName: string
  secondName: string
  email: string
  password: string
  repeatPassword: string
}

export interface RouteProps {
  children: ReactElement
}