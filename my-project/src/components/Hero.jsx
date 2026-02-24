import heroimg from "../assets/assets/images/illustration-empty.svg"
import calculatorimg from "../assets/assets/images/icon-calculator.svg"

export const Hero = () =>{



    return(

        <>
        
            <section>



                <div>

                    <div>

                        <h3>Mortgage Calculator</h3>

                        <p>Clear All</p>

                    </div>

                    <div>

                        <p>Mortgage Amount</p>

                        <input type="number" name="" id="" placeholder="€" />

                    </div>

                    <div>

                        <div>
                            <p>Mortgage Term </p>
                            <input type="number" name="" id=""  placeholder="years"/>
                        </div>

                        <div>
                            <p>Interest Rate</p>
                            <input type="number" name="" id="" placeholder="%" />
                        </div>
                        
                    </div>


                    <div>

                        <p>Mortgage Type </p>

                        <button>Repayment</button>

                        <button>Interest Only</button>

                    </div>

                    <button>Calculate Repayments</button>




                </div>


                <div>
                    <img src={heroimg} alt="Illustration of an empty calculator" />

                    <h3>Results shown here </h3>

                    <p>
                        Complete the form and click " calculate repayments " to <br />
                         see what your monthly repayments would be. 
                    </p>

                </div>

            </section>
        
        
        </>
    )
}