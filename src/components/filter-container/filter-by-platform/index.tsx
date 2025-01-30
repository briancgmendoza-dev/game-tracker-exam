export default function FilterByPlatform() {
  const options = [
    'All',
    'PC',
    'Browser'
  ]
  return (
    <select>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}
