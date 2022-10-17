# doABreak

Example of nodejs software integrated with Windows Task Scheduler to remind you to do a break every 2 hours.

To make it run:
- install nodejs
- build the project doABreakTracker with 

    npm run build

- import the dbStart_*.xml file into Windows Task Scheduler and set up the proper path a time you like to run them.

## doABreak_start.xml
Track into ~\doABreak.json the last time you login

## doABreak_workstationLock.xml
Track into ~\doABreak.json the last time you lock your workstation

## doABreak_workstationUnlock.xml
Track into ~\doABreak.json the last time you unlock your workstation

## doABreak_check.xml
Create a scheduled task every time you login or unlock your workstation.
When the task expires, it checks if you need a break from the last pause.


## Add the scheduled task from DOS CMD

Type the following command to import a scheduled task and press Enter:

	schtasks /create /xml "%UserProfile%\git\doABreak\doABreak_check.xml /tn "\doABreak\doABreak_check" /ru "COMPUTER-NAME\USER-NAME"
	schtasks /create /xml "%UserProfile%\git\doABreak\doABreak_check.xml /tn "\doABreak\doABreak_check" /ru "COMPUTER-NAME\USER-NAME"
	schtasks /create /xml "%UserProfile%\git\doABreak\doABreak_check.xml /tn "\doABreak\doABreak_check" /ru "COMPUTER-NAME\USER-NAME"
	schtasks /create /xml "%UserProfile%\git\doABreak\doABreak_check.xml /tn "\doABreak\doABreak_check" /ru "COMPUTER-NAME\USER-NAME"

In the command, make sure to update the command (/XML xmlfile, /TN taskname, /RU  username) with your device details.
Quick tip: If the command fails or you don't want to enter the password manually, make sure to append the /RP  [password] after specifying the /RU  username parameter.