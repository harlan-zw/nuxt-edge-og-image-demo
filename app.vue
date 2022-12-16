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
  console.log(await data.json())
  defineOgImage({
    runtime: true,
    component: 'Banner',
    time: new Date().toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }),
    followsCount: 0 //data?.data[0]?.public_metrics?.followers_count || 0,
  })
}
</script>
<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
