const app = Vue.createApp({
    data() {
        return {
            recipes: [
                {
                    id: 1,
                    title: 'Spaghetti Carbonara',
                    description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
                    image: 'https://foodhub.scene7.com/is/image/woolworthsltdprod/1101_spaghetticarbonara:Mobile-1300x1150',
                    likes: 32,
                    isOpen: false, // Track whether comments section is open
                    comments: [
                        { username: 'User1', text: 'Great recipe! Loved it.' },
                        { username: 'User2', text: 'I added some mushrooms. Delicious!' }
                    ]
                },
                {
                    id: 2,
                    title: 'Chicken Alfredo',
                    description: 'Creamy Alfredo sauce with grilled chicken breast and fettuccine pasta.',
                    image: 'https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg',
                    likes: 25,
                    isOpen: false, // Track whether comments section is open
                    comments: [
                        { username: 'User3', text: 'I absolutely adore this pasta dish!' },
                        { username: 'User4', text: 'Ideal for a family gathering.' }
                    ]
                },
                {
                    id: 3,
                    title: 'Margherita Pizza',
                    description: 'Classic Margherita pizza with fresh tomatoes, mozzarella, basil, and olive oil.',
                    image: 'https://www.blossmangas.com/wp-content/uploads/2021/05/Margherita-pizza-2.jpg',
                    likes: 40,
                    isOpen: false,
                    comments: [
                        { username: 'User5', text: 'I love the simplicity of this pizza.' },
                        { username: 'User6', text: 'One of the best Margherita pizzas I ever had!' }
                    ]
                },
                {
                    id: 4,
                    title: 'Beef Stir-Fry',
                    description: 'Tender beef slices with colorful bell peppers and broccoli in a savory stir-fry sauce.',
                    image: 'https://www.thecookierookie.com/wp-content/uploads/2022/01/featured-beef-stir-fry-recipe.jpg',
                    likes: 15,
                    isOpen: false,
                    comments: [
                        { username: 'User7', text: 'A speedy and convenient dinner choice!' },
                        { username: 'User8', text: 'I added some extra chili for a spicy kick.' }
                    ]
                },
                {
                    id: 5,
                    title: 'Chocolate Chip Cookies',
                    description: 'Classic homemade chocolate chip cookies, soft and chewy on the inside.',
                    image: 'https://www.foodandwine.com/thmb/4_UScMzHQCxZzACBITHHmT_EM3U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chocolate-Chunk-Halwah-Cookies-FT-RECIPE0923-1f8df755df6d468da98887aa846a2fe3.jpg',
                    likes: 50,
                    isOpen: false,
                    comments: [
                        { username: 'User9', text: 'Our family absolutely adores these cookies!' },
                        { username: 'User10', text: 'Ideal when paired with a refreshing glass of milk.' }
                    ]
                },
                // Add more recipes here...
            ],
            user: {
                id: null,
                username: '',
                savedRecipes: []
            },
            newUser: {
                username: ''
            },
            searchQuery: '',
            selectedRecipe: null,
            isRegistrationOpen: false,
            newComment: {
                username: '',
                text: ''
            }
        };
    },
    methods: {
        registerUser() {
            this.isRegistrationOpen = false;
            this.user = {
                id: 1, 
                username: this.newUser.username, 
                savedRecipes: [] 
            };
        },
        logoutUser() {
            this.user = {
                id: null,
                username: '',
                savedRecipes: []
            };
        },
        openRecipeDetails(recipe) {
            this.selectedRecipe = recipe;
        },
        saveRecipe(recipeId) {
            const recipe = this.recipes.find((r) => r.id === recipeId);
            if (recipe && !this.user.savedRecipes.includes(recipeId)) {
                this.user.savedRecipes.push(recipeId);
            }
        },
        openAddRecipeForm() {
            // Implement logic to show the recipe form here
        },
        likeRecipe(recipeId) {
            const recipe = this.recipes.find((r) => r.id === recipeId);
            if (recipe) {
                recipe.likes += 1;
            }
        },
        toggleComments(recipe) {
            recipe.isOpen = !recipe.isOpen; // Toggle comments section
        },
        addComment(recipe) {
            if (this.newComment.text && this.newComment.username) {
                recipe.comments.push({
                    username: this.newComment.username,
                    text: this.newComment.text
                });
                this.newComment.username = '';
                this.newComment.text = '';
            }
        },
        viewRecipeDetails(recipe) {
            this.selectedRecipe = recipe;
        }
    },
    computed: {
        filteredRecipes() {
            return this.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }
});

app.mount('#app');
