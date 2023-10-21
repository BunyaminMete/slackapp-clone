import './input.css'
import classNames from 'classnames'

const InputComponent = (props) => {
  const { errorMessage, type, placeholder, onChange, inputLabel } = props
  return (
    <>
      <label className="font-mono float-left ml-1">{inputLabel}</label>
      <br />
      <input
        onChange={onChange}
        error={errorMessage}
        type={type}
        placeholder={placeholder}
        className={classNames({
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500': !errorMessage,
          'bg-red-50 border border-red-500 text-red-600 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 w-60 text-center dark:bg-gray-700 focus:border-red-500 block  p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500': errorMessage,
        })}
      />
    </>
  )
}

export default InputComponent
