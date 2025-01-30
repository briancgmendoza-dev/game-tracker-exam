export default function SortBy() {
  const options = [
    'Release Date',
    'Alphabetical',
    'Relevance'
  ]
  return (
    <select>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}
