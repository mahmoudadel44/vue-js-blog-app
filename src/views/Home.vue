<template>
  <div>
    <app-header>
       <h1>Blogs Website</h1>
    </app-header>
    <div class="container" v-if="blogs">
      <div class="row">
        <blog-card
          v-for="blog in blogs"
          :key="blog.id"
          :data="blog"
        ></blog-card>
      </div>
    </div>
    <div class="text-center">
      <button
        type="button"
        class="load-more-button"
        @click="loadMore"
        v-if="blogs && blogs.length < totalcounts"
      >
        Load More ....
      </button>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/app-header";
import BlogCard from "../components/blog-card";
import axios from "axios";
export default {
  data() {
    return {
      blogs: null,
      page: 1,
      totalcounts: null,
    };
  },
  components: {
    AppHeader,
    BlogCard,
  },
  mounted() {
    this.getBlogs(this.page);
  },
  methods: {
    getBlogs(page) {
      axios
        .get(`http://localhost:3000/blog?_page=${page}&_limit=6`)
        .then(res => {
          this.blogs = this.blogs ? this.blogs.concat(res.data) : res.data;
          this.totalcounts = res.headers["x-total-count"];
          // console.log(this.totalcounts)
        });
    },
    loadMore() {
      this.page++, this.getBlogs(this.page);
    },
  },
};
</script>

<style lang="scss">
.load-more-button {
  color: #fff;
  background-color: #990099;
  border-radius: 5px;
  border: none;
  padding: 15px 25px;
  font-size: 22px;
  margin-top: 50px;
  margin-bottom: 50px;
  line-height: 1;
  &:focus{
    outline:none;
  }
}
.container {
  padding: 0 10px;
  margin: auto;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
}
</style>
