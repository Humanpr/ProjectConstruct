<template>
  <router-view/>
</template>

<style>
body,ul,li,html,h1{
  margin: 0;
}

body{
  font-family: "apercu";
}

.home{
  display: flex;
  flex-direction: column;
}

.jobdetailcolumn .detailitem{
  display: inline-block;
  font-size: 30px;
  margin: 20px;
  padding: 60px;
  width: auto;
  cursor: pointer;
}

.jobdetails .jobdetailcolumn{
  background-color: #FFFF;
  margin-left: -6%;
}

.video-container{
  display: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.filter{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: black;
  opacity: 0.7;
}

.video-container video {
    position: fixed;
    z-index: -2;
    top: 0px;
    left: 0px;
    width: 100%; 
    height: 100%;
    object-fit: cover;
}

.logo{
  width: 7%;
  height: 4%;
  background: linear-gradient(180deg, #FFC31B 27.6%, rgba(157, 133, 65, 0) 100%);
  text-align: center;
  font-style: normal;
  font-size: 150%;
  font-weight: bolder;
  line-height: 87px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-left: 5%;
}

.jobsintro{
  display: grid;
  grid-template-areas: "jobdesc search";
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
  margin-bottom: 100px;
}

.jobsintro .inspiringcontent{
  grid-area: jobdesc;
  margin-left: 10%;
  margin-top: 10%;
  text-align: left;
}

.jobsintro .searchbar{
  display: flex;
  justify-content: center;
  grid-area: search;
}

.jobsintro .searchbar input{
  height: 10%;
  width: 50%;
  color: #FFC31B;
  border: none;
  border-bottom: 2px #FFFF solid;
  border-bottom-color: white;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  font-size: 20px;
  background-color: transparent;
  outline: none;
  padding: 10px 0;
  margin: auto;
}

.background
{
  position: fixed;
  top: 0px;
  left: 0px;
  width:100%;
  height: 100%;
  z-index: -2;
}
.jobsintro .inspiringcontent .motto h1{
  color: #FFC31B ;
  font-size: 50px;
  margin: 5px;
}
.jobsintro .inspiringcontent .whatweseek h2{
  color: #FFFF ;
  font-size: 20px;
}

.jobs{
  display: flexbox;
  flex-direction: column;
  margin-left: 5%;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.jobs .job{
  margin-top: 50px;
}

.jobs .job h1{
  cursor: pointer;
  padding: 10px;
}

.jobs .job .jobtitle h1{
  text-align: left;
  color: #FFC31B ;
  font-size: 70px;
  font-weight: 900;
  line-height: 84px;
}

.jobs .job .jobdetail{
  background-color: #FFFF;
  margin-left: -6%;
  cursor: default;
}

.searchedjobs{
  display: flex;
  flex-flow: row wrap;
  background-color: #FFFF;
}

.searchedjobs .jobdetailcolumn{
  width: auto;
}

.searchedjobs .jobdetailcolumn .detailitem{
  display: inline-block;
  font-size: 30px;
  margin: 20px;
  cursor: pointer;
}




.jobs .wemissed{
  margin-top: 50px;
}

.jobs .wemissed h1{
  text-align: left;
  color: #FFC31B ;
  font-size: 50px;
  margin: 5px;
}



.jobs .wemissed :hover,
.jobs .job .jobtitle :hover{
  color: white;
}


.jobdetail{
  display: flex;
  flex-flow: row wrap;
  margin:0;
}

footer{
  display: block;
  background-color: #FFC31B;
  width: 100%;
  height: 50%;
  margin-top: 80px;
}


</style>
