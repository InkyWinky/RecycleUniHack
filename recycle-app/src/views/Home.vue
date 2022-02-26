<template>

  <main class="home">
    
   
<!-- <i class="fa-solid fa-location-crosshairs input-icon" ></i> -->
  <input class = "input-field" type="text" placeholder="Your Postcode" aria-label="Label" pattern="[0-9]{4}" title="Four digit zip code">

<br>
<!-- Dropdown -->
<!-- Simple Select with arrow -->
<!-- <i class="fa-solid fa-list-radio input-icon"></i> -->
<select  class="dropdown">
  
  <option class="selectOption" value="soft-plastics"> Soft Plastics</option>
  <option class="selectOption" value="hard-plastics">Hard Plastics</option>
  <option class="selectOption" value="mixed-plastics">Mixed Plastics</option>
  <option class="selectOption" value="coffee-grounds">Coffee Grounds</option>
  <option class="selectOption" value="cardboard">Cardboard</option>

</select>
<br>

<button id="search-btn" >
  <i class="fa-solid fa-magnifying-glass"></i>
  Search
</button>
<br>
<button id="donate-btn" >
  Donate Waste
</button>
  </main>
</template>

<style>
.input-icon{
  margin-right: -30px;
  z-index: 999;
}
.input-field{
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

#search-btn{
  background-color: #FFE164;
    box-shadow:10px 10px 10px rgba(0, 0, 0, 0.1);;
  border-radius: 15px;
  margin: 40px;
  font-family: FuturaPT-bold;
   border: none;
   padding: 10px;
   color: white;
   width: 150px;
}
#donate-btn{
  background-color: #FF6464;
    box-shadow:10px 10px 10px rgba(0, 0, 0, 0.1);;
  border-radius: 15px;

  font-family: FuturaPT-bold;
   border: none;
   padding: 10px;
   color: white;
   width: 150px;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}
.dropdown {
  padding: 15px;
  width: 250px;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  box-shadow:10px 10px 10px rgba(0, 0, 0, 0.2);
  font-family: FuturaPT-bold;
}
.selectOption {
  background: rgba(255, 255, 255, 0.1) !important;
  color: black;
}

@font-face {
    font-family: 'FuturaPT-bold';
    src: url("../assets/futuraPT/FuturaPT-Bold.ttf");
    font-style: normal;
}
@font-face {
    font-family: 'FuturaPT-medium';
    src: url("../assets/futuraPT/FuturaPT-Medium.ttf");
    font-style: normal;
}
@font-face {
    font-family: 'gilroy-bold';
    src: url("../assets/gilroy/Gilroy-Bold.woff");
    font-style: normal;
}
h1 {
    font-family: gilroy-bold;
    color: white;
    font-size: 3em;
}
html{
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  background-image: url("../../public/World_Map_Bg.png"), linear-gradient(#DB8383, #FFE2A9);
 background-size: cover;
 background-position: center;
  background-repeat: no-repeat;
}
.logo{
  width:60px;
  margin-top: 10%;
}
label{
  margin: 10px;
}
</style>