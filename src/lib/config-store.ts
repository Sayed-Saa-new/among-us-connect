import { useEffect, useState } from "react";

export type AppConfig = {
  streamerName: string;
  bannerText: string;
  discordUrl: string;
  isLive: boolean;
  playersToday: number;
};

const KEY = "amongus-hub-config";

const defaults: AppConfig = {
  streamerName: "ShadowCrew",
  bannerText: "Drop in. Vote sus. Win the round.",
  discordUrl: "https://discord.gg/your-invite",
  isLive: true,
  playersToday: 1247,
};

export function getConfig(): AppConfig {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return defaults;
  }
}

export function setConfig(cfg: AppConfig) {
  localStorage.setItem(KEY, JSON.stringify(cfg));
  window.dispatchEvent(new CustomEvent("config-updated"));
}

export function useConfig(): [AppConfig, (cfg: AppConfig) => void] {
  const [cfg, setCfg] = useState<AppConfig>(defaults);
  useEffect(() => {
    setCfg(getConfig());
    const handler = () => setCfg(getConfig());
    window.addEventListener("config-updated", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("config-updated", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return [cfg, (c) => { setConfig(c); setCfg(c); }];
}
