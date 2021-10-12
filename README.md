# The Village Co. - JS Developer Test

This is the VC JS dev test. Follow the specs to complete the project using Vue, Tailwind, Node and Express. The UX of the application isn't necessarily meant to be ideal or even make sense it's more a test of problem solving, following patterns and styles; and development processes.

# Spec / Tasks

Below is a list of requirements for a simple ecommerce app. You have been handed both the frontend and backend and are tasked with completing the app to the specs. Consider this as you would a full production application and feel free to 'ask the stakeholder' questions as you go.

MAX 2.5 HOURS: This doesn't need to be completed it's more about what you can achieve in ~2.5 hours.

## Prereqs

- Fork or download the repo. Submissions must be publically accessible or uploaded to file share as a Zip with repo/history included.

## Products/Home page

- Display list of products
- Click on product should add them to cart and there should be a visual representation that an item has been added (change background colour from white to green).

## Cart

- Displays a list of products that the user has selected and their quantities
- Displays correct totals for product, price ex GST (tax) and the GST cost
- Should not be able to add more than remaining product quantity

## Checkout

- Gather relevant user details
- Submit to the endpoint below
- The endpoint should validate the submission and save the order to an JSON file in a directory named 'orders' with a filename 'order\_{{ orderId }}.json' with a unique order id
- You do not need to change the remaining quantity on the products

## About

- Should have general description of the app and support contact details (fake contact details)

## General

- App should gracefully handle errors and notify users of issues
- App should have a cool logo

## Submission

- Develop as you usually would using source control
- Use branches and commits as you usually would
- EITHER: Push to your fork at the end and email the repo url
- OR: Instead of pushing at the end, zip the project (including .git directory) and submit it to the provided link

# Hints and Tips

- There are 3 intentional bugs to be fixed. They are:
  - A networking issue
  - A display issue on the home page
  - A calculation issue on the cart

# API Doc

## GET - /products

### Request

### Response - JSON

200

```
[
  {
    id: Integer,
    name: String,
    description: String,
    exPrice: Decimal,
    gstPrice: Decimal,
    qtyRemaining: Integer,
  },
  ...
]
```

## POST - /checkout (NOT IMPLEMENTED)

### Request - JSON

```
{
  products: [{
    id: Integer(product id),  // Required
    quantity: Integer,        // Required
  }],                         // Required
  name: String,               // Buyers name, Required
  phone: Integer,
  email: String,               // Required
  exCost: Decimal,             // Required
  gstCost: Decimal,            // Required
}
```

### Response

200

```
Integer // New order id
```

422 - Invalid values

```
[
  {
    field: String,              // Field that is invalid
    message: String,            // Reason field is invalid
  },
]
```
