<template>
  <div>
    <div class="toolbar">
      <el-row>
        <el-col :span="4">
          <el-button type="primary" icon="plus" @click="handleAdd"></el-button>
          <el-button type="primary" icon="delete" @click="delHelmet"></el-button>
        </el-col>
        <el-col :span="20">
          <el-form :inline="true" :model="queryData" class="queryForm">
            <el-form-item>
              <el-select v-model="queryData.filterOption" placeholder="分组情况">
                <el-option label="全部" value="0"></el-option>
                <el-option label="已分组" value="1"></el-option>
                <el-option label="未分组" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input v-model="queryData.queryMac" placeholder="编号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <div class="table">
      <el-table ref="multipleTable" :data="listData.rows" border tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column align="center" type="selection" width="55"></el-table-column>
        <el-table-column align="center" prop="helmetMac" label="编号" width="220"></el-table-column>
        <el-table-column align="center" prop="worker" label="人员姓名" width="160"></el-table-column>
        <el-table-column align="center" prop="workerPicture" label="人员照片" width="120">
          <template scope="scope">
            <el-popover ref="scope.row.mac" placement="right" trigger="hover">
              <img class="big-pic" :src="scope.row.workerPicture" :alt="scope.row.worker" @error="setDftImg">
              <img class="pic" slot="reference" :src="scope.row.workerPicture" :alt="scope.row.worker" @error="setDftImg">
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="teamName" label="所在组" width="140">
          <template scope="scope">
            <span>{{scope.row.teamName || '-'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="workerPhone" label="电话" width="140"></el-table-column>
        <el-table-column align="center" prop="wearStatus" label="佩戴状态">
          <template scope="scope">
            <span>{{wearStatusArr[scope.row.wearStatus]}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="battery" label="电量" width="80"></el-table-column>
        <el-table-column align="center" prop="online" label="离/在线">
          <template scope="scope">
            <span :style="{color: scope.row.online ? 'green': 'red'}">{{scope.row.online ? '在线' : '离线'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="runningTime" label="运行时间(秒)"></el-table-column>
        <el-table-column align="center" prop="runningStatus" label="运行状态">
          <template scope="scope">
            <span>{{runningStatusArr[scope.row.runningStatus]}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" fixed="right" label="操作" width="180">
          <template scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleGroup(scope.$index, scope.row)">{{scope.row.teamName && '修改分组' || '添加分组'}}</el-button>
            <el-button type="text" size="small" @click="handleReboot(scope.$index, scope.row)">重启</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentPage"
                     :current-page="queryData.page" :page-sizes="[10, 20, 30, 50]"
                     :page-size="queryData.pageSize" layout="total, sizes, prev, pager, next, jumper"
                     :total="listData.total">
      </el-pagination>
    </div>
    <el-dialog :title="helmetDialogName" :visible.sync="helmetDialog" @close="cancelDialog">
      <el-form :inline="true" :model="helmetFormData" :rules="helmetFormRules" ref="helmetForm">
        <el-form-item label="安全帽编号:" prop="helmetMac" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="helmetFormData.helmetMac" auto-complete="off" :disabled="editModel"></el-input>
        </el-form-item>
        <el-form-item label="人员姓名:" prop="worker" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="helmetFormData.worker" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话:" prop="workerPhone" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="helmetFormData.workerPhone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="人员照片:" prop="workerPicture" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="helmetFormData.workerPicture" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="helmetDialog=false">取 消</el-button>
        <el-button type="primary" @click="saveHelmet">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="groupDialogName" :visible.sync="groupDialog" size="tiny">
      <el-form :model="groupFormData" :rules="groupFormRules" ref="groupForm">
        <el-form-item label="分组" :label-width="formLabelWidth">
          <el-select v-model="groupFormData.teamId" placeholder="请选择分组">
            <el-option v-for="(item,index) in groupList" :label="item.name" :value="item.id" :key="index"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="groupDialog=false">取 消</el-button>
        <el-button type="primary" @click="saveGroup">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style scoped lang="less">
  .toolbar {
    padding: 10px 15px 0 15px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .big-pic {
    width: 250px;
    height: 250px;
  }

  .pic {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    width: 45px;
    height: 45px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }

  .queryForm {
    float: right;
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
  import * as helmetApi from '../apis/helmets';
  export default {
    name: 'helmet',
    data() {
      return {
        queryData: {
          filterOption: '',
          queryMac: '',
          page: 1,
          pageSize: 10
        },
        wearStatusArr: ["未佩戴且无动作", "未佩戴有动作表示", "有佩戴但无动作", "有佩戴且有动作"],
        runningStatusArr: ["", "电量告警", "", "本地自检"],
        helmetFormData: {
          helmetMac: '',
          worker: '',
          workerPhone: '',
          workerPicture: ''
        },
        groupDialogName: '添加分组',
        helmetDialogName: '添加安全帽',
        groupFormData:{
          teamId: '',
          helmetMac: 0,
        },
        groupFormRules: {
          teamId: [{required: true, message: '请给该安全帽选一个分组', trigger:'blur'}]
        },
        helmetFormRules:{
        	helmetMac:[{required: true, message: '请输入安全帽编号!', trigger:'blur'}],
          worker: [{required: true, message: '请输入人员姓名!', trigger:'blur'}],
          workerPhone: [{required: true, message: '请输入联系电话!', trigger:'blur'}],
          workerPicture: [{required: true, message: '请输入人员照片!', trigger:'blur'}],
        },
        formLabelWidth: '120px',
        helmetDialog: false,
        groupDialog: false,
        groupList: [],
        listData: {
          page: 1,
          pageSize: 10,
          total: 8,
          rows: []
        },
        multipleSelection: [],
        editModel: false // 用于当前打开的dialog是否是编辑状态,,true,说明在修改, 否则便是添加
      }
    },
    mounted() {
      this.handleQuery();
    },
    methods: {
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
      handleQuery() {
        helmetApi.list(this.queryData).then((res) => {
          this.listData = res.data.data;
        })
      },
      handleEdit(index, rowData) {
        this.helmetDialog = true;
        this.editModel = true;
        this.helmetFormData = rowData;
         this.helmetDialogName = '修改安全帽';
      },
      handleAdd() {
        this.helmetDialog = true;
        this.editModel = false;
        this.helmetFormData = {helmetMac: '', worker: '', workerPhone: '', workerPicture: ''};
        this.helmetDialogName = '添加安全帽';
      },
      handleGroup: function(index, rowData){
        this.groupDialog = true;
        rowData.teamName && (this.groupDialogName = '修改分组') || (this.groupDialogName = '添加分组');
        helmetApi.groupList().then((data)=>{
          console.log(data);
          this.groupList = data.data.data;
          this.groupFormData.teamId = rowData.teamId;
          this.groupFormData.helmetMac = rowData.helmetMac;
        });
      },
      handleReboot: function(index,rowData){
        helmetApi.reboot({helmetMac: rowData.helmetMac}).then((data)=>{
          this.$message({
            type: data.data.success&&'success'|| 'error',
            message: data.data.success&&'重启成功!'|| '重启失败!'
          });
        });
      },
      saveGroup: function(){
        this.$refs['groupForm'].validate((valid)=>{
          valid && helmetApi.handleGroup(this.groupFormData)
            .then(()=>{
              this.groupDialog = false;
              this.queryData.page= 1;
              this.handleQuery();
              this.$message({
                type: 'success',
                message: '保存成功!'
              });
            })
        })

      },
      saveHelmet(){
        this.$refs['helmetForm'].validate((valid) => {
        	valid && helmetApi[this.editModel ? 'update':'add'](this.helmetFormData)
            .then(()=>{
              this.helmetDialog = false;
              this.queryData.page= 1;
              this.handleQuery();
              this.$message({
                type: 'success',
                message: this.editModel ? '更新成功!':'添加成功!'
              });
            })
        })
      },
      // 取消弹窗
      cancelDialog(){
        this.$refs['helmetForm'].resetFields();
      },
      delHelmet() {
        if (!this.multipleSelection.length) {
          this.$message({
            type: 'info',
            message: '请选择要删除的行!'
          });
          return;
        }
        this.$confirm('确定要删除选中的安全帽吗?', '删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          helmetApi.del({
            helmetList: this.multipleSelection.map((item) => {
              return item.mac
            })
          }).then(() => {
          	this.helmetDialog = false;
          	this.queryData.page= 1;
          	this.handleQuery();
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          });
        })
      },
      setDftImg(e){
        e.target.src= require('../assets/imgs/avatar.jpg')
      }
    }
  }
</script>
