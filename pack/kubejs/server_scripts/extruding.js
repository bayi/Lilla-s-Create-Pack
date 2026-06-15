ServerEvents.recipes(event => {
  // Remove all existing extruding recipes
  event.remove({ type: 'create_mechanical_extruder:extruding' })

  // Cobblestone
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('minecraft:cobblestone', 8),
    [BlockPredicate.of('minecraft:water'),BlockPredicate.of('minecraft:lava')]
  )

  // Asurine
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:asurine', 4),
    [BlockPredicate.of('minecraft:lapis_block'),BlockPredicate.of('minecraft:lava')]
  )

  // Basalt
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('minecraft:basalt', 8),
    [BlockPredicate.of('minecraft:blue_ice'),BlockPredicate.of('minecraft:lava')]
  ).catalyst('minecraft:soul_soil')

  // Crimsite
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:crimsite', 4),
    [BlockPredicate.of('minecraft:iron_block'),BlockPredicate.of('minecraft:lava')]
  ).catalyst('minecraft:soul_soil')

  // Deepslate
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('minecraft:deepslate', 8),
    [BlockPredicate.of('minecraft:water'),BlockPredicate.of('minecraft:lava')]
  ).requirements(
    [
      RecipeRequirement.maxY(0)
    ]
  )

  // End Stone
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('minecraft:end_stone', 8),
    [BlockPredicate.of('minecraft:blue_ice'),BlockPredicate.of('minecraft:lava')]
  )
    .catalyst(BlockPredicate.of("minecraft:end_stone"))
    .advanced(true)

  // Netherrack
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('minecraft:netherrack', 8),
    [BlockPredicate.of('minecraft:blue_ice'),BlockPredicate.of('minecraft:lava')]
  )
    .catalyst(BlockPredicate.of("minecraft:netherrack"))
    .advanced(true)

  // Scoria
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:scoria', 4),
    [BlockPredicate.of('minecraft:lava'),BlockPredicate.of('create:chocolate')]
  )

  // Snow
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('minecraft:snow_block', 8),
    [BlockPredicate.of('minecraft:water'),BlockPredicate.of('minecraft:water')]
  )
    .requirements(
      [
        RecipeRequirement.minY(150),
      ]
    )

  // Sandstone
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('minecraft:sandstone', 4),
    [BlockPredicate.of('minecraft:lava'),BlockPredicate.of('minecraft:sand')]
  )

  // Limestone
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:limestone', 4),
    [BlockPredicate.of('create:honey'),BlockPredicate.of('minecraft:lava')]
  )

  // Ochrum
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:ochrum', 4),
    [BlockPredicate.of('minecraft:gold_block'),BlockPredicate.of('minecraft:lava')]
  )

  // Veridium
  event.recipes.create_mechanical_extruder.extruding(
    Item.of('create:veridium'),
    [BlockPredicate.of('minecraft:prismarine'),BlockPredicate.of('minecraft:lava')]
  )

})
