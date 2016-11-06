#Structure

Structure elements are high level components that usually contain styles for spacing or general type styles.

##Regions

Regions refer to their respective pug regions with the addition of main content region. These elements, namely the header, main content area, and footer, are included on every page by default.

|~~~~~~~~~~~~~~~~|
|  Header        |
|~~~~~~~~~~~~~~~~|
|  Main          |
|~~~~~~~~~~~~~~~~|
|  Footer        |
|~~~~~~~~~~~~~~~~|

##Root

The root partial styles universal elements, the html element, and the body element. It also makes sure that all elements have position: relative and box-sizing: border-box by default. Font-size was placed on the body element in order to preserve rem calculations during production.

##Sections

Sections are large areas contained within the main region of the document.

|~~~~~~~~~~~~~~~~|
|  Main          |
|    Section     |
|    Section     |
|    Section     |
|    Section     |
|~~~~~~~~~~~~~~~~|
