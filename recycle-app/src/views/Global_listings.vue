<template>
    <div class="container">
        Map here
        <div> 
            <h2>Waste in POSTCODE</h2>
            <li v-for="list in globalList" :key="list.id">
                {{globalList.user}}
            </li>
        </div>

    </div>
</template>
<script>


export default ({
    data()
    {
        return{
            globalList: [
                {
                    user:'Name is mine',
                    location:'40th St Sample country',
                    pc: 5930,
                    waste_type: 'Soft-plastic',


                }
            ]
        }

    }

})
</script>
