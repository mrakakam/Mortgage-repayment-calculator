import { useState } from "react";
import heroimg from "../assets/assets/images/illustration-empty.svg";
import calculatorimg from "../assets/assets/images/icon-calculator.svg";

export const Hero = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");

  const [monthly, setMonthly] = useState(null);
  const [total, setTotal] = useState(null);

  const [errors, setErrors] = useState({});

  /* VALIDATION */
  const validate = () => {
    let newErrors = {};
    if (!amount) newErrors.amount = true;
    if (!term) newErrors.term = true;
    if (!rate) newErrors.rate = true;
    if (!type) newErrors.type = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* CALCULATION */
  const calculateMortgage = () => {
    if (!validate()) return;

    const P = Number(amount);
    const years = Number(term);
    const annualRate = Number(rate);

    const r = annualRate / 100 / 12;
    const n = years * 12;

    let payment = 0;
    let totalPayment = 0;

    if (type === "repayment") {
      payment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      totalPayment = payment * n;
    } else {
      payment = P * r;
      totalPayment = payment * n + P;
    }

    setMonthly(payment.toFixed(2));
    setTotal(totalPayment.toFixed(2));
  };

  /* CLEAR */
  const clearAll = () => {
    setAmount("");
    setTerm("");
    setRate("");
    setType("");
    setMonthly(null);
    setTotal(null);
    setErrors({});
  };

  return (
    <section className="bg-blue-100 flex justify-center px-4 py-8 md:p-12">
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-[950px] w-full">

        {/* CALCULATOR PANEL */}
        <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-6 w-full shadow">

          {/* HEADER */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-2xl font-bold text-[#272757]">
              Mortgage Calculator
            </h3>

            <p
              onClick={clearAll}
              className="text-[#90D5FF] cursor-pointer underline font-bold text-sm"
            >
              Clear All
            </p>
          </div>

          {/* AMOUNT */}
          <div>
            <p className="mb-2 text-[#517891] font-bold">
              Mortgage Amount
            </p>

            <div className="flex">
              <div
                className={`px-4 py-3 rounded-l-lg font-bold text-white ${
                  errors.amount ? "bg-red-400" : "bg-blue-200"
                }`}
              >
                €
              </div>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`p-3 rounded-r-lg w-full outline-none border ${
                  errors.amount
                    ? "border-red-800"
                    : "border-blue-300"
                }`}
              />
            </div>

            {errors.amount && (
              <p className="text-red-800 text-sm mt-1 font-bold">
                This field is required
              </p>
            )}
          </div>

          {/* TERM + RATE */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* TERM */}
            <div className="flex-1">

              <p className="mb-2 text-[#517891] font-bold">
                Mortgage Term
              </p>

              <div className="flex">

                <input
                  type="number"
                  value={term}
                  onChange={(e) =>
                    setTerm(e.target.value)
                  }
                  className={`p-3 rounded-l-lg w-full outline-none border ${
                    errors.term
                      ? "border-red-800"
                      : "border-blue-300"
                  }`}
                />

                <div
                  className={`px-4 py-3 rounded-r-lg font-bold text-white ${
                    errors.term
                      ? "bg-red-800"
                      : "bg-blue-200"
                  }`}
                >
                  Years
                </div>

              </div>

              {errors.term && (
                <p className="text-red-800 text-sm mt-1 font-bold">
                  This field is required
                </p>
              )}

            </div>

            {/* RATE */}
            <div className="flex-1">

              <p className="mb-2 text-[#517891] font-bold">
                Interest Rate
              </p>

              <div className="flex">

                <input
                  type="number"
                  value={rate}
                  onChange={(e) =>
                    setRate(e.target.value)
                  }
                  className={`p-3 rounded-l-lg w-full outline-none border ${
                    errors.rate
                      ? "border-red-800"
                      : "border-blue-300"
                  }`}
                />

                <div
                  className={`px-4 py-3 rounded-r-lg font-bold text-white ${
                    errors.rate
                      ? "bg-red-800"
                      : "bg-blue-200"
                  }`}
                >
                  %
                </div>

              </div>

              {errors.rate && (
                <p className="text-red-800 text-sm mt-1 font-bold">
                  This field is required
                </p>
              )}

            </div>

          </div>

          {/* TYPE */}
          <div>

            <p className="mb-3 text-[#517891] font-bold">
              Mortgage Type
            </p>

            <div className="flex flex-col md:flex-row gap-4">

              {/* Repayment */}
              <button
                onClick={() =>
                  setType("repayment")
                }
                className={`flex items-center gap-3 p-3 flex-1 rounded-lg border font-bold text-[#272757] ${
                  type === "repayment"
                    ? "border-yellow-300 bg-yellow-100"
                    : "border-blue-300"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full border ${
                    type === "repayment"
                      ? "bg-yellow-400 border-yellow-400"
                      : "border-gray-400"
                  }`}
                ></span>

                Repayment
              </button>

              {/* Interest */}
              <button
                onClick={() =>
                  setType("interest")
                }
                className={`flex items-center gap-3 p-3 flex-1 rounded-lg border font-bold text-[#272757] ${
                  type === "interest"
                    ? "border-yellow-300 bg-yellow-100"
                    : "border-blue-300"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full border ${
                    type === "interest"
                      ? "bg-yellow-400 border-yellow-400"
                      : "border-gray-400"
                  }`}
                ></span>

                Interest Only
              </button>

            </div>

            {errors.type && (
              <p className="text-red-800 text-sm mt-1 font-bold">
                This field is required
              </p>
            )}

          </div>

          {/* BUTTON */}
          <button
            onClick={calculateMortgage}
            className="bg-[#E6E600] rounded-2xl p-4 flex items-center justify-center gap-3 w-full font-bold shadow"
          >
            <img
              src={calculatorimg}
              className="w-6"
            />

            Calculate Repayments
          </button>

        </div>

        {/* RESULTS PANEL */}
        <div className="bg-[#0f583f] text-white rounded-2xl p-6 md:p-10 w-full flex flex-col justify-center">

          {monthly ? (
            <>
              <h2 className="text-2xl font-bold mb-4">
                Your results
              </h2>

              <p className="mb-6 text-gray-300">
                Your results are shown below based on
                the information you provided. To
                adjust the results, edit the form
                and click calculate again.
              </p>

              <div className="bg-blue-950 rounded-xl p-6 border-t-6 border-amber-400">

                <p className="text-gray-300 mb-2">
                  Your monthly repayments
                </p>

                <h2 className="text-4xl font-bold mb-4 text-[#E6E600]">
                  €{monthly}
                </h2>

                <hr className="mb-4" />

                <p className="text-gray-300 mb-2">
                  Total you'll repay
                </p>

                <h3 className="text-2xl font-bold">
                  €{total}
                </h3>

              </div>
            </>
          ) : (

            <div className="flex flex-col items-center text-center gap-4">

              <img
                src={heroimg}
                className="w-36 md:w-44"
              />

              <h3 className="text-xl md:text-2xl font-bold">
                Results shown here
              </h3>

              <p className="text-gray-300">
                Complete the form and click
                Calculate Repayments to see
                your monthly repayments.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
};