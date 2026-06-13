ServerEvents.tags('block', event => {
  event.remove('create:non_moveable', /geore:budding_.*/)
})
