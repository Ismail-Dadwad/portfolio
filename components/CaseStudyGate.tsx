import { Lock } from "lucide-react";

/**
 * Server Component — a plain form posting to a bound server action, so no
 * client-side state is needed just to gate content behind a shared password.
 */
export default function CaseStudyGate({
  action,
  hasError,
}: {
  action: (formData: FormData) => void;
  hasError: boolean;
}) {
  return (
    <div className="mx-auto flex max-w-[420px] flex-col items-center rounded-[24px] border border-line bg-surface px-8 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/[0.08]">
        <Lock size={20} strokeWidth={1.75} className="text-brand" />
      </span>
      <h1 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
        Confidential case study
      </h1>
      <p className="mt-2 max-w-[36ch] text-[15px] text-muted">
        This project includes real business details. Enter the shared password to view it.
      </p>

      <form action={action} className="mt-7 w-full">
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoFocus
          className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-brand"
        />
        {hasError && (
          <p className="mt-2.5 text-left text-sm text-red-500">Incorrect password — try again.</p>
        )}
        <button
          type="submit"
          className="mt-4 w-full rounded-xl bg-brandGrad py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          View case study
        </button>
      </form>
    </div>
  );
}
