<div class="flex gap-8 justify-center">
  <slot name="left" />

  <div class="pt-8">
    <div class="mb-6">
      <slot name="heading" />
    </div>
    <div class="max-w-prose mb-6">
      <slot name="text" />
    </div>
    <slot name="after" />
  </div>

  <slot name="right" />
</div>
