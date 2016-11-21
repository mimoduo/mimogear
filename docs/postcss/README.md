#Using Postcss in Mimogear

Mimogear uses an extended CSS language called postcss to get the job done. This means you'll be writing much of the same CSS as before but with some advanced features like variables and nesting found in popular pre-processor frameworks like SASS. Most of the skeleton work revolved around scaffolding a css project has already been taken care of for you.

##Recommended Workflow

Before you start writing postcss, make sure to fill out the configuration.js file found in the root of Mimogear. This will serve as the base set of typography variables used in /src/postcss/. After you've filled out your desired values, head over to /postcss/elements/ to start adjusting basic html elements like headings, forms, and media that are found on most websites. Then when you're comfortable with your base styles, make your way over to /postcss/structure/ and /postcss/navigation/ to start styling the header and footer of your site. Make sure to check out /postcss/components/ as you progress, especially if you need to style the site logo. Each new component then belongs in /postcss/components/.
