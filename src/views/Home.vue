<template>
  <link href="http://fonts.cdnfonts.com/css/apercu" rel="stylesheet" />

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
  <footer>©2021 or smth</footer>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  setup() {
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
      const detailName = event.target.innerHTML;
      console.log(detailName);
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
