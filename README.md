
<h1>Marketplace, UI</h1>

<p>Welcome to my Marketplace, a fake grocery store pay-before-you-pickup app built using a lightweight React/Redux app, and a handful of rails microservices.

<b>Link to project:</b> http://barner-marketplace.herokuapp.com
<b>Tech used:</b> React, Redux, Rails

<h2>Lessons Learned</h2>
<ol>
<li>Managing state in React can get tricky, if sharing the state UP many levels, and DOWN many levels.  This was the case with the cart state (ie what products are in the cart?).  Moving the state to Redux made state sharing simple, as decoupling component state from the component ripped away any need for component relationship knowledge.
<li>Decoupling server and client tasks allowed for a lighter app, with easier ability to optimize server/client optimizations separately</li>
</ol>
