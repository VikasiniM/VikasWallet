import UserInfo from "./component/Userinfo";
import Payment from "./component/Payment";

export default function App() {
    return (
        <div className="container">
            <h1>Welcome to Vikas's Wallet</h1>
            <UserInfo />
            <Payment />
        </div>
    );
}
