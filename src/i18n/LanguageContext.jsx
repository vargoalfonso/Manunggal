import React, { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./languageContext";

const STORAGE_KEY = "mpk.lang";

function getInitialLang(defaultLang) {
	if (typeof window === "undefined") return defaultLang;
	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		return stored || defaultLang;
	} catch {
		return defaultLang;
	}
}

export function LanguageProvider({ defaultLang = "id", children }) {
	const [lang, setLang] = useState(() => getInitialLang(defaultLang));

	useEffect(() => {
		try {
			window.localStorage.setItem(STORAGE_KEY, lang);
		} catch {
			// ignore write errors (private mode, disabled storage, etc.)
		}
	}, [lang]);

	const value = useMemo(() => ({ lang, setLang }), [lang]);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}
