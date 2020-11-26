<template>
  <div class="icons">
    <span v-for="(item,index) in icons" :key="index" class="box">
      <i-icon :name="item"></i-icon>
      <span class="icon-name">{{ item }}</span>
    </span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        icons: ["eye", "eye-close", "hardware", "upload1", "questionfill", "question", "form", "pic", "right", "refresh", "moreandroid", "deletefill", "remind", "delete", "profile", "home", "homefill", "message", "link", "lock", "unlock", "vip", "weibo", "friendaddfill", "friendadd", "friendfamous", "friend", "roundadd", "add", "notificationforbidfill", "fold", "infofill", "info", "vipcard", "share", "down", "noticefill", "notice", "pullleft", "pullright", "rankfill", "rank", "cameraadd", "friendfill", "cameraaddfill", "apps", "album", "peoplefill", "people", "file", "communityfill", "community", "group", "upload", "write", "add1", "move", "safe", "my", "myfill", "text", "recordfill", "record", "sortlight", "attentionforbid", "attentionforbidfill", "exit", "home_light", "my_light", "home_fill_light", "scan_light", "check", "close", "edit", "emoji", "loading", "locationfill", "location", "phone", "roundcheckfill", "roundcheck", "roundclosefill", "roundclose", "roundrightfill", "roundright", "search", "timefill", "time", "warnfill", "warn", "camerafill", "camera", "commentfill", "comment", "notificationfill", "notification", "pay", "send", "back", "cascades", "scan", "settings"]
      }
    }
  }
</script>

<style scoped>
  .icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .icons .box {
    font-size: 30px;
    width: 150px;
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }
  .icons .icon-name {
    font-size: 14px;
    display: block;
  }
</style>