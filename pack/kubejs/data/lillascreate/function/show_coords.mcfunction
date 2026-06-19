# Enable trigger command for everyone
execute as @a run scoreboard players enable @s coords

# Set default state to 1 (enabled) if player has no score
execute as @a unless score @s coords = @s coords run scoreboard players set @s coords 1

# If trigger score is 2 (toggled from 1), reset to 0 (disabled)
execute as @a[scores={coords=2..}] run scoreboard players set @s coords 0

# For players with coords HUD enabled (coords = 1), fetch and store Pos NBT
execute as @a[scores={coords=1}] store result score @s xPos run data get entity @s Pos[0] 1
execute as @a[scores={coords=1}] store result score @s yPos run data get entity @s Pos[1] 1
execute as @a[scores={coords=1}] store result score @s zPos run data get entity @s Pos[2] 1

# Determine facing direction (1=South, 2=West, 3=North, 4=East)
execute as @a[scores={coords=1},rym=-45,ry=45] run scoreboard players set @s facing 1
execute as @a[scores={coords=1},rym=45,ry=135] run scoreboard players set @s facing 2
execute as @a[scores={coords=1},rym=135,ry=180] run scoreboard players set @s facing 3
execute as @a[scores={coords=1},rym=-180,ry=-135] run scoreboard players set @s facing 3
execute as @a[scores={coords=1},rym=-135,ry=-45] run scoreboard players set @s facing 4

# Render the formatted actionbar
execute as @a[scores={coords=1,facing=1}] run title @s actionbar [{"text":"X: ","color":"gold"},{"score":{"name":"@s","objective":"xPos"},"color":"white"},{"text":"  Y: ","color":"gold"},{"score":{"name":"@s","objective":"yPos"},"color":"white"},{"text":"  Z: ","color":"gold"},{"score":{"name":"@s","objective":"zPos"},"color":"white"},{"text":"  D","color":"yellow"}]
execute as @a[scores={coords=1,facing=2}] run title @s actionbar [{"text":"X: ","color":"gold"},{"score":{"name":"@s","objective":"xPos"},"color":"white"},{"text":"  Y: ","color":"gold"},{"score":{"name":"@s","objective":"yPos"},"color":"white"},{"text":"  Z: ","color":"gold"},{"score":{"name":"@s","objective":"zPos"},"color":"white"},{"text":"  Ny","color":"yellow"}]
execute as @a[scores={coords=1,facing=3}] run title @s actionbar [{"text":"X: ","color":"gold"},{"score":{"name":"@s","objective":"xPos"},"color":"white"},{"text":"  Y: ","color":"gold"},{"score":{"name":"@s","objective":"yPos"},"color":"white"},{"text":"  Z: ","color":"gold"},{"score":{"name":"@s","objective":"zPos"},"color":"white"},{"text":"  É","color":"yellow"}]
execute as @a[scores={coords=1,facing=4}] run title @s actionbar [{"text":"X: ","color":"gold"},{"score":{"name":"@s","objective":"xPos"},"color":"white"},{"text":"  Y: ","color":"gold"},{"score":{"name":"@s","objective":"yPos"},"color":"white"},{"text":"  Z: ","color":"gold"},{"score":{"name":"@s","objective":"zPos"},"color":"white"},{"text":"  K","color":"yellow"}]
