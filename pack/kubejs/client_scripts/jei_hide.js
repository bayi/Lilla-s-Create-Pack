RecipeViewerEvents.removeEntries('item', event => {

  const itemsToHide = [
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
