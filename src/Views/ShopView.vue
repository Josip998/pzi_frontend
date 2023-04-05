<script>
</script>


<template>
  <div class="container">
    <v-row>
      <v-col
        v-for="n in 20"
        :key="n"
        class="d-flex child-flex"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 5px;
  padding: 20px 20px;
}
</style>