import Vue from 'vue';
import {
    Form, //表单
    FormItem, //表单项目
    Table, //表格
    TableColumn, //表格列
    Tabs, //选项卡
    TabPane, //选项窗口
    Menu, //菜单
    Submenu,
    MenuItem, //菜单项目
    MenuItemGroup, //菜单组

    Icon, //图标
    Button, //按钮
    Row, //layout布局行
    Col, //layout布局列
    Radio, //单选框
    RadioGroup, //单选组
    Checkbox, //多选框
    CheckboxGroup, //多选组
    Input, //输入框
    Select, //选择器
    Option, //选项
    Cascader, //级联
    Switch, //开关
    Slider, //滑块
    TimeSelect, //时间选择器
    DatePicker, //日期选择器
    TimePicker, //日期时间选择器
    Upload, //上传文件
    Dropdown, //下拉
    DropdownMenu, //下拉菜单
    DropdownItem, //下拉项目
    Dialog, //对话框
    Popover, //根据方向的弹出说明框
    Carousel, //轮播图
    CarouselItem, //轮播图子项
    Collapse, //折叠面板
    CollapseItem, //折叠面板子项

    Loading, //加载中
    Message, //顶部消息提示
    MessageBox, //消息弹框(确定或者带取消)
} from 'element-ui';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);

Vue.use(Icon);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Cascader);
Vue.use(Switch);
Vue.use(Slider);
Vue.use(TimeSelect);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Upload);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dialog);
Vue.use(Popover);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.use(Loading);

Vue.prototype.$ele = {
    loading: Loading.service,
    message: Message,
    messageBox: MessageBox,
    alert: MessageBox.alert,
    confirm: MessageBox.confirm,
};