import { Slot } from "radix-ui";
import React from "react";

function Icon({ children, ...props }: React.PropsWithChildren) {
  return (
    <Slot.Root data-slot="icon" {...props}>
      {children}
    </Slot.Root>
  );
}

export { Icon };
