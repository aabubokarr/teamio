import type { VariantProps } from "tailwind-variants";

const useVariantProps = <
	P extends Record<string, unknown>,
	S extends VariantProps<any> & { defaultVariants: Record<string, any> },
>({
	props,
	styles,
}: {
	styles: S;
	props: P;
}) => {
	/**
	 * manupulate props with default values
	 */
	const variants = Object.fromEntries(
		Object.entries(styles.defaultVariants).map(([key, value]) => {
			const typedKey = key as keyof S["defaultVariants"];
			return Object.hasOwn(props, typedKey)
				? [key, props[typedKey as keyof P]]
				: [key, value];
		}),
	) as Required<{
		[K in keyof S["defaultVariants"]]: S["defaultVariants"][K];
	}>;

	/**
	 * data attributes
	 */
	const dataAttributes = Object.fromEntries(
		Object.entries(variants)
			.filter(([_, value]) => value !== undefined)
			.map(([key, value]) => [`data-${key.toLowerCase()}`, String(value)]),
	);

	/**
	 * return removed props
	 */
	const removedProps = Object.fromEntries(
		Object.entries(props).filter(([key]) => !(key in styles.defaultVariants)),
	);

	return { variants, dataAttributes, props: removedProps };
};

export { useVariantProps };
