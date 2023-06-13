function Calculate(props)
{

    var downPayment = 0.25 * parseFloat(props.cost);
    var months = 0;
    var checkSavings = 0;

    function monthCalc(downPayment, checkSavings)
    {   
        while(checkSavings < downPayment){
            checkSavings = checkSavings + (parseFloat(props.saving) * parseFloat(props.salary));
            months++;
        }
        return months;
    }

    return(
        <div>
            <p>It takes <span style={{color: "blue"}}><b>{monthCalc(downPayment, checkSavings)}</b></span> months to save {downPayment} for this {props.saving} saving amount out of {props.salary}</p>
        </div>
    )
}

export default Calculate;