<script lang="ts">
  import { i18n } from "$lib/i18n";
  import { ParaglideJS } from "@inlang/paraglide-sveltekit";

  import "../app.css";
  import { goto, pushState } from "$app/navigation";
  import { page } from "$app/state";
  import { pb } from "$lib";
  import { user } from "$lib/stores";

  user.set(pb.authStore.record);

  pb.authStore.onChange(() => {
    user.set(pb.authStore.record);

    if (!pb.authStore.isValid) {
      return;
    }

    if (page.url.pathname.includes("login")) {
      const localisedPath = i18n.resolveRoute("/");
      goto(localisedPath);
    } else {
      pushState("", { showModal: false });
    }
  });

  let { children } = $props();
</script>

<ParaglideJS {i18n}>
  {@render children()}
</ParaglideJS>
