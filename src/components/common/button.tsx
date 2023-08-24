import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLoading?: boolean
}

function Button({ isLoading, ...props }: Props) {
  return (
    <button
      {...props}
      className="rounded-md bg-green-600 px-3 py-1 text-white hover:bg-green-700 active:bg-green-800 disabled:bg-gray-300"
    >
      {isLoading ? '...' : props.children}
    </button>
  )
}

export default Button
