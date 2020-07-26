<template>
  <div class="contain">
    <div class="overlay"></div>
    <header class="header">
      <slot></slot>
    </header>
  </div>
</template>

<style lang="scss">
.contain {
  position: relative;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.4);
  }
  header {
    background-image: url("../assets/header-bg (1).jpg");
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/header-bg (1).jpg");
    background-size: cover;
  }
  h1,
  h2 {
    position: absolute;
    right: 100px;
    color: #fff;
    font-weight: 300;
    font-size: 44px;
    z-index: 3;
  }
  @media (max-width: 1300px) {
    h1 {
      display: none;
    }
  }
}
.back-button {
  position: absolute;
  text-decoration: none;
  right: 25px;
  top: 30px;
  color: #fff;
  background-color: #218838;
  border-radius: 5px;
  border: none;
  padding: 15px 25px;
  font-size: 22px;
  line-height: 1;
  z-index: 3;
  text-decoration: none;
  &:hover {
    background-color: #296336;
    text-decoration: none;
    color: #fff;
    transition:all ease-in-out 0.7s;
  }
}
</style>

<script>
export default {
  name: "app-header",
};
</script>
