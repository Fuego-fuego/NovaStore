import { useId } from "react";

const Input = ({label,error,className="", ...props}) =>{

    const id = useId()
    return (
        <div className="grid gap-2">
            {label && (
            <label htmlFor={id} className="font-medium capitalize">
                {label}
            </label>
            )}
            <input id={id} className={`
            w-full
            px-2 py-2
            border rounded-(--border-radius-400)
            outline-none
            transition
            focus:ring-2
            ${error ? " border-red-500" :""}
            ${className}
            `} {...props}>
            </input>
            {
                error &&(
                    <p className="text-sm text-red-500 bg-white font-semi-bold">
                        {error}
                    </p>
                )}
        </div>
    )
} 

export default Input