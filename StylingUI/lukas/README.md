https://www.youtube.com/watch?v=PuovsjZN11Y

breakpoints:
in className every property is for every screen size.
if we add sm md or lg than only applies for the specific component.
ex: w-100 sm:text-right md:text-center lg:text-right 
Here w-100 applies for all screen sizes and text position applies depending on the screen size

range breakpoints: 
sm:max-lg:bg-blue100 applies only after small but until large = only for medium

customizing breakpoints:
*in tailwind.config.js file add theme: { 
  screens:{tablet:"690px" }
  extend: {}  
} like this we can use tablet:text-left 
*change the md size:
extend: {
screens: { md: "800px" } }; = new breakpoints for medium md

==== For overriding add in the theme, just before extend
== if you want add custom breakpoints or adapt single breakpoints change in the extend part