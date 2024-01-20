
// JavaScript to toggle mobile menu

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// all market list 

const AllMarketList =()=>{
    fetch("https://localhost:7050/api/Manager/AllMarketList")
    .then(res=>res.json())
    .then(data=>SingleMarketList(data.result))
}


// update market list 

const marketUpdate =(e)=>{
    const Update = document.getElementById("update");
    Update.style.display = "block"
    e.preventDefault()
    const Id = e.target.id.value;
    const Date = e.target.date.value;
    const Market = e.target.market.value;
    const Meal = e.target.meal.value;
    const update ={
        id:Id,
        date:Date,
        dailyMarket:Market,
        dailyMeal:Meal
    }
    fetch("https://localhost:7050/api/Manager",{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(update)
    })
    .then(res=>res.json())
    .then(()=>{
        alert("Update Successfully")
    })
}

// Post market list 

const marketPost =(e)=>{
    const Post = document.getElementById("post");
    Post.style.display = "block"
    e.preventDefault()
    const Date = e.target.date.value;
    const Market = e.target.market.value;
    const Meal = e.target.meal.value;
    const post ={
        date:Date,
        dailyMarket:Market,
        dailyMeal:Meal
    }
    fetch("https://localhost:7050/api/Manager",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(()=>{
        alert("Post Successfully")
    })
}

// single market delete list
 
const marketDelete =(id)=>{
    fetch(`https://localhost:7050/api/Manager/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(()=>{
        alert("Delete Successfully")
    })
}

// single market list 
const SingleMarketList=(markets)=>{
    markets.forEach(market => {
        const tBody = document.getElementById("TableBody");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="border-2 border-black">${market.id}</td>
            <td class="border-2 border-black">${market.date}</td>
            <td class="border-2 border-black">${market.dailyMarket}</td>
            <td class="border-2 border-black">${market.dailyMeal}</td>
            <td class="border-b-2 border-r-2 border-black flex justify-around"> 
                <button onclick="marketPost()" class="bg-green-600 py-2 px-5 rounded-md text-white my-1">Post</button>
                <button onclick="marketUpdate()" class="bg-orange-400 py-2 px-5 rounded-md text-white my-1">Update</button>
                <button onclick="marketDelete(${market.id})" class="bg-red-700 py-2 px-5 rounded-md text-white my-1">Delete</button>
            </td>

        `
        tBody.appendChild(row)
    });
}
AllMarketList()