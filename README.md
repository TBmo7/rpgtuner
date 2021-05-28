# rpgtuner
Application for fine tuning pen and paper RPGs


The idea behind this is to be able to fine tune stats, armor, etc. and see their impact on combat(initially).

Player stats will be pulled in, from the app or database and then run through a simulator that simulates ~1000 combats.

Stats will be displayed.

Eventually the stats will be broken down and displayed in a graph format as well as being able to compare combat stats to the previous run.

Firebase will be used as the database provider.

Proposed Features.

Save Characters, Save Builds, Save combat stats, visualized data, simulators for different encounters.


5/28

Big update dump

Currently stats affect skills, and will be reflected in combat

The combat simulator is running on a "dummy" formula, and not the final formulas

The turn counter works properly, but the dice rolls are not accurately keeping trakc of how many dice rolls are needed to resolve a singular combat

The idea behind all the "average" results is to tweak stats, and combat formulas to bring things within a "reasonable" range.
This way the RPG can be developed faster, while simulating 1000 combats and getting the average change.

*******TODO*******
Bring in the acutal combat formula

Bring in combat dice/weapons

work out average stats

*******NICE TO HAVES*******

Update state, save state, and pull in states from Firebase instead of all local
This way it can be pulled in from different machines.
