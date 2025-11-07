import React from 'react';


declare global {
type ReactChildren = {
children?: React.ReactNode;
};


type InputChange = React.ChangeEvent<HTMLInputElement>;


type SelectChange = React.ChangeEvent<HTMLSelectElement>;


type Nullable<T> = T | null;
}