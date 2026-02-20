function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const addForm = document.getElementById("newContent");

    if (filterForm.style.display === "block") {
        filterForm.style.display = "none";
    } else {
        filterForm.style.display = "block";
        addForm.style.display = "none";
    }
}

function showAddNew() {
    const addForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");

    if (addForm.style.display === "flex") {
        addForm.style.display = "none";
    } else {
        addForm.style.display = "flex";
        filterForm.style.display = "none";
    }
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe  = document.getElementById("recipeCheckbox").checked;
    const showUpdate  = document.getElementById("updateCheckbox").checked;

    const opinions = document.querySelectorAll("article.opinion");
    const recipes  = document.querySelectorAll("article.recipe");
    const updates  = document.querySelectorAll("article.update");

    opinions.forEach(article => {
        article.style.display = showOpinion ? "block" : "none";
    });
    recipes.forEach(article => {
        article.style.display = showRecipe ? "block" : "none";
    });
    updates.forEach(article => {
        article.style.display = showUpdate ? "block" : "none";
    });
}

function addNewArticle() {
    const title   = document.getElementById("inputHeader").value.trim();
    const text    = document.getElementById("inputArticle").value.trim();

    let type = "";
    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        type = "update";
    }

    if (!title || !text || !type) {
        alert("Please fill in the title, select a type, and enter article text.");
        return;
    }

    const markerLabels = {
        opinion: "Opinion",
        recipe:  "Recipe",
        update:  "Update"
    };

    const newArticle = document.createElement("article");
    newArticle.classList.add(type);

    newArticle.innerHTML = `
        <span class="marker">${markerLabels[type]}</span>
        <h2>${title}</h2>
        <p>${text}</p>
    `;

    document.getElementById("articleList").appendChild(newArticle);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked  = false;
    document.getElementById("recipeRadio").checked   = false;
    document.getElementById("lifeRadio").checked     = false;
}