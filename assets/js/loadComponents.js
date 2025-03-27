document.addEventListener("DOMContentLoaded", function() {
    function loadComponent(componentPath, targetElement) {
        console.log(`Attempting to load component from: ${componentPath}`); // Log the path being loaded
        fetch(componentPath)
            .then(response => {
                console.log(response); // Log the response
                if (!response.ok) {
                    throw new Error(`Failed to load: ${componentPath}`);
                }
                return response.text();
            })
            .then(html => {
                console.log(`Successfully loaded: ${componentPath}`); // Log success
                document.querySelector(targetElement).innerHTML = html;
            })
            .catch(error => console.error("Error loading component:", error));
    }

    loadComponent("../../components/header.html", "header");  // Load header
    loadComponent("../../components/footer.html", "footer");  // Load footer
});
