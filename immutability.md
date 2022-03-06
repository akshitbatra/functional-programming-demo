```
Scenario 1:
 we have an empty cart when we visit a website.
 we pick it up and start adding the items in that cart.

Scenario 2:
    Another person comes on the website and looks for the cart.
    As we are using a common cart and it is mutable.
    The second user can also see that there is an empty cart.(in case both users come at one and hasn't anything yet)

    Now, 
        As both users start adding items in the same mutable cart. 
        At the time of checkout the user1 finds some items which was extra and not added by user1.
        Same with user2.

        now comes a question, would you like to pay for something which you haven't added yourself?
        and if someone else removes the item you added to the cart.
 

 ```