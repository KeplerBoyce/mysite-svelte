<div class="flex gap-8 justify-center items-center w-full">
  <slot name="left" />

  <div class="flex flex-col gap-3 w-full">
    <div class="flex flex-col gap-1">
      <slot name="heading" />
      <slot name="subheading" />
    </div>
    <div class="flex flex-col gap-3 max-w-prose">
      <slot name="text" />
      <slot name="after" />
    </div>
  </div>

  <slot name="right" />
</div>
