import type { Variant } from "motion/react";

type TransitionVariants = Record<string, Record<string, Variant>>;

export const TRANSITION_EASINGS = {
	appleEase: [0.32, 0.72, 0, 1],
	ease: [0.36, 0.66, 0.4, 1],
	easeIn: [0.4, 0, 1, 1],
	easeOut: [0, 0, 0.2, 1],
	easeInOut: [0.4, 0, 0.2, 1],
	spring: [0.155, 1.105, 0.295, 1.12],
	springOut: [0.57, -0.15, 0.62, 0.07],
	softSpring: [0.16, 1.11, 0.3, 1.02],
} as const;

export const TRANSITION_VARIANTS = {
	fade: {
		enter: {
			"--_bg-opacity": 0.2,
			"--_backdrop-saturate": "150%",
			"--_backdrop-blur": "4px",
			transition: {
				duration: 0.2,
				ease: TRANSITION_EASINGS.ease,
			},
		},
		exit: {
			"--_bg-opacity": 0,
			"--_backdrop-saturate": "100%",
			"--_backdrop-blur": "0px",
			transition: {
				duration: 0.2,
				ease: TRANSITION_EASINGS.ease,
			},
		},
	},
} satisfies TransitionVariants;
