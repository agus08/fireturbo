"use client"

import { ButtonProps, Button as MUIButton } from '@mui/material';

export const Button = ({ children, ...props }: ButtonProps) => {
  return <MUIButton {...props}>{children}</MUIButton>;
};