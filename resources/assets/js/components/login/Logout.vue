<template>

</template>

<script>
    export default {
        created(){
            EventBus.$emit('Logout');
        }
    }
</script>