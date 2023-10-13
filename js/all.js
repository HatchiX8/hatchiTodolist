const txt = document.getElementById('txt');
const addButton = document.getElementById('addButton');
let data = [];



//新增待辦
addButton.addEventListener('click',addList);
function addList(){
    let todoData = {
        content : txt.value,
        id : new Date().getTime(),
        checked : '',
    }
    if(txt.value==""){
        alert('請輸入新增內容');
    }else{
        data.push(todoData);
        txt.value = "";
    }
    update();
}

//enter優化
txt.addEventListener('keypress',function(e){
    if(e.key = 'Enter'){
        addList();
    }
})

//渲染
function render(array){
    let str = '';
    const todoList = document.getElementById('todoList');
    array.forEach(item=>{
    str += `
            <li data-id="${item.id}">
            <label class="checkbox" for="">
              <input type="checkbox" ${item.checked}/>
              <span>${item.content}</span>
            </label>
            <a href="#" class="delete"></a>
            </li>
            `
    });
    todoList.innerHTML = str;
}


//更新待辦
function update(){
    let todoListFilter = [];
    if (toggleStatus=='all') {
        todoListFilter = data;
    }else if(toggleStatus=='undone'){
        todoListFilter = data.filter(item=>item.checked=='');
    }else{
        todoListFilter = data.filter(item=>item.checked=='checked');
    }
    const listLength = document.getElementById('listLength');
    let filterLength = data.filter(item=> item.checked=='');
    listLength.textContent = filterLength.length;

    render(todoListFilter);
}




//切換TAB
    const tab = document.getElementById('tab');
    let toggleStatus = 'all';
    tab.addEventListener('click',changeTab);
    function changeTab(e){
        toggleStatus = (e.target.dataset.tab);
        let tabLi = document.querySelectorAll('#tab li');
        tabLi.forEach(item => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
        update();
    }


//刪除&切換checked
    todoList.addEventListener('click',checkedState);
    function checkedState(e){
        let id = e.target.closest('li').dataset.id;
        if(e.target.getAttribute("class")=="delete"){
            e.preventDefault();
            data = data.filter(item => item.id != id)
        }else{
            data.forEach((item,index) => {
                if(item.id==id){
                    if(data[index].checked=="checked"){
                        data[index].checked="";
                    }else{
                        data[index].checked="checked";
                    }
                }
            });
            
        }
        update();
    }


//刪除已完成待辦

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click',deleteDone);

function deleteDone(e){
    e.preventDefault();
    data = data.filter(item => item.checked != 'checked');
    update();
}

//初始化
update();