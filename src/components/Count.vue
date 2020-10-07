<template>
  <div class="count-container">
    <button @click="goUp()">up</button>
    <button @click="goDown()">down</button>
    <h1>{{ count }}</h1>
    <p>{{ table[0] }}</p>
    <p>{{ table[1] }}</p>
    <p>{{ table[2] }}</p>
  </div>
</template>

<script>
export default {
    name: 'Count',
    components: {

    },
    data() {
        return {
            count: 7,
            name: 'Trent',
            age: 22,
            names: ['JON','TRENT','JEROLD'],
            table: [
                [1,2,3], 
                [4,5,6], 
                [7,8,9]
            ],
        }
    },
    methods: {
        goUp() {
            this.count = this.count + 1;
        },
        goDown() {
            this.count = this.count - 1;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>