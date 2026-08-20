import { IconPlus } from "@tabler/icons-react";
import { DialogTrigger } from "react-aria-components";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

function CreateGroup() {
	return (
		<DialogTrigger>
			<Button
				className={{
					base: "w-full",
				}}
				color="black"
			>
				<Icon>
					<IconPlus />
				</Icon>
				Create Another Community
			</Button>
		</DialogTrigger>
	);
}

export { CreateGroup };
