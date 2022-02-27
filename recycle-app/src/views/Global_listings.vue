<template>
    <div class="container">
        Map here
        <div> 
            <h2>Waste in POSTCODE</h2>
            <label for="waste_type">Search for a specific type</label>
                    <select v-model="waste_type" @change="onChange($waste_type)" id="waste_type">
                        <option class="selectOption" value="soft-plastics"> Soft Plastics</option>
                        <option class="selectOption" value="hard-plastics">Hard Plastics</option>
                        <option class="selectOption" value="mixed-plastics">Mixed Plastics</option>
                        <option class="selectOption" value="coffee-grounds">Coffee Grounds</option>
                        <option class="selectOption" value="cardboard">Cardboard</option>
                    </select>
            <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Postcode</th>
                        <th>Waste Type</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="listing in globalList" :key="listing">
                        <td>{{listing.user}}</td>
                        <td>{{listing.pc}}</td>
                        <td>{{listing.waste_type}}</td>
                        <td>{{listing.time}}</td>
                        <td><button @click="pickup">Request</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

    </div>
</template>
<script>


export default ({
    data()
    {
        return {
            globalList: [
                {
                    user:'Name is mine',
                    location:'40th St Sample country',
                    pc: 5930,
                    waste_type: 'Soft-plastic',
                    time:"8th June 2043"
                },
                {
                    user:'Name is twine',
                    location:'09th St Sample country',
                    pc: 2032,
                    waste_type: 'Hard-plastic',
                    time:"19th July 1920"
                },
                {
                    user:'Name is thine',
                    location:'59th St Sample country',
                    pc: 3893,
                    waste_type: 'Recyclable',
                    time: "31 Feb 2012"
                }
            ]
        }
    },
    methods:
    {
        onChange(waste_type)
        {
            console.log(waste_type)

        }

    }


})
</script>
<style scoped>
.table 
{
    margin-left: auto;
    margin-right:auto
}

</style>