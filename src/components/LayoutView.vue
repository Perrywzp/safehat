<template>
  <div>
    <!--安全帽总览-->
    <div class="gl-xs-w-12 gl-xs-h-3 gl-xs-x-0 gl-xs-y-0">
      <div class="fill-10">
        <slot name="summary"></slot>
      </div>
    </div>
    <!--事件中心-->
    <div class="gl-xs-w-4 gl-xs-h-9 gl-xs-x-0 gl-xs-y-3">
      <div class="fill-10">
        <slot name="event"></slot>
      </div>
    </div>
    <!--异常事件-->
    <div class="gl-xs-w-4 gl-xs-h-5 gl-xs-x-4 gl-xs-y-3">
      <div class="fill-10">
        <slot name="unusual"></slot>
        <!--<unusual></unusual>-->
      </div>
    </div>
    <!--安全帽数量-->
    <div class="gl-xs-w-4 gl-xs-h-5 gl-xs-x-8 gl-xs-y-3">
      <div class="fill-10">
        <slot name="hatNum"></slot>
      </div>
    </div>
    <!--各组带帽率排名-->
    <div class="gl-xs-w-4 gl-xs-h-5 gl-xs-x-4 gl-xs-y-7">
      <div class="fill-10">
        <slot name="putHatRank"></slot>
      </div>
    </div>
    <!--日周月带帽率-->
    <div class="gl-xs-w-4 gl-xs-h-5 gl-xs-x-7 gl-xs-y-7">
      <div class="fill-10">
        <slot name="putHatRate"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      name: 'LayoutView'
  }
</script>
