<div class="flex gap-8 justify-center">
  <slot name="left" />

  <div class="pt-8">
    <slot name="heading" />
    <slot name="subheading" />
    <div class="max-w-prose">
      <slot name="text" />
      <slot name="after" />
    </div>
  </div>

  <slot name="right" />
</div>
