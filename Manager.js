
// JavaScript to toggle mobile menu

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// All manager calculation 

const AllManager = ()=>{
    fetch("https://localhost:7050/api/Manager/AllManagerCalculation")
    .then(res=>res.json())
    .then(data=>Manager(data.result))
}

const Manager = (manager)=>{
        const tBody = document.getElementById("tBody");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="border-2 border-black">${manager.totalMarket}</td>
            <td class="border-2 border-black">${manager.totalMeal}</td>
            <td class="border-2 border-black">${manager.mealRate.toFixed(2)}</td>
        `
        tBody.appendChild(row)
    
}


AllManager()

