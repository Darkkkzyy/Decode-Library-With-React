import { useState } from 'react'

interface DropdownProps {
  options: string[]
}

interface DropdownProps {
  options: string[]
}

const Dropdown: React.FC<DropdownProps> = ({ options = [] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOption} 
            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-md bg-white shadow-lg">
          <ul
            className="py-1 overflow-auto text-base rounded-md leading-6 shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <li
                key={option}
                className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9"
                onClick={() => {
                  setSelectedOption(option)
                  setIsOpen(false)
                }}
              >
                <span className="font-normal block truncate">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown