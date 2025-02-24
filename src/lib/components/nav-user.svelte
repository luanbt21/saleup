<script lang="ts">
  import { page } from "$app/state";
  import { pb } from "$lib";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { buttonVariants } from "$lib/components/ui/button/button.svelte";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as m from "$lib/paraglide/messages.js";
  import { user } from "$lib/stores";
  import BadgeCheck from "lucide-svelte/icons/badge-check";
  import Bell from "lucide-svelte/icons/bell";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import CreditCard from "lucide-svelte/icons/credit-card";
  import LogOut from "lucide-svelte/icons/log-out";
  import Sparkles from "lucide-svelte/icons/sparkles";
  import LoginForm from "./login-form.svelte";
</script>

{#if $user}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger class={buttonVariants({ variant: "ghost" })}>
      <Avatar.Root class="h-8 w-8 rounded-lg">
        <Avatar.Image src={$user.avatar} alt={$user.name} />
        <Avatar.Fallback class="rounded-lg">👤</Avatar.Fallback>
      </Avatar.Root>
      <div class="grid flex-1 text-left text-sm leading-tight">
        <span class="truncate font-semibold">{$user.name}</span>
        <span class="truncate text-xs">{$user.email}</span>
      </div>
      <ChevronsUpDown class="ml-auto size-4" />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      class="w-[--bits-dropdown-menu-anchor-width] min-w-56 rounded-lg"
      align="end"
      sideOffset={4}
    >
      <DropdownMenu.Label class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar.Root class="h-8 w-8 rounded-lg">
            <Avatar.Image src={$user.avatar} alt={$user.name} />
            <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
          </Avatar.Root>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{$user.name}</span>
            <span class="truncate text-xs">{$user.email}</span>
          </div>
        </div>
      </DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>
        <DropdownMenu.Item>
          <Sparkles />
          Upgrade to Pro
        </DropdownMenu.Item>
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>
        <DropdownMenu.Item>
          <BadgeCheck />
          Account
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <CreditCard />
          Billing
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Bell />
          Notifications
        </DropdownMenu.Item>
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
      <DropdownMenu.Item onclick={() => pb.authStore.clear()}>
        <LogOut />
        Log out
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
{:else}
  <Dialog.Root open={page.state.showModal}>
    <Dialog.Trigger class={buttonVariants()}>{m.Login()}</Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
      <Dialog.Header>
        <Dialog.Title>{m.Login()}</Dialog.Title>
        <Dialog.Description>
          {m.LoginDescription()}
        </Dialog.Description>
      </Dialog.Header>
      <div class="px-4">
        <LoginForm />
      </div>
    </Dialog.Content>
  </Dialog.Root>
{/if}
