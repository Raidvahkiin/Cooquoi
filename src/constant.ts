const envVariablePrefix = "VITE";

export const BACK_END_URL_BASE = import.meta.env[
  `${envVariablePrefix}_BASE_URL`
];
