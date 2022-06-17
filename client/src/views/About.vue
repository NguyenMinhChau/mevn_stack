<template>
<v-container>
  <v-row align="center" justify="center">
    <v-col class="text-center" cols="12">
      <a href="https://hcmue.edu.vn/vi/"><img class="img-hcmue" src="https://hcmue.edu.vn/images/106116969_306361297423538_2421300353161578289_n.png"/></a>
    </v-col>
    <v-col class="text-center" cols="12">

      <template>
        <v-simple-table class="">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th class="text-center">Họ và tên</th>
                <th class="text-center">Mã số sinh viên</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.mssv">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.mssv }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            id: 1,
            name: 'Nguyễn Minh Châu',
            mssv: 4501104023,
          },
          {
            id: 2,
            name: 'Nguyễn Tuyết Ngân',
            mssv: 4501104154,
          },
          {
            id: 3,
            name: 'Nguyễn Duy Phúc',
            mssv: 4501104179,
          },
          {
            id: 4,
            name: 'Võ Thị Trúc Phương',
            mssv: 4501104185,
          },
        ],
      }
    },
  }
</script>
<style>
@import '../css/main.css';
</style>