ServerEvents.tags('block', event => {
  // @TODO :Not working
  const buddingBlocks = /geore:budding_.*/
  event.remove('create:non_movable', buddingBlocks)
  event.remove('c:relocation_not_supported', buddingBlocks)
  event.remove('c:non_movable', buddingBlocks)
  event.remove('c:immovable', buddingBlocks)

  /*
  const buddingBlocks = [
    'geore:budding_diamond'
  ]
  buddingBlocks.forEach(block => {
    event.remove('create:non_movable', block)
    event.remove('c:relocation_not_supported', block)
    event.remove('c:non_movable', block)
    event.remove('c:immovable', block)
  })
  */
})
