ServerEvents.tags('block', event => {
  const buddingBlocks = /geore:budding_.*/
  event.remove('create:non_movable', buddingBlocks)
  event.remove('c:relocation_not_supported', buddingBlocks)
  event.remove('c:non_movable', buddingBlocks)
})
