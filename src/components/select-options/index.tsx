import Select from "react-select"
import Paragraphs from "../paragraphs"

import { TSelectOption } from "./type"

const SelectOptions: React.FC<TSelectOption> = ({ selectorValue, onChange, options, placeholder, className, text }) => {

  return (
    <div className={className}>
      <Paragraphs content={text} />
      <Select
        value={options.find((option) => option.value === selectorValue) || null}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        styles={{
          option: (provided: any) => ({
            ...provided,
            color: "#000",
          }),
          control: (provided: any) => ({
            ...provided,
            width: text === "Filter by Category" ? "250px" : "150px"
          })
        }}
      />
    </div>
  )
}

export default SelectOptions
