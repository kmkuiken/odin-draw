# odin-draw
This is a low-poly drawing tool created using JavaScript DOM manipulation.
Users can drag their mouse (or finger) over the designated board to "draw"
on it, or changing all passed over boxes to another color.  The amount of
boxes present is configurable, along with the color used to draw with.
An erase all button is available as well, which wipes the board to the 
original background color.

This project is a good example of the importance of writing good functions
when considering scalability.  Originally, I had not written any function
and just had the JS directly create the grid layout on startup, but this
made it more difficult when I wanted users to be able to change the size
of the grid and to add things like the clear board button without writing
the same code over and over again.  Now that the clearing of the board and
the creation of a new one is contained in its own function, adding new 
features like said clear board function or changing the color the user
can draw with is much easier.
