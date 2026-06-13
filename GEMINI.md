# Project: Lillas Create Modpack

## General Information

This is a modpack centered around Create, Farmer's Delight, AE2 and Computer Craft. It is designed to be a fun and challenging experience for players who enjoy automation, farming, and exploration. The modpack includes a variety of mods that enhance the gameplay experience, including new machines, tools, and resources.

The mode files and dependencies are managed through `packwiz`. A Makefile is provided to automate the process of updating, exporting the modpack.

This is a git repository.

The main functionality and glue logic is implemented inside `kubejs` scripts, which are located in the `pack/kubejs` folder. The scripts are written in JavaScript and provide a way to customize the behavior of the mods in the modpack.

It is highly desirable to have every mod included translated to hungarian.

## Important files

For current progress, notes, etc see `NOTES.md`.

Original upstream hungarian translations are found inside the `upstream-translations` folder. These are the translations that are provided by the mod authors themselves. These should be used as a guide for creating the Hungarian translations, but they may not be complete or accurate.
Please use minecraft terms always as they appear in the file (e.g. "blokk", "entitás". Colors like "vörös" for "red" should be translated as "vörös", not "piros"). If you are unsure about a translation, please consult the original Hungarian file or ask for help.


