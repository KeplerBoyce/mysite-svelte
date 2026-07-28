<div class="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full">
  <slot name="left" />

  <div class="flex flex-col gap-3 w-full">
    <div class="flex flex-col gap-1 items-center md:items-start text-left">
      <slot name="heading" />
      <slot name="subheading" />
    </div>
    <div class="flex flex-col gap-3 max-w-prose items-center md:items-start text-left">
      <slot name="text" />
      <slot name="after" />
    </div>
  </div>

  <slot name="right" />
</div>
