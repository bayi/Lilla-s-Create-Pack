INSTANCE_PATH="./instance"

refresh:
	@cd pack; packwiz refresh

update:
	@cd pack; packwiz update --all

export:
	@cd pack; packwiz modrinth export
	@mv pack/*.mrpack ./dist/ || true

sync:
	@echo "Syncing config with instance ..."
	@cp -r pack/config "${INSTANCE_PATH}/"
	@cp -r pack/kubejs "${INSTANCE_PATH}/"

sync-back:
	@echo "Syncing config back to pack ..."
	@cp -r "${INSTANCE_PATH}/kubejs" pack/
