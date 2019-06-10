<template>
    <div>
        <h1>
            Blog
        </h1>
        <ul>
            <li>
                <strong>Total Posts: </strong> {{ totalPosts}}
            </li>
            <li>
                <strong>Favorite Posts: </strong> {{ favoritePosts}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                totalPosts: 0,
                favoritePosts: 0
            }
        },
        mounted() {
            axios.get('http://127.0.0.1:8000/api/stats').then( ({data}) => {
                this.totalPosts = data.totalPosts;
                this.favoritePosts = data.favoritePosts;
            });
        }
    }
</script>
