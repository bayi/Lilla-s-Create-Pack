
refresh:
	@cd pack; packwiz refresh

export:
	@cd pack; packwiz modrinth export
	@mv pack/*.mrpack ./ || true

sync:
	@echo "Syncing config with instance ..."
	@cp -r pack/config/* instance/config/
