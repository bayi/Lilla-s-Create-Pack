RecipeViewerEvents.removeEntries('item', event => {

  const itemsToHide = [
    /^geore:.*(allthemodium|aluminum|black_quartz|lead|monazite|nickel|osmium|platinum|ruby|sapphire|silver|tin|topaz|tungsten|unobtainium|uraninite|uranium|vibranium).*/,
    /^sophisticatedbackpacks:(?!upgrade_base|crafting_upgrade|stonecutter_upgrade|anvil_upgrade|smithing_upgrade|stack_upgrade_(starter_tier|tier_1|tier_2|tier_3|tier_4)).*upgrade.*/,
    /^createcasing:(.*creative|chorium_ingot)/,
    /^create:creative_.*/,
    /^simulated:creative_.*/,
    /^createaddition:creative_.*/,
    /^.*:.*incomplete.*/,
    /^.*:.*_spawn_egg$/,
    'create:handheld_worldshaper',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
	  'sophisticatedbackpacks:stack_downgrade_tier_1',
	  'sophisticatedbackpacks:stack_downgrade_tier_2',
	  'sophisticatedbackpacks:stack_downgrade_tier_3',
    'sophisticatedcore:xp_bucket',
    'create_sa:copper_pickaxe',
    'create_sa:copper_axe',
    'create_sa:copper_shovel',
    'create_sa:copper_hoe',
    'create_sa:copper_sword',
    'create_sa:copper_helmet',
    'create_sa:copper_chestplate',
    'create_sa:copper_leggings',
    'create_sa:copper_boots',
    'create_sa:flamethrower',
    'create_sa:vault_component',
    'create_sa:fan_component',
    'create_sa:brass_drone_item',
    'create_sa:drone_controller',
    'create_sa:creative_filling_tank',
    'moonlight:spawn_box',
    'easy_villagers:auto_trader',
    'easy_villagers:farmer',
    'easy_villagers:breeder',
    'easy_villagers:converter',
    'easy_villagers:iron_farm',
    'easy_villagers:incubator',
    'easy_villagers:inventory_viewer',
  ]

  event.remove(itemsToHide)

})

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove('sophisticatedcore:xp_still')
})
