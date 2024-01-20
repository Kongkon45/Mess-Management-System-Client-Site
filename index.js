
// JavaScript to toggle mobile menu

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// All Customer Information 

const AllCustomerInfo =()=>{
    fetch("https://localhost:7050/api/Customer")
    .then(res=>res.json())
    .then(data=>SingleCustomerInfo(data.result))
}

// Single Customer Delete 

const handleDelete =(id)=>{
    fetch(`https://localhost:7050/api/Customer/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(()=>{
        alert("Delete Successfully")
    })
}

// Single customer post 

const handlePost = (e)=>{
    const post = document.getElementById("post");
    post.style.display = 'block'
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const deposit = e.target.deposit.value;
    const meal = e.target.meal.value;
    const AddPost = {
        name:name,
        email:email,
        deposit:parseFloat(deposit),
        meal:parseFloat(meal)
    }
    console.log(AddPost)
    fetch("https://localhost:7050/api/Customer",{
        method : "POST",
        headers : {
            "content-type": "application/json"
        },
        body : JSON.stringify(AddPost)
    })
    .then(res=>res.json())
    .then(()=>{
        // alert("successful")
        alert("Customer information Post successful")
    })
}

// Single customer information update 

const handleUpdate =(e)=>{
    const update = document.getElementById("Update");
    update.style.display = 'block'
    e.preventDefault()
    const Id = e.target.id.value;
    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Deposit = e.target.deposit.value;
    const Meal = e.target.meal.value;
    const Update = {
        id:Id,
        name:Name,
        email:Email,
        deposit:Deposit,
        meal:Meal
    }
    console.log(Update)
    fetch("https://localhost:7050/api/Customer",{
        method:"PUT",
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify(Update)
    })
    .then(res=>res.json())
    .then(()=>{
        alert("Customer Information Update successfully")
    })
}

//Single Customer Information

const SingleCustomerInfo =(Informations)=>{
    Informations.forEach((Information) => {
        const tBody = document.getElementById("tableBody");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="border-2 border-black">${Information.id}</td>
            <td class="border-2 border-black">${Information.name}</td>
            <td class="border-2 border-black">${Information.email}</td>
            <td class="border-2 border-black">${Information.deposit}</td>
            <td class="border-2 border-black">${Information.meal}</td>
            <td class="border-2 border-black">${Information.mealRate.toFixed(2)}</td>
            <td class="border-2 border-black">${Information.totalCost}</td>
            <td class="border-2 border-black">${Information.due}</td>
            <td class="border-2 border-black">${Information.refund}</td>
            <td class="border-b-2 border-r-2 border-black flex justify-around">
                <button onClick="handlePost()" class="bg-green-600 rounded-md text-white px-5 py-1 my-1"> Post </button>
                <button onClick="handleUpdate()" class="bg-orange-400 rounded-md text-white px-5 py-1 my-1"> Update </button>
                <button onClick="handleDelete(${Information.id})" class="bg-red-700 rounded-md text-white px-5 py-1 my-1"> Delete </button>
            </td>
        `
        tBody.appendChild(row);
    });
}

AllCustomerInfo()