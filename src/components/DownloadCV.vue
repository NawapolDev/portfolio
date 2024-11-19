<template>
  <a
    class="px-6 py-4 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white flex justify-center items-center w-fit"
    :href="refFile"
    download="Resume"
  >
    <i class="fa-solid fa-file-pdf"></i> &nbsp; {{ refName }}
  </a>
</template>

<script>
export default {
  name: "DownloadCV",
  props:{
    refFile: String,
    refName: String
  }
};
</script>
