import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import "./styles.modules.css";

function Spinner({ className }: { className?: string }) {
	return (
		<Icon>
			<div className={cn("size-5", className)}>
				<div className="spinner size-full">
					{[...Array(12)].map((_, i) => (
						<div key={i} />
					))}
				</div>
			</div>
		</Icon>
	);
}

export { Spinner };
