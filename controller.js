class Controller{
constructor(up, right, down, left, btn)
    {
        this.up = up;
        this.right = right;
        this.down = down;
        this.left = left;
        this.btn = btn;

        this.register();
    }

    state = {"Horizontal": 0, "Vertical": 0, "Button": false};


/**Registers the controller to the event queue */
    register()
    {
        document.addEventListener('keydown', (event) => {
            var code = event.code;
            
            if(event.repeat)
            {
                return;
            }
          
            if(code == this.up)
            {
                this.state.Vertical += -1;
            }
            if(code == this.down)
            {
                this.state.Vertical += 1;
            }
            if(code == this.right)
            {
                this.state.Horizontal += 1;
            }
            if(code == this.left)
            {
                this.state.Horizontal += -1;
            }  
            if(code == this.btn)
            {
                this.state.Button = true;
            }
          
          
          }, false);


          document.addEventListener('keyup', (event) => {
            var code = event.code;
          
            if(code == this.up)
            {
                this.state.Vertical -= -1;
            }
            if(code == this.down)
            {
                this.state.Vertical -= 1;
            }
            if(code == this.right)
            {
                this.state.Horizontal -= 1;
            }
            if(code == this.left)
            {
                this.state.Horizontal -= -1;
            }  
            if(code == this.btn)
            {
                this.state.Button = false;
            }
          
          
          }, false);
    }
  }