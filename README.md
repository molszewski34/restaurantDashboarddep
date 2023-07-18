# React-Python POS for the catering industry

This application is a training project aimed at creating mechanics that will speed up the work of cashiers. The application does not have any currency exchange mechanics, and there are no plans to add them in the future. To test the application, please send a private message via GitHub.

The project consists of two main components - React for the front-end and Python as the backend + PostgreSQL database.

## Table of Contents
**Front-end**
- [Login](#login)
- [Services](#services)
- [Selection Panel](#selection-panel)

## Login
Login does not require a username, and the login process is done by entering a pre-created PIN. This solution is designed to expedite the login process. The creation of the PIN is done in the Employees Management section of the administrator panel.

## Services
The front-end is divided into several main sections:

### Service Panel
The selection panel consists of:
- Table Service
- Pending orders
- Menu
- Labors
- Tables

### Product Sales Section
**Table Service**
This page consists of several functionalities:

- Room selection panel using buttons
- Table selection panel. Table selection is done by clicking on the button and entering the number of guests at the table. The application checks if the number of guests does not exceed the maximum capacity of the table and suggests changes by highlighting the table.
- Occupied tables are available for selection but are marked to indicate their status.
- Transition to the orders panel is done by selecting the number of guests or clicking on an already occupied table to edit the order.

**Orders Panel**
The panel is divided into two main sections: product display panel and product selection panel.
The product display panel shows:
- Name
- Quantity
- Cost multiplied by the quantity. The cost is predetermined in Manager Activities -> Menu Management.

The product selection panel consists of selecting a category and selecting a product. Each category has its color, which can be changed in Manager Activities -> Menu Management -> Edit.

The category includes dishes whose quantity and values can be modified in Manager Activities -> Menu Management.

To **add a dish**, click on the dish button to add it to the list. After selecting the dish, specify the quantity of products to add to the list, then accept by clicking "Done."

Multiple products from different categories can be selected.

To **confirm an order**, press the "Set as paid and remove" button.

To **remove a product from the list**, click on the product in the list, decrease the value to 0, and then click "Done."

**Menu Management**
The menu management panel is divided into several functionalities: display, add, edit, and delete data.

To add a category, click on the "+ Add Category" button, enter the name and choose one of the pre-defined colors. The category will be added after confirming with the "Confirm" button.

Editing a category follows a similar process, but the "Edit" button is used for editing. Data changes are made by accepting the changes with the "Confirm" button.

Adding a product to a category is the same as adding a category.