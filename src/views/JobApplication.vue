<template>
  <div class="logo">
    <span>Construct</span>
  </div>

  <div class="maincontainer">
    <div class="jobAbout">
      <div class="jobTitle">
        <span> {{ jobName }} </span>
      </div>

      <div class="jobDescription">
        <span>
          As a Java artist at Construct, you will join a world-class group of
          software engineers, artists, writers, animators, and designers who are
          continually building and releasing entertainment experiences to
          players around the globe. We're hoping to add your expertise in
          character design and sculpting to our team! Construct is an
          entertainment and technology company driven to design and deliver
          extraordinary entertainment experiences to customers. We hire people
          with broad skill sets who also exhibit deep expertise. Character
          artists at Construct contribute in all aspects of our character
          pipeline: we sculpt high-resolution models (ZBrush, Mudbox or 3DCoat),
          craft low-resolution game models, and author high-quality textures
          suitable for PBR workflows. We collaborate with concept artists to
          iterate on character designs and work with animators to build
          characters that can move and perform believably. We work in
          interdisciplinary design teams to help bring characters to life while
          making them work in the context of our game design. We also recruit
          artists like you. Do you prefer to collaborate with peers to define
          the work that you pursue, rather than simply follow a vision that's
          been set for you? If you're seeking an opportunity to work on
          genre-defining games with other world-class artists, consider joining
          Construct. We can't wait to see where you'll take us!
        </span>
      </div>

      <div class="wordfromus">
        <span>
          Construct strives to improve the diversity of our teams to better
          serve our diverse global audience. We welcome and encourage
          individuals from all backgrounds to apply. Candidates will be
          considered without regard to race, religion, color, national origin,
          gender, sexual orientation, age, family status, veteran status or
          disability status. Construct is committed to creating an inclusive
          work environment and does not tolerate discrimination or harassment in
          the workplace. We will ensure that individuals with disabilities are
          provided reasonable accommodation to participate in the job
          application or interview process, to perform essential job functions,
          and to receive other benefits and privileges of employment. Please
          contact us to request accommodation.
        </span>
      </div>
    </div>

    <div class="applicationForm">
      <div class="title">
        <span>You're applying!</span>
      </div>

      <div class="form">
        <div class="row">
          <div class="field">
            <span class="label">Name</span>
            <input placeholder="Name" />
          </div>

          <div class="field">
            <span class="label">Email</span>
            <input placeholder="Email" />
          </div>
        </div>

        <div class="field">
          <span class="label">About yourself</span>
          <textarea maxlength="200" placeholder="About yourself" />
        </div>

        <button class="applybtn">
            Apply
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const jobName = route.params.jobname;

    return {
      jobName,
    };
  },
};
</script>


<style scoped>
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

.maincontainer {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
}

.jobAbout .jobTitle {
  font-size: 50px;
  font-weight: 900;
}

.jobAbout .jobDescription {
  margin-top: 10px;
  font-size: 20px;
}

.jobAbout .wordfromus {
  margin-top: 30px;
  font-size: 20px;
  color: #ffc31b;
  font-weight: 700;
}

.applicationForm .title {
  margin-top: 30px;
  font-size: 40px;
  color: black;
  font-weight: 700;
}
.applicationForm .form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-content: center;
}
.applicationForm .form .row {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: center;
}

.applicationForm .field {
  display: flex;
  flex-direction: column;
  margin: 30px;
}

.applicationForm textarea {
  resize: none;
}

.applicationForm .field .label {
  font-size: 30px;
  color: black;
  font-weight: 700;
}

.applicationForm .form .field input {
  font-size: 30px;
  color: black;
  font-weight: 400;
  outline: black;
  border-width: 2px;
  padding: 5px;
}

.applicationForm .field textarea {
  font-size: 30px;
  color: black;
  font-weight: 400;
  outline: black;
  border-width: 2px;
  padding: 5px;
}

.applybtn{
    border: none;
    background-color: #ffc31b;
    border-radius: 20px;
    font-weight: 800;
    color: white;
    margin: auto;
    font-size: 30px;
    width: 50%;
    height: 100px;
}
</style>


