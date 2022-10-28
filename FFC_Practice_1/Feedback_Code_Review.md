# Feedback

## Hideaki

Awesome! This looks great! 
You **can count it as 5 code reviews after this refactor!** 

*My review will focus on how to make code readable in a company setting, so please keep that in mind.*

### index.html:

- line 8 Importing the lib.js in the head for this level of abstraction is not advisable because in a company, you will have to have a good case whenever you add a single library. There are full blown meetings every time an engineer wants to add a new code snippet via npm. In this case, this will not be approved. Every new js that you import will slow down the performance of a site, so in this case, I want you to try to rewrite index.js using just native vanilla js dom selectors! This is actually one of the main reasons jQuery went away.. it was just too big of a file!
- line 15, 23 I love the way you’re using 2 separate classes; 1 for generic buttons and 1 for the modifier, but I would name the latter btn-right instead of just right and use a separate selector so:
```CSS
.btn {
  // all stylings for all buttons
}

.btn-right {
  // stylings specific to the right btn
}
```
  - because using a chained .something.something will add more weight to the specificity.

- line 33 looks like you don’t need that comment anymore
- generally, don’t add extra lines of space unless there is a very obvious reason you’re doing so. In this case, it doesn’t seem to have a consistent rule so I would just eliminate all extra blank lines

### CSS

- look up css custom properties and move all hardcoded numerical values as reusable variables like padding-large, font-size-large, background-primary (hex value color), main-min-width etc… You don’t have to do ALL of it, but do enough to get the idea of how it works. Ideally, you should have nothing hardcoded as values directly
- Do a global css reset at top (border box, padding 0, margin 0)
- line 41 I think I know what main:after is doing, but I think it’s good to document whenever you create new dom elements via CSS, so can you add a comment like “creates gradient border animation”
- line 85 look up the basics of accessibility . Interactive elements like buttons need to have a visual cue when you tab. A common a11y (short for accessibility) test is to just use the keyboard for websites and to see if all links and buttons have visual changes. I’m pretty sure deleting the outline is considered an illegal operation.
- also, never use ```!important``` as it is impossible to maintain!
- personally, I like @keyframes at the top of css files, like custom properties so I can see what variables are being used immediately. Not a big deal and probably just personal preference

### index.js 
You have a lot of great things going on here! You are good at writing code that works, which is great! The biggest change (and improvement) for you will come as we try to write maintainable code, or code that is readable by other developers!

- Your code should ideally be self documented without comments. This happens via good naming, and clear organization of logic. line 1 - let x is the same as let someMysteriousVariable = 1   I don’t quite know what’s happening, so as the reader of the code, I am forced to do extra work. It’s not until I read some more html and css that I understand “oh, maybe this is like the tab index?”
  - one ok solution is to write comments
```javascript
let x = 1; // this is the index that determines the content that I'm swapping in
```
  - an even better solution is to just rename it ```let contentIndex = 1```
  - small note, but I think indices (plural for index) in computer languages typically are 0 indexed, so I would consider starting from 0 and going to 2 instead of 1 - 3 EDIT: Oh I see how you’re using the index directly in nth-of-type I guess that’s ok then, but I might comment // using index starting at 1 so I can use it directly in nth-of-type()

- line 2   trigger is better than y , but I’m still not sure what the functionality of this is based on the naming
- line 4 swapSectionsForward . No sense in abbreviating a few words in exchange for a few seconds of thinking required for the reader. same for swapSectionsBack
- the body of both of these functions are a little bit hard to read. I would consider using helper functions to label this logic:
  - line 5 just call clearSection()
  - declare a function clearSection that takes in the index and clears the css. the body of this function is essentially the functionality of line 5
  - line 8 instead of x++, call incrementContentIndex , which increments and cycles between 1 - 3
  - line 9 instead of what you have, call showContent()  etc..
  - The result of this refactor will probably make this way more readable and declarative instead of imperative You may also notice some unnecessarily repeated code (check out line 14, 20. aren’t we already doing that in line 5?)

Let me know if you have any questions on these!!
