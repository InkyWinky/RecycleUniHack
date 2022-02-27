<main class="listings">
    <div id="mapContainer" class="base-map"></div>
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
      accessToken: "pk.eyJ1IjoiaWxpbjAwMDUiLCJhIjoiY2wwMjZrbnIyMGFkMjNjbWpuNDhna281aCJ9.ltygm0xClurI8P_1QSPF8w",
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
}</script>

<style>

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
</style>  
