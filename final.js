const getData = () => {
 
  document.getElementById("tBody").innerHTML = null;
  document.getElementById("tBody2").innerHTML = null;
  document.getElementById("tBody3").innerHTML = null;
    PromiseAPI1()
    .then((res) =>{
        if(res){
            return PromiseAPI2();
        }
        console.log(res)
    })
    .then((res) => {
        if(res){
            return PromiseAPI3();
        }
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
};



const PromiseAPI1 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
                .then((res) => res.json())
                .then((posts) => {
                    showData1(posts);
                    resolve(true);
                })
                .catch((err) => reject(err))
        }, 1000)
    });
};


const PromiseAPI2 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((products) => {
                    showData2(products);
                    resolve(true);
                })
                .catch((err) => reject(err))
        }, 2000)
    })
}


const PromiseAPI3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos")
                .then((res) => res.json())
                .then((todos) => {
                    showData3(todos);
                    resolve(true);
                })
                .catch((err) => reject(err))
        }, 3000)
    })
}


const showData1 = (data) => {

    const tbody = document.getElementById("tBody");
    const posts = data.posts;
    posts.map((curElem) => {
        const row = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        td.innerHTML = curElem.id;
        td2.innerHTML = curElem.title;
        td3.innerHTML = curElem.body;
        td4.innerHTML = curElem.userid;
        td5.innerHTML = curElem.tags;
        td6.innerHTML = curElem.reactions;
        row.appendChild(td);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        tbody.appendChild(row);
    })
}


const showData2 = (data) => {

    const tbody = document.getElementById("tBody2");
    const products = data.products;
    products.map((curElem) => {
        const row = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");
        const td9 = document.createElement("td");
        const td10 = document.createElement("td");
        const td11 = document.createElement("td11");
        td.innerHTML = curElem.id;
        td2.innerHTML = curElem.title;
        td3.innerHTML = curElem.description;
        td4.innerHTML = curElem.price;
        td5.innerHTML = curElem.discountPercentage;
        td6.innerHTML = curElem.rating;
        td7.innerHTML = curElem.stock;
        td8.innerHTML = curElem.brand;
        td9.innerHTML = curElem.category;
        const img = document.createElement("img");
        img.className = "thumb"
        img.src = curElem.thumbnail;
        td10.appendChild(img);
        curElem.images.map((cE) => {
            const img = document.createElement("img");
            img.className = "imagesStyle"
            img.src = cE;
            td11.appendChild(img);
        })
        row.appendChild(td);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        row.appendChild(td6);
        row.appendChild(td7);
        row.appendChild(td8);
        row.appendChild(td9);
        row.appendChild(td10);
        row.appendChild(td11);
        tbody.appendChild(row);
    })

}

const showData3 = (data) => {

    const tbody = document.getElementById("tBody3");
    const todos = data.todos;
    console.log(todos)
    todos.map((curElem) => {
        const row = document.createElement("tr");
        const td = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        td.innerHTML = curElem.id;
        td2.innerHTML = curElem.todo;
        td3.innerHTML = curElem.completed;
        td4.innerHTML = curElem.userId;
        row.appendChild(td);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        tbody.appendChild(row);
    })
}