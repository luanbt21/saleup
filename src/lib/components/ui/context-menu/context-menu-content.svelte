<script lang="ts">
import { cn } from "$lib/utils.js";
import { ContextMenu as ContextMenuPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	portalProps,
	...restProps
}: ContextMenuPrimitive.ContentProps & {
	portalProps?: ContextMenuPrimitive.PortalProps;
} = $props();
</script>

<ContextMenuPrimitive.Portal {...portalProps}>
	<ContextMenuPrimitive.Content
		class={cn(
			"bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-hidden",
			className
		)}
		{...restProps}
		bind:ref
	/>
</ContextMenuPrimitive.Portal>
