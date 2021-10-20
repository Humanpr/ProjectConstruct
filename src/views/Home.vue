<template>
  <div class="background">
    <div class="video-container">
      <video ref="video" playsinline="" muted="" loop="true">
        <source class="fullsize" src="const.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="filter"></div>
  </div>

  <div class="home">
    <div class="logo">
      <span>Construct</span>
    </div>

    <div class="jobsintro">

      <div class="inspiringcontent">
        <div class="motto">
          <h1>We make buildings, fences, walls and sandcastles. Join us.</h1>
        </div>
        <div class="whatweseek">
          <h2>
            We're seeking collaborators who are the best at what they do.
            Opportunities at Construct run broad and deep across the following
            areas, where we're always hiring for all positions.
          </h2>
        </div>
      </div>

      <div class="searchbar">
        <input @input="search" placeholder="Search for jobs" />
      </div>

    </div>

    <div v-if="searchQuery !== '' " class="searchedjobs">
          <div v-for="searchJob in searchedJobs" :key="searchJob" class="jobdetailcolumn">
            <div
              class="detailitem"
            >
              <h5 @click="goToJobDetail">{{searchJob.jobName}}</h5>
            </div>
          </div>
    </div>

    <div class="jobs">
      <div
        v-for="job in jobDetails"
        :key="job"
        class="job"
      >
        <div @click.stop="clicked(job)" class="jobtitle unselectable">
          <h1>{{ job.jobName }}</h1>
        </div>

        <div v-if="job.isOpen" class="jobdetails">
          <div class="jobdetailcolumn">
            <div
              v-for="jobDetail in job.desc"
              :key="jobDetail"
              class="detailitem"
            >
              <h5 @click="goToJobDetail">{{ jobDetail }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="wemissed">
        <h1>Did we miss something?</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
// @ is an alias to /src

export default {
  setup() {
    const router = useRouter()

    const jobDetailsData = [
      {
        jobName: "Software Engineer",
        desc: ["Java", "c#", "stuff"],
        isOpen: false,
      },
      {
        jobName: "Software Engineer",
        desc: ["Java", "c#", "stuff"],
        isOpen: false,
      },
      {
        jobName: "Software Engineer",
        desc: ["Java", "c#", "stuff"],
        isOpen: false,
      },
      {
        jobName: "Software Engineer",
        desc: ["Java", "c#", "stuff"],
        isOpen: false,
      },
      {
        jobName: "Software Engineer",
        desc: ["Java", "c#", "stuff"],
        isOpen: false,
      },
      {
        jobName: "Software Engineer",
        desc: ["sad", "c#", "stuff"],
        isOpen: false,
      },
    ];

    const searchQuery = ref('');
    const jobDetails = ref(jobDetailsData);

    const video = ref(null);

    onMounted(() => {
      video.value.play();
    });

    const clicked = function (job) {
      console.log(job);
      job = jobDetails.value.find((j) => j === job);
      jobDetails.value.forEach(j=>{ 
        if(j !== job )
        j.isOpen=false
        });
      job.isOpen = !job.isOpen;
    };

    const goToJobDetail = function (event) {
      const detailName = event.target.innerHTML
      router.push(`/applyto/${detailName}`)
    };

    const search = function(event){
      setTimeout(()=>{
        const query = event.target.value
        searchQuery.value = query
        console.log(query)
      },800);
    }

    const searchedJobs = computed(()=>{
      console.log(jobDetailsData.map(j=>j.jobName).filter(n=>n.includes(searchQuery.value)));
      return jobDetailsData.filter(j=>j.jobName.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });

    return { video, clicked, jobDetails, goToJobDetail,search,searchQuery,searchedJobs };
  },
};
</script>


<style scoped>

.home {
  display: flex;
  flex-direction: column;
}

.jobdetailcolumn .detailitem {
  display: inline-block;
  font-size: 30px;
  margin: 20px;
  padding: 60px;
  width: auto;
  cursor: pointer;
}

.jobdetails .jobdetailcolumn {
  background-color: #ffff;
  margin-left: -6%;
}

.video-container {
  display: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.filter {
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

.logo {
  width: 7%;
  height: 4%;
  background: linear-gradient(
    180deg,
    #ffc31b 27.6%,
    rgba(157, 133, 65, 0) 100%
  );
  text-align: center;
  font-style: normal;
  font-size: 150%;
  font-weight: bolder;
  line-height: 87px;
  letter-spacing: -0.07em;
  color: #000000;
  margin-left: 5%;
}

.jobsintro {
  display: grid;
  grid-template-areas: "jobdesc search";
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
  margin-bottom: 100px;
}

.jobsintro .inspiringcontent {
  grid-area: jobdesc;
  margin-left: 10%;
  margin-top: 10%;
  text-align: left;
}

.jobsintro .searchbar {
  display: flex;
  justify-content: center;
  grid-area: search;
}

.jobsintro .searchbar input {
  height: 10%;
  width: 50%;
  color: #ffc31b;
  border: none;
  border-bottom: 2px #ffff solid;
  border-bottom-color: white;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  font-size: 20px;
  background-color: transparent;
  outline: none;
  padding: 10px 0;
  margin: auto;
}

.background {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -2;
}
.jobsintro .inspiringcontent .motto h1 {
  color: #ffc31b;
  font-size: 50px;
  margin: 5px;
}
.jobsintro .inspiringcontent .whatweseek h2 {
  color: #ffff;
  font-size: 20px;
}

.jobs {
  display: flexbox;
  flex-direction: column;
  margin-left: 5%;
}

.jobs .job {
  margin-top: 50px;
}

.jobs .job h1 {
  cursor: pointer;
  padding: 10px;
}

.jobs .job .jobtitle h1 {
  text-align: left;
  color: #ffc31b;
  font-size: 70px;
  font-weight: 900;
  line-height: 84px;
}

.jobs .job .jobdetail {
  background-color: #ffff;
  margin-left: -6%;
  cursor: default;
}

.searchedjobs {
  display: flex;
  flex-flow: row wrap;
  background-color: #ffff;
}

.searchedjobs .jobdetailcolumn {
  width: auto;
}

.searchedjobs .jobdetailcolumn .detailitem {
  display: inline-block;
  font-size: 30px;
  margin: 20px;
  cursor: pointer;
}

.jobs .wemissed {
  margin-top: 50px;
}

.jobs .wemissed h1 {
  text-align: left;
  color: #ffc31b;
  font-size: 50px;
  margin: 5px;
}

.jobs .wemissed :hover,
.jobs .job .jobtitle :hover {
  color: white;
}

.jobdetail {
  display: flex;
  flex-flow: row wrap;
  margin: 0;
}

</style>
