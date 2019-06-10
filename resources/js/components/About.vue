<template>
    <div>
        <h1>
            User Info
        </h1>
        <input type="text" placeholder="API Token"
        v-model="token"
        @keyup.enter="fetchData">
        <p class="text-red italic text-small" v-if="message"></p>
        <ul v-if='userData'>
            <li><strong>Name: </strong>{{userData.name}}</li>
            <li><strong>email: </strong>{{userData.email}}</li>
        </ul>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                userData: false,
                token: null,
                message: null
            }
        },
        methods: {
            fetchData () {
                axios.get(`http://127.0.0.1:8000/api/user?api_token=${this.token}`)
                .catch(error => {
                    this.message = error.response.data.error;
                    this.userData = null;
                })
                .then(({data}) => {
                    this.userData = data;
                    this.message = null;
                });
            }
        }
    }
</script>
