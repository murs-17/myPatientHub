function AccountBalance() {
  return (
    <div className="h-full rounded-2xl bg-white shadow-sm">
      <div className="flex flex-col items-center px-6 py-7">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1ab7ff] to-[#0075ff] text-white shadow-md">
          <span className="material-icons-round text-[28px] leading-none">
            account_balance
          </span>
        </div>

        <h3 className="mt-4 text-base font-semibold text-[#344767]">
          Account Balance
        </h3>

        <p className="mt-1 text-sm text-[#7b809a]">Payments</p>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="px-6 py-4 text-center">
        <p className="text-xl font-semibold text-[#344767]">+$2000</p>
      </div>
    </div>
  );
}

export default AccountBalance;
