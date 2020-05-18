var input = document.getElementById("input-work");
var list  = document.getElementById("list");
var CHECK="far fa-check-square";
var UNCHECKED="far fa-square";
//var btn=document.getElementById
function addTodo()
{
    var todo=input.value;
    if (todo!="")
    {
        const text=`
                    <li>
                        <i class="far fa-square" job="complete"></i>
                        <p class="text">${todo}</p>
                        <i class="fas fa-trash" job="delete"></i>
                    </li>
                    `;
    const pos='beforeend';
    list.insertAdjacentHTML(pos,text);
    input.value=""; 
    }
    else
    {
        input.placeholder="Please don't leave me blank";
    }
}
list.addEventListener("click",function(event)
{
    const element=event.target;
    const elementJob=element.attributes.job.value;
    if (elementJob=="delete")
    {
        element.parentNode.remove();
    }
    else 
    if (elementJob=="complete")
    {
        if (element.classList.contains("fa-check-square"))
        {
            element.classList.remove("far","fa-check-square");
            element.classList.add("far","fa-square");
            element.parentNode.querySelector(".text").classList.remove("lineThrough");
        }
        else if (element.classList.contains("fa-square"))
        {
            element.classList.remove("far","fa-square");
            element.classList.add("far","fa-check-square");
            element.parentNode.querySelector(".text").classList.add("lineThrough");
        }
    }
})


