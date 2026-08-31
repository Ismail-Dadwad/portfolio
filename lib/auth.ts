export const GATE_COOKIE = "case_study_access";

/** Shared password for confidential case studies (QuoteDesks, Pace Tourism LLC CRM). Override via CASE_STUDY_PASSWORD in .env.local. */
export const GATE_PASSWORD = process.env.CASE_STUDY_PASSWORD || "pacetourism2025";
