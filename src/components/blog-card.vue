<template>
  <div class="blog-card mt-3">
    <div class="card-image">
      <div class="ratio-content">
        <img :src="data.image" alt="My Image" />
      </div>
    </div>
    <div class="card-content mt-3">
      <h2 class="card-title">
        {{ data.title }}
      </h2>
      <p class="card-summary">
        {{ data.summary }}
      </p>
    <router-link :to="`blog/${data.id}`" class="read-more"> continu reading ....</router-link>

    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss">
.blog-card {
  width: 33%;
  padding: 0px 10px;
  box-sizing: border-box;
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 100%;
  }

  .card-image {
    position: relative;
    .ratio-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      border-radius: 5px;
    }
    &::before {
      padding-top: 66.5%;
      content: "";
      display: block;
    }
    img {
      width: 100%;
      min-height: 100%;
    }
  }
  .card-title {
    color: #990099;
    font-size: 20px;
    font-weight: 700;
  }
  .card-summary {
    font-weight: 300;
    color: #333;
  }
  .read-more {
    text-decoration: none;
    color: #333;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
  }
}
</style>
