import { ActionMeta, SingleValue, } from 'react-select';

export type TSelectOption = {
   selectorValue: string
   onChange: (newValue: SingleValue<{ value: string }> | null, actionMeta: ActionMeta<{ value: string }>) => void;
   options: Array<{ value: string; label: string }>
   placeholder: string
   className: string
   text: string
}
