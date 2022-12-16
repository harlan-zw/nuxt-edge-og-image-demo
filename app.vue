<script lang="ts" setup>
if (process.server) {
  console.log('app.vue')
  const runtimeConfig = useRuntimeConfig()
  console.log('runtime config', runtimeConfig)
// get the current time nicely formatted for a human
// this is the HTTP header that adds bearer token authentication
  const usernames = runtimeConfig.username
  const userFields = 'created_at,description,public_metrics,profile_image_url'
  const data = await fetch(`https://api.twitter.com/2/users/by?usernames=${usernames}&user.fields=${userFields}`, {
    headers: {
      "User-Agent": "v2UserLookupJS",
      "authorization": `Bearer ${runtimeConfig.token}`
    },
  })
  console.log(data)
}
</script>
<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
