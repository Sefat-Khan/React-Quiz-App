
export default function CheckBox({ text, className, ...rest }) {

    console.log()
    return(
        <>
          <label className={className} >
            <input type="Checkbox" {...rest} />
                <span>
                    {text}
                </span>
          </label>
        </>
    );
}