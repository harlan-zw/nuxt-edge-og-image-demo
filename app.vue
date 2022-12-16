<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
// get the current time nicely formatted for a human
// this is the HTTP header that adds bearer token authentication
const data = await $fetch('https://api.twitter.com/2/users/by', {
  query: {
    usernames: runtimeConfig.username,
    'user.fields': 'created_at,description,public_metrics,profile_image_url',
  },
  headers: {
    "User-Agent": "v2UserLookupJS",
    "authorization": `Bearer ${runtimeConfig.token}`
  },
})

defineOgImage({
  runtime: true,
  component: 'Banner',
  time: new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', hour: 'numeric', minute: 'numeric', hour12: true }),
  followsCount: data?.data[0]?.public_metrics?.followers_count || 0,
})
</script>
<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
