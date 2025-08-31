"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import type { Language } from "@/lib/i18n"

interface LanguageToggleProps {
  onLanguageChange: (language: Language) => void
  currentLanguage: Language
}

export function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === "pt" ? "en" : "pt")}
      className="flex items-center space-x-2 bg-transparent border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{currentLanguage === "pt" ? "EN" : "PT"}</span>
    </Button>
  )
}
