import React from "react";
import { MPK } from "../content/companyProfile";

export default function Footer({ lang = "id" }) {
	const year = new Date().getFullYear();

	return (
		<footer className="mpk-footer">
			<div className="mpk-footer__inner">
				<div className="mpk-footer__grid">
					<div className="mpk-footer__brand">
						<h2 className="mpk-footer__title">{MPK.legalName}</h2>
						<p className="mpk-footer__subtitle">
							{lang === "id"
								? "Flexible Packaging Manufacturer"
								: "Flexible Packaging Manufacturer"}
						</p>

						<iframe
							className="mpk-footer__map"
							title="maps"
							src={MPK.location.mapsEmbedUrl}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							allowFullScreen
						/>
					</div>

					<div className="mpk-footer__col">
						<h4 className="mpk-footer__heading">Services</h4>
						<ul className="mpk-footer__list">
							<li>Printing</li>
							<li>Dry Lamination</li>
							<li>Slitting &amp; Rewinding</li>
							<li>Bag Making</li>
						</ul>
					</div>

					<div className="mpk-footer__col">
						<h4 className="mpk-footer__heading">Company</h4>
						<ul className="mpk-footer__list">
							<li>{lang === "id" ? "Profil Perusahaan" : "Company Profile"}</li>
							<li>{lang === "id" ? "Material" : "Materials"}</li>
							<li>{lang === "id" ? "Aplikasi" : "Applications"}</li>
						</ul>
					</div>

					<div className="mpk-footer__col">
						<h4 className="mpk-footer__heading">Contact</h4>
						<div className="mpk-footer__meta">
							<div>☎ Office: {MPK.contact.phoneOffice}</div>
							<div>☎ Factory: {MPK.contact.phoneFactory}</div>
							<div>{MPK.location.addressLines?.[1] ?? MPK.location.addressLines?.[0]}</div>
						</div>
					</div>
				</div>

				<div className="mpk-footer__bottom">
					<span>
						© {year} {MPK.brand}
					</span>
					<span>Privacy • Terms</span>
				</div>
			</div>
		</footer>
	);
}
