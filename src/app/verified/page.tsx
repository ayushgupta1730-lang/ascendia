export default function VerifiedPage() {

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

      <div className="w-full max-w-md rounded-[2rem] bg-white p-10 text-center shadow-2xl">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          ✅
        </div>

        <h1 className="mt-6 text-4xl font-black text-slate-900">
          Email Verified
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Your Ascendia account has been verified successfully.
          You can now login and access your dashboard.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
        >
          Go To Homepage
        </a>

      </div>

    </main>
  );

}