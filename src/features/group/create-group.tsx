import { IconPlus } from "@tabler/icons-react";
import { Dialog, DialogTrigger } from "react-aria-components";

import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Modal, ModalOverlay } from "@/components/ui/modal";

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

			<ModalOverlay className="grid center-grid items-center [--container:min(80%,--spacing(98))]">
				<Modal className="p-3 bg-background rounded-default">
					<Dialog
						aria-label="Create Group"
						className="focus-visible:outline-none space-y-4"
					>
						<div className="flex flex-col justify-center items-center gap-y-2">
							<Logo className="w-25" />
							<div className="text-center">
								<h2 className="text-sm font-semibold">Create group</h2>
								<p className="text-xs opacity-70">
									You can create a group for your community or a group for your
									friends.
								</p>
							</div>
						</div>

						<form>
							<h1>Form Goes Here</h1>
						</form>
					</Dialog>
				</Modal>
			</ModalOverlay>
		</DialogTrigger>
	);
}

export { CreateGroup };
