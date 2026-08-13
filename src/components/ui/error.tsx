import { Image } from "@unpic/react";
import React from "react";

import { Logo } from "@/components/icons/logo";

export interface ErrorComponentProps {
	message?: string;
	action?: React.ComponentType;
}
function ErrorComponent(props: ErrorComponentProps) {
	const { message = "Something went wrong", action } = props;

	return (
		<div className="w-screen items-center min-h-dvh grid center-grid lg:[--container:min(--spacing(175),60%)]">
			<div className="grid items-center md:grid-cols-[2fr_1fr] gap-4 xl:gap-12">
				<Image
					alt="Error"
					src="/assets/ghost.png"
					layout="fullWidth"
					className="object-cover h-full aspect-square"
				/>

				<div className="space-y-4">
					<Logo className="w-35" />
					<h2 className="font-semibold text-9xl">Oops!</h2>
					<p className="text-sm">{message}</p>

					{action ? React.createElement(action) : null}
				</div>
			</div>
		</div>
	);
}

export { ErrorComponent };
