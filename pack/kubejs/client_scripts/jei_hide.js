RecipeViewerEvents.removeEntries('item', event => {

  const itemsToHide = [
    /^sophisticatedbackpacks:(?!upgrade_base|stack_upgrade_(starter_tier|tier_1|tier_2|tier_3|tier_4)).*upgrade.*/,
    /^.*:.*incomplete.*/,
    /^.*:.*_spawn_egg$/,
    'sophisticatedbackpacks:stack_upgrade_tier_4',
	  'sophisticatedbackpacks:stack_downgrade_tier_1',
	  'sophisticatedbackpacks:stack_downgrade_tier_2',
	  'sophisticatedbackpacks:stack_downgrade_tier_3',
  ]

  event.remove(itemsToHide)

})

RecipeViewerEvents.removeEntries('fluid', event => {
    event.remove('sophisticatedcore:xp_still')
})
