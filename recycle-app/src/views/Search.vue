<template>
<main class="listings">
<i class="fa-solid fa-magnifying-glass"></i>
<select v-model="waste_type" @change="onChange" id="waste_type" class="dropdown">
    <option class="selectOption" value="soft-plastics"> Soft Plastics</option>
    <option class="selectOption" value="hard-plastics">Hard Plastics</option>
    <option class="selectOption" value="mixed-plastics">Mixed Plastics</option>
    <option class="selectOption" value="coffee-grounds">Coffee Grounds</option>
    <option class="selectOption" value="cardboard">Cardboard</option>
</select>
    <div id="mapContainer" class="base-map"></div>
    <div> 
      
            
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
                        <td><button class="ReqBtn" @click="pickup">Request</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
  </main>
</template>
<script>
import mapboxgl from "mapbox-gl";

// import {ref} from 'vue'
// import {useStore} from 'vuex'
export default {
    name: "BaseMap",
  data() {
    return {
      waste_type: '',
      accessToken: "pk.eyJ1IjoiaWxpbjAwMDUiLCJhIjoiY2wwMjZrbnIyMGFkMjNjbWpuNDhna281aCJ9.ltygm0xClurI8P_1QSPF8w",
      globalList: [
                {
                    user:'Visy Heidelberg',
                    location:'10 Richards St, Maidstone VIC ',
                    pc: 3012,
                    waste_type: 'soft-plastics',
                    time:"8th June 2043"
                },
                {
                    user:'Enviro Bins ',
                    location:' 1 Bolinda Rd, Campbellfield VIC ',
                    pc: 3061,
                    waste_type: 'hard-plastics',
                    time:"19th July 1920"
                },
                {
                    user:'Yarra Recycling Centre ',
                    location:'168 Roseneath St, Clifton Hill VIC 3068',
                    pc: 3068,
                    waste_type: 'mixed-plastics',
                    time: "31 Feb 2012"
                }
            ],
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [145.107214,-37.938393], 
    //    center: [103.811279, 1.345399],
      //clayton
    //    maxBounds: [
    //     [103.6, 1.1704753],
    //     [104.1, 1.4754753],
    //   ],
      zoom: 12,
      
    });
  },
  methods:
  {
    onChange()
      {

      }
  },
  watch:
  {
    waste_type(new_waste,old_waste)
    {
      console.log(old_waste)
      let temp_arr = []
      console.log(this.globalList.length)
      for(let i =0;i<this.globalList.length;i++)
      {
        if(new_waste===this.globalList[i].waste_type)
        {

          temp_arr.push(this.globalList[i])
          console.log(temp_arr)
        }
      }
      this.globalList=temp_arr
    }
  }
}</script>

<style>
#waste_type{
    margin:10px;
}

@font-face {
    font-family: 'FuturaPT';
    src: url("../assets/futuraPT/FuturaPT-Bold.ttf");
    font-style: normal;
}
#login-btn{
  background-color: #FFE164;
    box-shadow:10px 10px 10px rgba(0, 0, 0, 0.1);;
  border-radius: 15px;

  font-family: FuturaPT-bold;
   border: none;
   padding: 10px;
   color: white;
   width: 150px;
}
tr{
     padding: 15px;
 margin-bottom: 30px;
  width: 220px;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  box-shadow:10px 10px 10px rgba(0, 0, 0, 0.2);
  font-family: FuturaPT-bold;
}
.listings {
    text-align: center;
    margin: auto;
}
.base-map {
    margin: auto;
    text-align: center;
    height: 200px;
    width: 300px;
    border-radius: 15px;
    overflow: hidden;
}
.table 
{
    margin-left: auto;
    margin-right:auto
}
.ReqBtn
{
    font-family: FuturaPT-bold;
    padding:10px;
    border-style: none;
    font-style: normal;
    font-weight: 450;
    font-size: 20px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #F2F2F2;
    background: rgba(243, 242, 242, 0.1);
    box-shadow: 15px 15px 18px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
}
.text
{
  font-family: Futura PT-bold;
  font-style: normal;
  font-weight: 450;
  font-size: 24px;
  line-height: 31px;
}
</style>  