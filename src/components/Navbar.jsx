import React, { useEffect, useId, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({
	brand,
	links,
	scrolled = false,
	variant = "light", // light | overlay
	topOffset = 0,
}) {
	const navigate = useNavigate();
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const drawerId = useId();

	const isActive = (to) => {
		if (!to) return false;
		if (to === "/") return location.pathname === "/";
		return location.pathname === to || location.pathname.startsWith(`${to}/`);
	};

	useEffect(() => {
		const onPopState = () => setOpen(false);
		window.addEventListener("popstate", onPopState);
		return () => window.removeEventListener("popstate", onPopState);
	}, []);

	useEffect(() => {
		if (!open) return;

		const onKeyDown = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [open]);

	const go = (to) => {
		navigate(to);
		setOpen(false);
	};

	return (
		<>
			<header
				className={[
					"mpk-navbar",
					`mpk-navbar--${variant}`,
					scrolled ? "is-scrolled" : "",
				]
					.filter(Boolean)
					.join(" ")}
				style={variant === "overlay" ? { top: topOffset } : undefined}
			>
				<div className="mpk-navbar__inner">
					<button
						type="button"
						className="mpk-navbar__brand"
						onClick={() => go("/")}
						aria-label="Go to home"
					>
						{brand}
					</button>

					<nav className="mpk-navbar__desktop" aria-label="Primary">
						<ul className="mpk-navbar__links">
							{links.map((l) => (
								<li key={l.to}>
									<button
										type="button"
										className={[
											"mpk-navbar__link",
											isActive(l.to) ? "is-active" : "",
										]
											.filter(Boolean)
											.join(" ")}
										onClick={() => go(l.to)}
										aria-current={isActive(l.to) ? "page" : undefined}
									>
										{l.label}
									</button>
								</li>
							))}
						</ul>
					</nav>

					<button
						type="button"
						className={[
							"mpk-navbar__burger",
							open ? "is-open" : "",
						]
							.filter(Boolean)
							.join(" ")}
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						aria-controls={drawerId}
						onClick={() => setOpen((v) => !v)}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</header>

			<div
				className={[
					"mpk-drawerOverlay",
					open ? "is-open" : "",
				]
					.filter(Boolean)
					.join(" ")}
				onClick={() => setOpen(false)}
				aria-hidden={!open}
			/>

			<aside
				id={drawerId}
				className={["mpk-drawer", open ? "is-open" : ""]
					.filter(Boolean)
					.join(" ")}
				aria-label="Mobile navigation"
			>
				<div className="mpk-drawer__header">
					<div className="mpk-drawer__brand">{brand}</div>
					<button
						type="button"
						className="mpk-drawer__close"
						onClick={() => setOpen(false)}
						aria-label="Close menu"
					>
						×
					</button>
				</div>

				<nav>
					<ul className="mpk-drawer__links">
						{links.map((l) => (
							<li key={l.to}>
								<button
									type="button"
									className={[
										"mpk-drawer__link",
										isActive(l.to) ? "is-active" : "",
									]
										.filter(Boolean)
										.join(" ")}
									onClick={() => go(l.to)}
									aria-current={isActive(l.to) ? "page" : undefined}
								>
									{l.label}
								</button>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</>
	);
}
