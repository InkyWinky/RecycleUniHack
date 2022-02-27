<template>
    <div class="title">
        <header>
            <h2>Create Listing</h2>
        </header>
        <div>
            <form>
                <div class="form-field">
                    <label for="waste_type">Type of Waste</label>
                    <select v-model="waste_type" id="waste_type">
                        <option class="selectOption" value="soft-plastics"> Soft Plastics</option>
                        <option class="selectOption" value="hard-plastics">Hard Plastics</option>
                        <option class="selectOption" value="mixed-plastics">Mixed Plastics</option>
                        <option class="selectOption" value="coffee-grounds">Coffee Grounds</option>
                        <option class="selectOption" value="cardboard">Cardboard</option>
                    </select>
                        
                </div>
                <div class="form-field">
                    <label for="qty">Quantity of Waste</label>
                    <input v-model="qty" type="number" id="qty">
                </div>
                <div class="form-field">
                    <label for="time">Pickup time</label>
                    <input v-model="time" type="datetime-local">
                    <div> 
                        <label for="anytime">Anytime</label>
                        <input type="checkbox">
                    </div>
                        
                </div>
                <div id="submit">
                    <button @click=onSubmit()>Create Listing</button>
                </div>



            </form>
        </div>
        <div>
            Results: User wants to list {{waste_type}} for Quantity: {{qty}} at {{time}}
        </div>

    </div>
</template>
<script>

export default ({
    name: 'Add Listing',
    data() {
        return {
        waste_type: '',
        qty: '',
        time: '',
        }
    },
    methods: {
        onSubmit()
        {
            let newWaste =
            {
                type: this.waste_type,
                qty: this.qty,
                time: this.time    
            }
            console.log(newWaste)


        }
    }
}
)
</script>
