


const Btn = ({variant="primary",text}) => {

return (

    <button data-type={variant}  
    className="btn 
                text-btn capitalize
                rounded-(--border-radius-800)
                shadow-xs
                " >
        {text}
    </button>
)

}

export default Btn