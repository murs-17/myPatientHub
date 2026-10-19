import { FaPaypal } from "react-icons/fa";

function WalletCard() {
  return (
    <div className="h-full rounded-2xl bg-white shadow-sm">
      <div className="flex flex-col items-center px-6 py-7">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1ab7ff] to-[#0075ff] text-white shadow-md">
          <FaPaypal className="text-[28px]" />
        </div>

        <h3 className="mt-4 text-base font-semibold text-[#344767]">
          Wallet Bank Card
        </h3>

        <p className="mt-1 text-sm text-[#7b809a]">Payments</p>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="px-6 py-4 text-center">
        <p className="text-xl font-semibold text-[#344767]">$455.00</p>
      </div>
    </div>
  );
}

export default WalletCard;