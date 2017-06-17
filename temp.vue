                <el-tab-pane label="待办事项" name="first">
                    <el-col :xs="24">
                        <template v-if="!Done">
                            <template v-for="(item, index) in list">
                                <div class="todo-list" v-if="item.status == false">
                                    <span class="item">
                                        {{ index + 1}}. {{ item.content }}
                                    </span>
                                    <span class="pull-right">
                                        <el-button size="small" type="primary" @click="finished(index)">完成</el-button>
                                        <el-button size="small" :plain="true" type="danger" @click="remove(index)">删除</el-button>
                                    </span>
                                </div>
                            </template>
                        </template>
                        <div v-else-if="Done">
                            暂无待办事项
                        </div>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="已完成事项" name="second">
                    <template v-if="count > 0">
                        <template v-for="(item, index) in list">
                            <div class="todo-list" v-if="item.status == true">
                                <span class="item finished">
                                    {{ index + 1 }}. {{ item.content }}
                                </span>
                                <span class="pull-right">
                                    <el-button size="small" type="primary" @click="restore(index)">还原</el-button>
                                </span>
                            </div>
                        </template>
                    </template>
                    <div v-else>
                        暂无已完成事项
                    </div>
                </el-tab-pane>