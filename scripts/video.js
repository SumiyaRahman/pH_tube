// 1 - Fetch, Load and Show Categories on html

// Create loadCategories
const loadCategories = () => {
    
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// Create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    // add data in html
    categories.forEach((item) => {
        console.log(item);

        // create a button
        const button = document.createElement("button");
        button.classList = "bg-[#25252526] text-[#252525b3] font-medium text-base py-2 px-5 rounded-sm hover:bg-[#FF1F3D] hover:text-white";
        button.innerText = item.category;

        // add button to category container
        categoryContainer.append(button);
    })
};


loadCategories();