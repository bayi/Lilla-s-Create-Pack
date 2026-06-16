# Project: Lillas Create Modpack

## General Information

This is a modpack centered around Create, Farmer's Delight and AE2. It is designed to be a fun and challenging experience for players who enjoy automation, farming, and exploration. The modpack includes a variety of mods that enhance the gameplay experience, including new machines, tools, and resources.

The mode files and dependencies are managed through `packwiz`. A Makefile is provided to automate the process of updating, exporting the modpack.

This is a git repository.

The main functionality and glue logic is implemented inside `kubejs` scripts, which are located in the `pack/kubejs` folder. The scripts are written in JavaScript and provide a way to customize the behavior of the mods in the modpack.

It is highly desirable to have every mod included translated to hungarian.

## Important files

For current progress, notes, etc see `NOTES.md`.

The `upstream-translations` contains all the mods original provided translations. en_us.json and if provided upstream hu_hu.json. Inside the minecraft/ folder the 26.1 client hungarian upstream translations are also provided use that as an absolute guideline for future translations. Do not edit/change these files. The hungarian translations might be incomplete or just contain a copy of the english one. If there are any hungarian translations provided in the upstream mod please use those explicitly.
Please use minecraft terms always as they appear in the file (e.g. "blokk", "entitás". Colors like "vörös" for "red" should be translated as "vörös", not "piros"). If you are unsure about a translation, please consult the original Hungarian file or ask for help.
The minecraft/ folder in here is a bit complicated as multiple other mods also use the minecraft namespace (vanillabackport and copperagebackport). Those mods subfolders are inside the minecraft/ folder and the upstream 26.1 client is in the 26.1-client-upstream folder.
The same is true for Create related mods and addons, please use the original Hungarian translations provided by the mod authors as a guide.
There is also an AE2 upstream translation file, use this to translate AE2 related mods.


