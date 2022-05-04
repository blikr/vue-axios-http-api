<!--
 * @Descripttion: 
 * @Author: beiwangshan
 * @version: 
 * @Date: 2022-05-04 21:42:02
 * @LastEditors: beiwangshan
 * @LastEditTime: 2022-05-04 21:47:54
-->
<template>
  <div></div>
</template>

<script>
import * as api from "../utils/api";
export default {
  name: "Demo",
  data() {
    return {
        productCategories:[],
    };
  },
  methods: {
    getProCategories() {
      api.getProCategory().then((res) => {
        if (res.errorCode === api.SUCCESS_CODE) {
          for (let index = 0; index < res.rows.length; index++) {
            let obj = {
              name: "", //分类名
              id: "", //id
            };
            obj.name = res.rows[index].name;
            obj.id = res.rows[index].id;
            this.productCategories.push(obj);
          }
        } else {
          confirm.openNotice(res.errorMsg);
        }
      });
    },
  },
};
</script>

<style>
</style>