
// Remove farmer's delight recipe water bucket + wheat -> dough
ServerEvents.recipes(event => {
  event.remove({ id: 'farmersdelight:wheat_dough_from_water' })

  event.shapeless(
    Item.of('create:dough', 3),
    [
      Item.of('create:wheat_flour', 3),
      Item.of('minecraft:egg', 1)
    ]
  )
})
