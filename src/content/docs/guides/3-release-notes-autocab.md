---
title: Release Notes, Autocab
description: An example of release notes for a software product.
---

While working at [Autocab](https://support.autocab.com/hc/en-gb), I wrote these release notes to help users find out about the latest changes to the Autocab software. Autocab is the UK's market leading taxi & private hire booking and dispatch software provider, offering innovative solutions to help businesses go further.

**Tools used: Markdown, Zendesk**

# 365 Control Centre 0.19.2240

*Connor - Created 2 years ago - Updated 1 year ago - 7 minute read*

Here you will find the latest features, improvements, and bug fixes for the 365 Control Centre.

To ensure you have the best experience using our product, we recommend updating to the latest version available.

> **Note**: The features available to you will depend on the configuration and the current version of the 365 Control Centre you're using.

> **Note**: The minimum version of Ghost required is 19.000.168 or later.

## What's New

### Rezone on the fly (ROTF)

Gone are the days when you have to contact support to update your zones! The current process has been completely overhauled and now puts you in full control of your zones.

Using the [Zone Maker](https://support.autocab.com/hc/en-gb/articles/5544751532189) you can draft, edit, and update your zones with ease from the [365 Control Centre](https://support.autocab.com/hc/en-gb/categories/4847216296861-365-Control-Centre). 

Modes:

* **Live**: In this mode, you can view the live configuration of your zones.
* **Draft**: In this mode, you can view and edit your zone configuration as a draft, and then apply this draft to live.

![Rezone on the fly.](https://support.autocab.com/hc/article_attachments/7282355040541)

> **Note**: When you create a new draft, the current draft will be overridden and any changes made will apply to all zone areas ([Zone Maker](https://support.autocab.com/hc/en-gb/articles/5544751532189), [Zone List](https://support.autocab.com/hc/en-gb/articles/4451461586461), [Backup Zones](https://support.autocab.com/hc/en-gb/articles/4463738383517), [Bid Zones](https://support.autocab.com/hc/en-gb/articles/4464173368093), [Feeder Zones](https://support.autocab.com/hc/en-gb/articles/4464568441885), and [Zone Groups](https://support.autocab.com/hc/en-gb/articles/4468510901405). But don't worry as you can always restore the backup of a previous zone configuration.

### Backup zone penalties 

We've made some enhancements so you can fully customise which backup zones will or won't have penalties applied. See [Backup Zones](https://support.autocab.com/hc/en-gb/articles/4463738383517) to learn how. 

![New backup zone penalties.](https://support.autocab.com/hc/article_attachments/7282970684445)

> **Note**: Previously you would configure your penalties per zone in the [Zone List](https://support.autocab.com/hc/en-gb/articles/4451461586461). However, the 'Disable Job Recover Penalty' and 'Disable Job Reject Penalty' settings have been removed from the configuration tab and replaced with the new rules available in [Backup Zones](https://support.autocab.com/hc/en-gb/articles/4463738383517).

### Bid for active bookings

New settings have been added so you can configure the [Bid for active](https://support.autocab.com/hc/en-gb/articles/7279954804125) feature available on Driver Companion.

Zones > Dispatch Configuration > Bidding:

* **Active Booking Bidding**: This section contains your bid for active bookings settings. 
* **Enable Bidding for Active Bookings**: Turn on to allow drivers to bid for active bookings within Driver Companion. 
* **Limit Number of Bookings Shown**: Set how many bookings should be displayed (1-10).
* **Enable New Active Booking Notification**: Turn on to show a push notification to off-app drivers so they know a new active booking is available to bid on.
* **Default Job Selection Recipe**: Select a special job recipe if you want to filter which active bookings can be bid on. 

Drivers/Vehicles > Driver Companion > Settings Groups > Functionality Groups > add/edit > Features:

* **Active Booking Bidding Mode**
* **Off**: Select to turn active booking bidding off for the group. 
* **Use Default**: Select if the group should use the default settings from the [Dispatch Configuration](https://support.autocab.com/hc/en-gb/articles/4468864506269). 
* **Custom**: Job Selection Recipe: Select a [Special Booking](https://support.autocab.com/hc/en-gb/articles/4407045441053) recipe to use instead of the default.  

Booking > Special Bookings > add/edit > Conditions:

* Booking has priority of X or more.
* Booking has been active for X many minutes.
* Booking is X many minutes late. 
* If price after surge is more/less than the original price by this percentage.

## Improvements

### User roles: new permissions

A new permission has been added to the [user roles](https://support.autocab.com/hc/en-gb/articles/4488539699485) tab within 365 to toggle on or off the 'Pricing: Add fixed price to booking (Ctrl+F6)' option. 

### Translation updates

The following locales have had the translations updated: bg-BG, de-DE, en-AU, en-IE, es-AR, es-CL, es-CO, es-ES, es-MX, es-PE, fr-CA, fr-FR, fr-LU, fr-LT, no-NO, pt-BR, pt-PT, ru-RU, sr-sp, uk-UA.

### Removed feature: add credit cards to driver details

We’ve removed the option to add credit cards directly to a driver’s account. But don’t worry, we’ve replaced this option with our new pay-by-link feature that will automatically store the driver’s card details when they’ve done a pay-by-link payment. Saving you and the driver valuable time.

> **Note**: Any cards added using the original method will stop working when the 3D secure is enabled.

### ROTF changes

The following changes have been made to the [ROTF feature](https://autocab.zendesk.com/hc/en-gb/articles/5544751532189):

* The MDT Zone ID has been added back to the list of zones.
* The actions (Rename, Edit Zone, Delete) on the list of zones are now accessed by clicking the (Three dots) icon for each zone.
* A search bar has been added to the list of zones.

Shortcuts:

* Esc: Deselect a selected zone or cancel boundary changes when editing a zone. 
* Ctrl+Z: Undo the last change.
* Ctrl+Q: Create a new zone.
* Ctrl+E: Edit the selected zone.
* Ctrl+C: Center the map or on a selected zone.
* Tab: Select the next zone or a zone if none are selected. 
* Shift+Tab: Select the previous zone or last if none are selected.
* Enter: Confirm changes when editing.

### Booking controls: delete non-default rule

When on the [Booking Controls](https://support.autocab.com/hc/en-gb/articles/4419530491281) screen, you can now delete a rule if the rule isn't a default. This is done by selecting the rule and clicking the Delete button next to Copy Rule. 

> **Note**: A confirmation message will be displayed to inform you that you're about to delete a booking control rule. 

### Booking controls: Chatbot source

The 'Chatbot' booking source has now been added to all the [Booking Controls](https://support.autocab.com/hc/en-gb/articles/4419530491281). 

### Booking controls: shortcuts

You can now select [booking controls](https://support.autocab.com/hc/en-gb/articles/4419530491281) by pressing Ctrl+A for all, or Ctrl+Shift for multiple. 

### Charging zones

You can now toggle your charging zones ON or OFF when you choose to edit them. 

### System update scheduled

When a system update is scheduled, you'll now see an orange icon at the top of the screen, rather than a green icon. 

## Bug Fixes

* Fixed: The 'Force posting to accounts' toggle defaults to 'off' when saving a custom fare template. 
* Fixed: Unable to set a tariffs capability charge to a lower value than shown (e.g. when trying to set the cost/price from 5 to 4).
* Fixed: The address 'Group' is missing when editing a Tariff's destination. 
* Fixed: When editing a Zone to Zone template matrix, decimal values cannot be entered into the cells. 
* Fixed: The graph's within the Drivers and Vehicles screen are not showing the 'Actions Required' status when documents are expired.
* Fixed: When on a multi-company system, users restricted to only 1 company can view and access drivers for every company on the system. 
* Fixed: An error was displayed when trying to set the system locale to a locale we don’t support.
* Fixed: When creating a new zone draft, the zone groups and feeder zones were duplicated. 
* Fixed: The tariff pop-up was not showing the pick-up or destination zone due to the wrong error being read by the system. 
* Fixed: When editing a zone, the connected points didn't move due to rounding issues. 
* Fixed: Zone cell template not showing historic zones.
* Fixed: Connecting boundary points are hit and miss if it works or not. 
* Fixed: Removed debug code that made it out into the wild.
* Fixed: Issues with backup and bid zones; infinite loading icon displayed, selected day not displayed, selected time not shown when cloning a zone. 
* Fixed: An issue causing the Driver Groups icon to redirect you to the dashboard, rather than the actual page. 
* Fixed: Incorrect field names are showing on the promo code transaction pop-up. 
* Fixed: Unable to select any recipe options for the 'Out Of Area Dead Mileage Compensation (Round Robin)' setting. 
* Fixed: The filter option for invalid records is not working on certain tables after a rezone. 
* Fixed: The driver and vehicle tabs are disappearing sometimes when loading the Licences page. 
* Fixed: An issue preventing users from changing driver shift patterns.
* Fixed: The search filter on the customise table pop-up is only working for English translations. 
* Fixed: The 'Owner forename' and 'Owner surname' fields on the Vehicles page are populated with the wrong information. 
* Fixed: When editing a Zone to Zone template matrix, the 'Price cost between vias' setting is not saving if changed to On or Off.
* Fixed: An issue preventing users from adding multiple zones to Pricing Zones. 
* Fixed: Special booking recipes that should only allow whole numbers are allowing decimal numbers to be entered. 