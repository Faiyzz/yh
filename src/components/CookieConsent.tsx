'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [necessaryCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    const consent = {
      necessary: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleDeny = () => {
    const consent = {
      necessary: true,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleCustomize = () => {
    const consent = {
      necessary: necessaryCookies,
      marketing: marketingCookies,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 p-6 shadow-lg transition-all duration-500 font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-white font-medium mb-2 tracking-[0.3em] text-sm lg:text-base">
              Cookie Preferences
            </h3>
            <p className="text-gray-300 text-sm mb-4 font-light">
              We use cookies to enhance your browsing experience and analyze site traffic.
              Choose your preferences below.
            </p>

            <button
              type="button"
              onClick={() => setShowCustomize(!showCustomize)}
              className="flex items-center gap-2 text-[#FFE241] hover:text-white transition-colors mb-4 font-light"
              aria-expanded={showCustomize}
              aria-controls="cookie-settings-panel"
            >
              <span className="text-sm tracking-wide">Customize Cookie Settings</span>
              {showCustomize ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showCustomize && (
              <div id="cookie-settings-panel" className="space-y-3 bg-zinc-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="necessary"
                    checked={necessaryCookies}
                    disabled
                    className="opacity-100"
                  />
                  <Label htmlFor="necessary" className="text-sm text-gray-300 font-light">
                    <span className="font-normal text-white">Necessary Cookies</span> – Required for basic site functionality (Cannot be disabled)
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="marketing"
                    checked={marketingCookies}
                    onCheckedChange={(checked: boolean | "indeterminate") => {
                      if (typeof checked === "boolean") {
                        setMarketingCookies(checked);
                      }
                    }}
                  />
                  <Label htmlFor="marketing" className="text-sm text-gray-300 font-light">
                    <span className="font-normal text-white">Marketing Cookies</span> – Help us improve our services and show relevant content
                  </Label>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-row gap-3 lg:ml-6 w-full lg:w-auto">
            {showCustomize ? (
              <Button
                type="button"
                onClick={handleCustomize}
                className="bg-[#FFE241] text-black hover:bg-[#FFE241]/90 flex-1 lg:flex-none font-medium"
              >
                Save Preferences
              </Button>
            ) : (
              <>
                <Button
                  type="button"
                  onClick={handleAccept}
                  className="bg-[#FFE241] text-black hover:bg-[#FFE241]/90 flex-1 lg:flex-none font-medium"
                >
                  Accept
                </Button>
                <Button
                  type="button"
                  onClick={() => setShowCustomize(true)}
                  variant="outline"
                  className="border-[#FFE241] text-black bg-[#FFE241]/20 hover:bg-[#FFE241]/30 hover:text-black flex-1 lg:flex-none font-medium"
                >
                  Customize
                </Button>
                <Button
                  type="button"
                  onClick={handleDeny}
                  variant="outline"
                  className="border-zinc-600 text-black bg-zinc-300 hover:bg-zinc-400 hover:text-black flex-1 lg:flex-none font-medium"
                >
                  Deny
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
