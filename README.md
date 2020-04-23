# Current Task
- Set up business creation tool interface (Wizard style or Expanding fields)
- Adjust commission database to allow for commission groups and tiers



# The Why:

After years in the automotive industry and speaking with many salesmen, the issue of "slower months" always came up in conversation. Salesmen were quick to blame the business for the lack of their success and seemed surprised when they received their commission checks. At the time, I had ZERO web development skills,  so I built out a basic Excel spreadsheet to keep track of sales and put together sales tends. This was all in hopes that it would help myself and other salesmen to alleviate the end-of-the-month stress when trying to hit sales goals. The spreadsheet was used by many co-workers who immediately benefited from my excel program, so I decided this was a great opportunity to take my knowledge of React, Node and SQL and create a mobile-first web application that mimicked the same sales tracking functionality. 

# Purpose:

I have set out to design a sales tracking program that can be used across multiple industries, while still providing powerful tracking and sales analysis. After I finish the basic functionality to record sales, I will be moving into mobile-first design to include easy, at-glace graphs and metrics and comparison tools. Currently I am focusing on building this for use at a local gym to help them record memberships and sales bonuses.

# Functionality:

### Automotive industry tie in with ADP?

- Date of sale
- Client
- New/ Used/ LBO
- Year/Make/ model
- Stock number
- Front commission/ profit
- Back commission/ profit
- Total commission
- Unit count
- Bonus levels
- Survey bonuses

### **Fitness Industry**

- Customer ID (for GET/ POST Requests)
- Date of sale
- Client Name
- Membership level
- 2-month EFT verification for bonuses

### ** Original Excel Spreadsheet**

Dashboard:

![Dashboard](https://github.com/kDurg/salesTracker/blob/master/salestracker/screenshots/Capture1.PNG)

Monthly:
    ![Dashboard](https://github.com/kDurg/salesTracker/blob/master/salestracker/screenshots/Capture2.PNG)


# Database Structuring:

### Login Requests:

All Users/ Admins-

- [ ]  Company Name and unique ID, Location
- [ ]  User Preferences
- [ ]  Employee ID
- [ ]  Sales Parameters
- [ ]  Current/ Previous Month Sales Data (depending on user level)
- [ ]  User Level

Admins-

- [ ]  Sales people based on default location
- [ ]  Sales People

### User Preferences:

All Users - 

- [ ]  Default Home Screen
- [ ]  Dark/ Light Mode
- [ ]  Email/ Password Changes

Admins- 

- [ ]  Allow Employees to see store goals/ revenue
- [ ]  Switch Stores if other locations exist
- [ ]  Allow Global customer look up/ sales edit
- [ ]  Allow users to post sales data to other locations

### Super Admin and Creation

Access to:

- [ ]  Company Name, Unique Company ID Assignment
- [ ]  Access to view as user
- [ ]  Access to change user preferences
- [ ]  Import CSV for sales data
- [ ]  'GOD MODE' - Search/ View/ Alter all

### Database Structure:

- [ ]  Store/ Locations
- [ ]  Account Owner, Admins, Users
- [ ]  Preferences
- [ ]  Usernames and Passwords
- [ ]  Required Sales Fields
- [ ]  API Connectivity (Store ID, API Keys/ Headers)
