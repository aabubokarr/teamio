import * as m from "motion/react-m";
import React from "react";
import {
	ModalOverlay as ModalOverlayPrimitive,
	Modal as ModalPrimitive,
	OverlayTriggerStateContext,
} from "react-aria-components";

import {
	TRANSITION_EASINGS,
	TRANSITION_VARIANTS,
} from "@/components/utilities/transition";
import { cn } from "@/lib/utils";
import { AnimatePresence, LazyMotion, domAnimation } from "motion/react";

const MotionModalOverlay = m.create(ModalOverlayPrimitive);
const MotionModal = m.create(ModalPrimitive);

function ModalOverlay({
	className,
	style,
	...props
}: React.ComponentProps<typeof ModalOverlayPrimitive>) {
	const state = React.use(OverlayTriggerStateContext);

	return (
		<LazyMotion features={domAnimation}>
			<AnimatePresence>
				{state?.isOpen && (
					<MotionModalOverlay
						isOpen
						onOpenChange={state.setOpen}
						isDismissable
						variants={TRANSITION_VARIANTS.fade}
						initial="exit"
						animate="enter"
						exit="exit"
						className={cn(
							"fixed inset-0 will-change-auto bg-[rgba(0,0,0,var(--_bg-opacity))] backdrop-blur-(--_backdrop-blur) backdrop-saturate-(--_backdrop-saturate)",
							className,
						)}
						{...props}
					/>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}

function Modal({
	className,
	style,
	...props
}: React.ComponentProps<typeof ModalPrimitive>) {
	return (
		<MotionModal
			variants={{
				enter: {
					scale: "100%",
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.4,
						ease: TRANSITION_EASINGS.easeOut,
					},
				},
				exit: {
					scale: "95%",
					opacity: 0,
					y: 20,
					transition: {
						duration: 0.3,
						ease: TRANSITION_EASINGS.easeOut,
					},
				},
			}}
			initial="exit"
			animate="enter"
			exit="exit"
			className={cn("will-change-transform", className)}
			{...props}
		/>
	);
}

export { Modal, ModalOverlay, MotionModal, MotionModalOverlay };
