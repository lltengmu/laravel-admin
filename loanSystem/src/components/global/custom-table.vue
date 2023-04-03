<template>
    <el-card class="min-w-[1000px]">
        <template #header>
            <table-table-header />
        </template>
        <template #default>
            <table class="text-primary">
                <thead>
                    <tr>
                        <th></th>
                        <th>編號</th>
                        <th>姓名</th>
                        <th>名字</th>
                        <th>電郵</th>
                        <th>電話</th>
                        <th>國籍</th>
                        <th>狀態</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="radio">
                        </td>
                        <td>1</td>
                        <td>张</td>
                        <td>大大</td>
                        <td>16411651@qq.com</td>
                        <td>16416131616</td>
                        <td>中国</td>
                        <td>启用</td>
                        <td>
                            <el-button plain round color="#4B5EFF">匯出xlsx</el-button>
                            <el-button plain round color="#4B5EFF">文件查看</el-button>
                            <el-button plain round color="#4B5EFF">查看</el-button>
                            <el-button plain round type="danger">刪除</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
    </el-card>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
table {
    width: 100%;
    display: grid;
    grid-template-rows: 2.5rem 1fr;
    grid-template-columns:1;
    thead{
        padding: 0.5rem;
        tr{
            display: grid;
            grid-template-rows: 100%;
            grid-template-columns: 3rem 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
            text-align: left;
        }
    }
    tbody{
        padding: 0.5rem;
        tr{
            display: grid;
            grid-template-rows: 100%;
            grid-template-columns: 3rem 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
            text-align: left;
        }
    }
}
</style>