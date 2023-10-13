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
    render(data);
}

//渲染
function render(array){
    let str = '';
    const todoList = document.getElementById('todoList');
    array.forEach(function(item){
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


//切換TAB
    const tab = document.getElementById('tab');
    const toggleStatus = 'all';
    tab.addEventListener('click',changeTab);
    function changeTab(e){
        toggleStatus = (e.target.dataset.tab);
        console.log(toggleStatus);

    }

//刪除/切換checked

//更新待辦

//刪除已完成待辦

