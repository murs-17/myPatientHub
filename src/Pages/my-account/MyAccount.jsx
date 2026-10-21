import BankCard from "../../components/my-account/Bankcard.jsx";
import AccountBalance from "../../components/my-account/AccountBalance.jsx";
import WalletCard from "../../components/my-account/Walletcard.jsx";
import PaymentMethod from "../../components/my-account/PaymentMethod.jsx";
import Invoices from "../../components/my-account/Invoices.jsx";
import BillingInformation from "../../components/my-account/Billinginformation.jsx";
import Transactions from "../../components/my-account/Transactions.jsx";

function MyAccount() {
  return (
    <main className="w-full min-w-0 bg-[#f7f8fa] px-0 py-5">
      <div className="w-full min-w-0">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Main Area - 8/12 */}
          <div className="flex flex-col gap-6 lg:col-span-8">
            {/* Bank Card + Balance + Wallet */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="md:col-span-2 xl:col-span-2">
                <BankCard />
              </div>

              <AccountBalance />

              <WalletCard />
            </div>

            {/* Payment Method */}
            <PaymentMethod />
          </div>

          {/* Right Area - 4/12 */}
          <div className="lg:col-span-4">
            <Invoices />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Billing Information - 8/12 */}
          <div className="lg:col-span-8">
            <BillingInformation />
          </div>

          {/* Transactions - 4/12 */}
          <div className="lg:col-span-4">
            <Transactions />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyAccount;
