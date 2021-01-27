<img src="./.readme/noroff-light.png" width="160" align="right">

# Semester project 2

To create an e-commerce website that has an Admin and Front-End respectively. The Front-End should be responsive and the website is to be populated by an API supplied by Noroff.

<br>

## Planning

### Notion:

https://www.notion.so/b78a2f496c99404ab1bdc6f70f6e57c5?v=2628ab3e05b04000bc85b9836ce76bb0

### XD Prototype:

https://xd.adobe.com/view/59b8e888-6e40-4d59-895e-9fdcab837bd6-0ceb/

<br>

## Report

### 1. How the project went

I think overall it went well. I learned alot by doing this task and generally feel better about my JS skills. Not only do i know what to do, I feel like im mastering the "when to do what" part.

### 2. what was difficult?

It was generally pretty challenging, but going thru the stuff in moodle one more time made it all pretty manageable.

### 3. what was easy?

Nothing comes to mind as specially easy, but some parts of the task I have done more times than others in the past. So I guess the easiest parts were the html, as well as the fetch statement.

### 4. what I enjoyed the most

I have never built an ecommerce site like this before so it was really fun and challenging to try and do this. Some parts were a little confusing but I love jumping in to a project without knowing how to do everything; thats one of my favorite ways to learn!

### 5. what I still think I need to learn or focus on more?

Next time I will definitively make it mobile-first. I'll also spend more time planning out the look of the site for mobile. Had too little time to make it nice and responsive this time around.

I also am really poor at time mangagement still. I end up having too much to do (stuff i didn't even think about) the last night, which makes me beyond stressed, and that makes it more hard to do the things i need to do. Like an evil circle. So I definitively need to get better at managing my time.

When that's said, I do have chronic depression which makes it really hard to find motivation some days. I cant always force myself to do the work I need to do, which makes time management a bit hard. But I'm doing my best, and at the end of a bigger project like this I always try to look back and be proud of the work that i DID manage to do, rather than be disappointed at the stuff I didn't have time to do/ finish.

<br>

## Nice-To-Know-Stuff

The link for getting to the Admin-page of the site is ${localhost}/frontend/admin_login.html

The customer login form has validation, but it doesn't go anywhere or do anything yet.

The filter menu has no functionality yet

The search bar has no functionality yet

I didnt have time to complete most of the functionality of adding items to the cart. I was on the right track but I had to deliver it unfinished.

## Brief

You are to build an e-commerce website. You can choose the theme of your website. It should follow the site architect described below.

You must design it using your favourite tool. Build the front-end and admin pages to update and delete products.

You must apply all that you have learned in:

- Interaction Design,
- Design 2.
- JavaScript 2

It must have a good user experience and a good ui design, following today's trends and design patterns.

Build a front-end with a homepage, product category list page and product detail page.

Build admin pages to update and delete products.

> Building a checkout and payment system is not a part of the project.

### Level 1 is required.

### Level 2 and 3 are optional.

# Level 1 Process (Required)

## Customer pages

### Home page

The home page must include:

- A hero banner with an image that is uploaded to Strapi.
- A list of featured products.
  - In Strapi each product must have a featured flag that can be turned on or off. When the flag is on, the product shall be displayed on the homepage.

### Products page

The products page must include:

- A list of all products added to Strapi. Each product must display its title, price and image. The product shall link to its products detail page.
- A search text box. When searching, the products that include the searched text in their **title** or **description** shall be listed.

### Product details page

The product details page must include:

- the product title,
- the product description,
- the product image,
- the product’s price,
- an add to cart button.

### Cart/Basket page

The cart/basket page must display a list of all products added to cart. Load the items that have been added to local storage and display them on the page.

Each product in the cart must display:

- the product title,
- the product’s price,
- a link to the product view page, and optionally display the product image,

After the list of products, display the total price of all the products in the cart.

> **Important:** the cart page is not a checkout page. No payments or user details are required to be taken.

## Admin section

The admin section must include the following features.

### Login/Logout

Create an admin login form that allows administrator users to login.

- Use localStorage to keep the user logged in.
- When logged in, display a logout button in the layout the logs the user out.
- Logging out should not clear items not related to login from localStorage.

### Add/edit products

Create form(s) that allow products to be added and edited. The form must allow the user to toggle whether a product is featured.

#### Product images

For adding/editing product images use either of these 2 methods:

1. Use a file upload field to upload images to Strapi, or
2. Use a text input that allows a URL to be entered. This allows an image from CDN to be used as the product image.

### Delete existing product

Allow products to be deleted. Before a product is deleted you must display a confirmation. The product should only be deleted if the user confirms. If the user cancels, the product must not be deleted.

## Level 2

- Category filters & price filter (on product list page)
- Product page image gallery

## Level 3

- Customer Registration
- Customers must not have access to admin section
- Customers will be able to create a list of favourites products

# Rules

- The website must be responsive on all devices.
- Use vanilla (regular) JavaScript for the project and split your code up using modules (imports/exports).
- No JavaScript frameworks (Vue.Js, React.js).
- You can use small JS libraries to perform tasks such as formatting dates with Moment.js
- You may choose a CSS framework but your design must override the basic framework styles. Your UI must appear indistinguishable from the framework base styles.
- Data must be updated from the pages and API calls you create. You are not allowed to edit the API content through the front end of the strapi admin website found at http://localhost:1337/.
- Copying and sharing of any code will result in your project being failed.

# Marking criteria

- All functionality in Level 1 should be implemented.
- The design should be coherent and provide a good user experience.
- All the customer-facing and admin pages must be fully responsive.
- Use appropriate names for Sass classes and folders.
- All code should be properly formatted and arranged with sensible variable and function names. Use modules (imports/exports) to organise your code.
  Rules

## Strapi API

You will need Node.js v14.

To start the API change directory to `api` install the npm dependecies and then run `npm run develop`

```bash
$ cd api/
> npm install
> npm run develop
```

### User credentials

```bash
email: admin@admin.com
username: admin
password: Pass1234
```

## Submission

### Week 1

- Gant chart or KanBan board with todos in appropriate lanes(Trello or Notion).
- Wireframes.

### Week 2

- XD or Figma prototype.

### Final submission

- Push all changes to Github Classroom Repository
- To Moodle submit PDF with a GitHub Repository URL inside of it. If Moodle forces you to put a ZIP, put the PDF inside the ZIP.
- No deployment is required, It will be tested on a local development environment.

## Time

5 Weeks

> Deadline: 11 December 2020 at 23:59.
