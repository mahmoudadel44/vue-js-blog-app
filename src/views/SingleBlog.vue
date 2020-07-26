<template>
  <div v-if="blog">
    <app-header>
      <router-Link to="/" type="button" class="back-button"
        >Back</router-Link>
      <h1>{{ blog.title }}</h1>
    </app-header>
    <div class="container">
      <div class="blog-content">
        <div class="blog-image">
          <div class="ratio-content">
            <img :src="blog.image" alt="My Image" />
          </div>
        </div>

        <h2 class="blog-title mt-3">{{ blog.title }}</h2>
        <p class="blog-contain">{{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/app-header";
import axios from "axios";
export default {
  data() {
    return {
      blog: null,
    };
  },
  components: { AppHeader },
  mounted() {
    axios
      .get("http://localhost:3000/blog/" + this.$route.params.id)
      .then(res => {
        // console.log("data for blog", res.data);
        this.blog = res.data;
      });
  },
};
</script>

<style scoped lang="scss">
.blog-content {
  margin-top: 50px;
}
.blog-image {
  position: relative;
  &::before {
    display: block;
    content: "";
    padding-top: 50%;
  }
  .ratio-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
}
.blog-title {
  color: #990099;
}
.blog-contain {
  color: #9e9c9e;
  font-style: italic;
}
</style>
