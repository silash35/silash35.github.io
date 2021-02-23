# The architecture of SCSS files

## 1. Introduction

If you just arrived at this project, it is very important to read this file to understand why there is so many folders and files.
This text will help you not only to understand the SCSS code but also to contribute according to the rules of architecture. This architecture was carefully developed so that:

- Each generated CSS file has only the amount of code that the page will use

- All content is well organized and separated according to its function in order to facilitate the development and maintenance of the code

- 2 CSS files be generated for each page, in order to separate the critical from the non-critical CSS.

## 2. The folders

### 1-helpers

This folder contains functions, variables and mixins that can be used anywhere in the application, as they are very useful.
No file on this folder generates CSS by itself, so these files can be imported as often as necessary without fear.

### 2-basics

This folder contains code for small components such as buttons, cards and more. As they can vary a lot, they are available as mixins to be able to make "@include" using the parameters you want.
Again, no file in this folder generates CSS by itself, so these files can be imported as often as necessary.

### 3-globals

This folder contains CSS selectors that point directly to HTML tags, that is, without class IDs or, etc. Here is a great place to normalize the style of the elements between different browsers, if necessary.

Each file contains style for only one HTML tag.

from that folder onwards, all files generate CSS code, so it is only allowed to include them once.

### 4-layouts

The 4-layouts folder contains styling for large components of a web page, such as the header, footer, etc. The CSS selectors used are from classes, but if necessary it is also allowed to use IDs.

### 5-base

The pages of this site have a similar style. They have a header, a background image, use the roboto font and several other similarities. All of this forms a standard style for all pages. A visual identity.

In order to avoid having to import these rules for every page, there is a "5-base" folder that contains the styles common to all pages, which prevents repetition of code.

The \_default.scss file includes the files and contains the styles that all pages that use the "default" design of this site use.

If in the future, this site implements other pages using another visual identity, just create another file in that folder and import only the styles that this new identity requires.

### 6-pages

The final SCSS files can be found here. It is these files that will be effectively included by the HTML of each web page of that site and they contain styles specific to each page.

## 3. The \_glob.scss files

The large number of .scss files in some folders can make it difficult to import everything to generate a single final .css. To solve this problem there is the "\_glob.scss" files that simply imports all the other .scss files in the folder so that when it is necessary to import the styles it is only necessary to import the glob file.

## 4. The .uncritical.scss files

CSS is a render blocker. Before it is downloaded and fully processed nothing is shown on the screen. This is necessary to avoid CLS (Cumulative Layout Shift).

However, not all CSS needs to delay the rendering of the website. Some styles can be applied only afterwards, such as, for example, the ": hover" effects or content that will only appear when the user scrolls the page. These rules can be safely postponed.

In order to separate the CSS you need is already loaded during the first rendering, in a synchronized way (CSS Critical) and the CSS that can be delayed (CSS not critical) the files ".uncritical.scss" were created. They are independent, that is, they generate a separate CSS file for each page, and that file is loaded in a non-blocking way.

The ".uncritical.scss" files must not be imported by .css files and neither can the reverse happen. This is necessary to prevent the code from being duplicated, making the loading of web pages unnecessarily slower.
