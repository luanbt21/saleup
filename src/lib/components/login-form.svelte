<script lang="ts">
  import { pb } from "$lib";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import LoaderCircle from "lucide-svelte/icons/loader-circle";
  import type { EventHandler } from "svelte/elements";

  import * as m from "$lib/paraglide/messages.js";

  let email = $state("");
  let password = $state("");
  let disabled = $state(false);

  const onsubmit: EventHandler<SubmitEvent, HTMLFormElement> = async (e) => {
    disabled = true;
    e.preventDefault();
    await pb.collection("users").authWithPassword(email, password);
    disabled = false;
  };

  const methods = pb.collection("users").listAuthMethods();
</script>

<form action="" {onsubmit}>
  <div class="grid gap-4">
    <div class="grid gap-2">
      <Label for="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="m@example.com"
        required
        bind:value={email}
      />
    </div>
    <div class="grid gap-2">
      <div class="flex items-center">
        <Label for="password">{m.Password()}</Label>
        <a href="##" class="ml-auto inline-block text-sm underline">
          {m.ForgotYourPassword()}
        </a>
      </div>
      <Input id="password" type="password" required bind:value={password} />
    </div>
    <Button type="submit" class="w-full" {disabled}>
      {#if disabled}
        <LoaderCircle class="animate-spin" />
      {/if}
      {m.Login()}
    </Button>

    {#await methods then { oauth2 }}
      {#if oauth2.enabled}
        {#each oauth2.providers as provider}
          <Button
            variant="outline"
            class="w-full"
            onclick={() =>
              pb
                .collection("users")
                .authWithOAuth2({ provider: provider.name })}
          >
            {m.LoginWith()} {provider.displayName}</Button
          >
        {/each}
      {/if}
    {/await}
  </div>
</form>

<!-- <div class="mt-4 text-center text-sm">
  Don't have an account?
  <a href="##" class="underline"> Sign up </a>
</div> -->
