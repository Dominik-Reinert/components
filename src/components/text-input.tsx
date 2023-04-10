import React, { ChangeEvent } from "react";

/**
 * The props for the TextInput component.
 */
interface TextInputProps {
  /** Whether the input is disabled or not */
  disabled?: boolean;
  /** The label text for the input */
  title: string;
  /** The description for the input */
  description?: string;
  /** The callback function that is called when the input value changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** The value of the input */
  value: string;
  /** The error message to display if the input is invalid */
  errorMessage?: string;
  /** Whether the input is required or not */
  required?: boolean;
  /** The ARIA label for the input */
  ariaLabel?: string;
  /** The ID of the element that labels the input */
  ariaLabelledBy?: string;
  /** The ID of the element that describes the input */
  ariaDescribedBy?: string;
}

/**
 * A text input component with ARIA attributes.
 */
export const TextInput: React.FC<TextInputProps> = ({
  disabled = false,
  title,
  description,
  onChange,
  value,
  errorMessage,
  required = false,
  ariaLabel = title,
  ariaLabelledBy,
  ariaDescribedBy = errorMessage
    ? `error-${title}`
    : description
    ? `description-${title}`
    : "",
}) => {
  /** Generate an ID for the input based on the title */
  const inputId = `input-${title.toLowerCase().replace(/\s/g, "-")}`;

  return (
    <div className="flex flex-col">
      <label htmlFor={inputId} className="mb-1 font-medium">
        {title}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={inputId}
        name={title}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={
          errorMessage ? `${ariaDescribedBy} ${errorMessage}` : ariaDescribedBy
        }
        className={`border rounded-lg py-2 px-3 ${
          disabled ? "bg-gray-100" : "bg-white"
        } ${
          errorMessage ? "border-red-500" : "border-gray-400"
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
      />
      {errorMessage && (
        <div role="alert" id={`error-${title}`} className="text-red-500 mt-1">
          {errorMessage}
        </div>
      )}
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
};
