<template>
  <div>
    <div class="toolbar">
      <el-row>
        <el-col :span="4">
          <el-button type="primary" icon="plus" @click="handleAdd"></el-button>
        </el-col>
        <el-col :span="20">
          <el-form :inline="true" class="queryForm">
            <el-form-item>
              <el-select v-model="queryData.query" placeholder="队伍选择">
                <el-option label="全部" value=""></el-option>
                <el-option label="混水泥" value="混水泥"></el-option>
                <el-option label="钢筋" value="钢筋"></el-option>
                <el-option label="贴瓷砖" value="贴瓷砖"></el-option>
                <el-option label="搬砖" value="搬砖"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <div class="table">
      <el-table border :data="listData.rows">
        <el-table-column align="center" prop="name" label="队伍名称"></el-table-column>
        <el-table-column align="center" prop="description" label="队伍描述"></el-table-column>
        <el-table-column align="center" prop="count" label="安全帽数量"></el-table-column>
        <el-table-column align="center" prop="manager" label="队伍负责人"></el-table-column>
        <el-table-column align="center" prop="managerPhone" label="负责人手机号" width="120"></el-table-column>
        <el-table-column align="center" prop="helmetOffTime" label="允许最大脱帽时间(min)" width="120"></el-table-column>
        <el-table-column align="center" prop="amStartTime" label="上午上班时间"></el-table-column>
        <el-table-column align="center" prop="amEndTime" label="上午下班时间"></el-table-column>
        <el-table-column align="center" prop="pmStartTime" label="下午上班时间"></el-table-column>
        <el-table-column align="center" prop="pmEndTime" label="下午下班时间"></el-table-column>
        <el-table-column align="center" prop="amStartTime" label="上午上班时间"></el-table-column>
        <el-table-column align="center" prop="monday" label="周一是否上班">
          <template scope="scope">
            <span>{{scope.row.monday == true ? '是' : '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="tuesday" label="周二是否上班">
          <template scope="scope">
            <span>{{scope.row.tuesday == true ? '是' : '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="wednesday" label="周三是否上班">
          <template scope="scope">
            <span>{{scope.row.wednesday == true ? '是' : '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="thursday" label="周四是否上班">
          <template scope="scope">
            <span>{{scope.row.thursday == true ? '是' : '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="friday" label="周五是否上班">
          <template scope="scope">
            <span>{{scope.row.friday == true ? '是' : '否'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="70">
          <template scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentPage"
                     :current-page="queryData.page" :page-sizes="[10, 20, 30, 50]"
                     :page-size="queryData.pageSize" layout="total, sizes, prev, pager, next, jumper"
                     :total="listData.total">
      </el-pagination>
    </div>
    <el-dialog title="添加队伍" :visible.sync="groupDialog">
      <el-form :model="groupFormData" ref="groupForm" :rules="groupFormRules" class="dialog-body">
        <el-form-item label="队伍名称:" prop="name" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="队伍描述:" prop="description" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.description"></el-input>
        </el-form-item>
        <el-form-item label="队伍负责人:" prop="manager" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.manager"></el-input>
        </el-form-item>
        <el-form-item label="负责人手机号:" prop="managerPhone" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.managerPhone"></el-input>
        </el-form-item>
        <el-form-item label="上午上班时间(例如:08:00):" prop="amStartTime" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.amStartTime"></el-input>
        </el-form-item>
        <el-form-item label="上午下班时间(例如:12:00):" prop="amEndTime" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.amEndTime"></el-input>
        </el-form-item>
        <el-form-item label="下午上班时间(例如:14:00):" prop="pmStartTime" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.pmStartTime"></el-input>
        </el-form-item>
        <el-form-item label="下午下班时间(例如:18:00):" prop="pmEndTime" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.pmEndTime"></el-input>
        </el-form-item>
        <el-form-item label="安全帽最大允许脱帽时长(单位分钟):" prop="helmetOffTime" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.helmetOffTime"></el-input>
        </el-form-item>
        <el-form-item label="周一是否上班:" prop="monday" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.monday"></el-input>
        </el-form-item>
        <el-form-item label="周二是否上班:" prop="tuesday" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.tuesday"></el-input>
        </el-form-item>
        <el-form-item label="周三是否上班:" prop="wednesday" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.wednesday"></el-input>
        </el-form-item>
        <el-form-item label="周四是否上班:" prop="thursday" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.thursday"></el-input>
        </el-form-item>
        <el-form-item label="周五是否上班:" prop="friday" :label-width="formLabelWidth">
          <el-input class="input-content" v-model="groupFormData.friday"></el-input>
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
  .dialog-body{
    height: 600px;
    display: block;
    overflow: auto;
  }
</style>

<script>
  import * as groupApi from '../apis/group';
  export default {
    name: 'group',
    data() {
      return {
        queryData: {
          query: '',
          page: 1,
          pageSize: 10
        },
        listData: {
          page: 1,
          pageSize: 10,
          total: 8,
          rows: []
        },
        groupDialog: false,
        editModel: false,
        formLabelWidth: '300px',
        groupFormData: {
          name: '',
          description: '',
          manager: '',
          managerPhone: '',
          helmetOffTime: '',
          amStartTime: '',
          amEndTime: '',
          pmStartTime: '',
          pmEndTime: '',
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: ''
        },
        groupFormRules: {
          name:[{required: true, message: '请输入队伍名称!', trigger:'blur'}],
          description:[{required: true, message: '请输入队伍描述!', trigger:'blur'}],
          manager:[{required: true, message: '请输入负责人姓名!', trigger:'blur'}],
          managerPhone:[{required: true, message: '请输入负责人手机号!', trigger:'blur'}],
          helmetOffTime:[{required: true, message: '请输入最长允许脱帽时间(分钟)!', trigger:'blur'}],
          amStartTime:[{required: true, message: '请输入上午上班时间!', trigger:'blur'}],
          amEndTime:[{required: true, message: '请输入上午下班时间!', trigger:'blur'}],
          pmStartTime:[{required: true, message: '请输下午上班时间!', trigger:'blur'}],
          pmEndTime:[{required: true, message: '请输入下午下班时间!', trigger:'blur'}],
          monday:[{required: true, message: '请输入周一是否上班!', trigger:'blur'}],
          tuesday:[{required: true, message: '请输入周二是否上班!', trigger:'blur'}],
          wednesday:[{required: true, message: '请输入周三是否上班!', trigger:'blur'}],
          thursday:[{required: true, message: '请输入周四是否上班!', trigger:'blur'}],
          friday:[{required: true, message: '请输入周五是否上班!', trigger:'blur'}]
        }
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
        groupApi.list(this.queryData).then((res) => {
          this.listData = res.data.data;
        })
      },
      handleEdit(index, rowData) {
        this.groupDialog = true;
        this.editModel = true;
        this.groupFormData = rowData;
        this.groupFormData.helmetOffTime = String(rowData.helmetOffTime);
        this.groupFormData.monday = rowData.friday ? '是' : '否';
        this.groupFormData.tuesday = rowData.friday ? '是' : '否';
        this.groupFormData.wednesday = rowData.friday ? '是' : '否';
        this.groupFormData.thursday = rowData.friday ? '是' : '否';
        this.groupFormData.friday = rowData.friday ? '是' : '否';
      },
      handleAdd() {
        this.groupDialog = true;
        this.groupFormData = {
          name: '',
          description: '',
          manager: '',
          managerPhone: '',
          helmetOffTime: '',
          amStartTime: '',
          amEndTime: '',
          pmStartTime: '',
          pmEndTime: '',
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: ''
        }
      },
      saveGroup() {
        this.$refs['groupForm'].validate((valid) => {
        	valid && groupApi[this.editModel ? 'update':'add'](this.groupFormData)
            .then(()=>{
              this.groupDialog = false;
              this.queryData.page= 1;
              this.handleQuery();
              this.$message({
                type: 'success',
                message: this.editModel ? '更新成功!':'添加成功!'
              });
            })
        })
      }
    }
  }
</script>
