"use client";

import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme || "light";

  return (
    <div className="flex items-center gap-2">
      <span>
        <SunIcon className={currentTheme === "dark" ? "text-geo-lightBlue1" : "text-amber-600"} />
      </span>
      <Switch
        checked={currentTheme === "dark" || false}
        onCheckedChange={(isDark) => setTheme(isDark ? "dark" : "light")}
        aria-checked={currentTheme === "dark" || false}
        data-state={currentTheme === "dark" ? "checked" : "unchecked"}
        className="data-[state=checked]:bg-amber-700 data-[state=unchecked]:bg-amber-400"
      />
      <span>
        <MoonIcon className={currentTheme === "dark" ? "text-amber-400" : "text-geo-lightBlue1"} />
      </span>
    </div>
  );
}
