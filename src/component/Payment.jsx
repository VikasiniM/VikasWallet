import { useState } from "react";
import { useDispatch } from "react-redux";
import { creditMoney, debitMoney } from "../Store";

export default function Payment() {
    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();

    const handleCredit = () => {
        if (amount > 0) {
            dispatch(creditMoney(Number(amount)));
            setAmount("");
        }
    };

    const handleDebit = () => {
        if (amount > 0) {
            dispatch(debitMoney(Number(amount)));
            setAmount("");
        }
    };

    return (
        <div>
            <h2>Manage Your Balance</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={handleCredit}>Credit</button>
            <button onClick={handleDebit}>Debit</button>
        </div>
    );
}
