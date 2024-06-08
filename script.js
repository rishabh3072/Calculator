let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

for(let i=0;i<btn.length;i++)
    {
        btn[i].addEventListener('click',function(){
            if(this.innerHTML=="=")
            {
                value.innerHTML = eval(value.innerHTML);
            }
            else
            {
                if(this.innerHTML=="AC")
                {
                    value.innerHTML = "";
                }
                else if(this.innerHTML == "x²") {
                    value.innerHTML = Math.pow(eval(value.innerHTML), 2);
                }
                else
                {
                    value.innerHTML += this.innerHTML;
                }
            }
        })
    }