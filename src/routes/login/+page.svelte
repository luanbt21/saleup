<script lang="ts">
  import LoginForm from "$lib/components/login-form.svelte";
  import * as Card from "$lib/components/ui/card/index.js";

  import * as m from "$lib/paraglide/messages.js";
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
  <Card.Root class="mx-auto max-w-sm">
    <Card.Header>
      <Card.Title class="text-2xl">Login</Card.Title>
      <Card.Description>{m.LoginDescription()}</Card.Description>
    </Card.Header>
    <Card.Content>
      <LoginForm />
    </Card.Content>
  </Card.Root>
</div>
