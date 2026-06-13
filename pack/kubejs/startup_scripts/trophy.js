StartupEvents.registry('block', event => {
  event.create('lillascreate:trophy')
    .soundType('metal')
    .hardness(1.5)
    .resistance(10.0)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .fullBlock(false)
    .box(2, 0, 2, 12, 15, 12)
    .renderType('cutout_mipped')
    .waterlogged()
    .noValidSpawns(true)
    .item((i) => {
      i
        .tooltip('§6§oA trophy for your achievements!') // @TODO: Translate
        .rarity("EPIC")
        .fireResistant(true)
        .unstackable()
    })
})
