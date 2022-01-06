# Professional README Generator Starter Code

[How to create a Professional README](./readme-guide.md)


++++++

So, we need a README generator that will do several things:

(1) Be started in the command line

(2) Prompt and take inputs for all the headings

(3) Interpolate the inputs into markdown language template, then write the template into a file--i.e., into a README.md file

+++++

Starting with the last bit first:
* Create a markdown language template in its own document w/ template literals (document should be inside 'src' directory); include both the function that returns the string of markdown as well as the module.exports...call?...at the bottom of the page
* Main app page: (a) placeholder inputs that will be replaced w/ taken inputs later, (b) add fs and source const's, (c) write the writeFile fcn (w/ the markdown template generator fcn),
