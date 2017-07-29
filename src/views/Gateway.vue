<template>
  <div>
    <div class="toolbar">
      <el-row>
        <el-col :span="4">
          <el-button type="primary" icon="plus" @click="handleAdd"></el-button>
        </el-col>
        <el-col :span="20">
          
        </el-col>
      </el-row>
    </div>
    <div class="table">
      <el-table border :data="listData.rows">
        <el-table-column align="center" label="网关ID" prop="id"></el-table-column>
        <el-table-column align="center" label="网关IP" prop="ip"></el-table-column>
      </el-table>
      <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentPage"
                     :current-page="queryData.page" :page-sizes="[10, 20, 30, 50]"
                     :page-size="queryData.pageSize" layout="total, sizes, prev, pager, next, jumper"
                     :total="listData.total"></el-pagination>
    </div>
    <el-dialog title="添加网关" :visible.sync="gatewayDialog">
      <el-form :inline="true" :model="gatewayFormData" ref="gatewayForm" :rules="gatewayFormRules">
        <el-form-item label="网关ID:" prop="id">
          <el-input class="input-content" v-model="gatewayFormData.id"></el-input>
        </el-form-item>
        <el-form-item label="网关IP:" prop="ip">
          <el-input class="input-content" v-model="gatewayFormData.ip"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="gatewayDialog=false">取 消</el-button>
        <el-button type="primary" @click="saveGroup">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style>
  .toolbar {
    padding: 10px 15px 0 15px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .table {
    padding: 0 15px;
  }
  .input-content {
    width: 300px;
  }
  .pagination {
    float: right;
    padding-top: 10px;
  }
</style>

<script>
import * as gatewayApi from '../apis/gateway';
export default {
  name: 'gateway',
  data() {
    return {
      gatewayDialog: false,
      queryData: {
        page: 1,
        pageSize: 10
      },
      listData: {
        rows: [],
        total: 8,
        page: 1,
        pageSize: 10
      },
      gatewayFormData: {
        id: '',
        ip: ''
      },
      gatewayFormRules: {
        id:[{required: true, message: '请输入网关ID!', trigger:'blur'}],
        ip:[{required: true, message: '请输入网关IP!', trigger:'blur'}]
      }
    }
  },
  mounted() {
    this.handleQuery();
  },
  methods: {
    handleQuery(){
      gatewayApi.list(this.queryData).then((res) => {
          this.listData = res.data.data;
        })
    },
    handleSelectionChange(val){
      this.multipleSelection = val;
    },
    handleSizeChange(val){
      this.queryData.pageSize = val;
      this.handleQuery();
    },
    handleCurrentPage(val){
      this.queryData.page = val;
      this.handleQuery();
    },
    handleAdd(){
      this.gatewayDialog = true;
      this.gatewayFormData = {
        id: '',
        ip: ''
      }
    },
    saveGroup(){
      this.$refs['gatewayForm'].validate((valid) => {
        valid && gatewayApi.add(this.gatewayFormData).then(() => {
          this.gatewayDialog = false;
          this.queryData.page= 1;
          this.handleQuery();
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        })
      })
    }
  }
}
</script>