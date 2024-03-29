<?php

namespace app\index\controller;

use think\Controller;
use think\Db;
use think\Session;
use think\Config;

class Common extends Controller
{
    /*
     * 数据表前缀
     */
    protected $prefix = '';

    /*
     * 网站主题
     */
    protected $theme = 'default';


    public function _initialize()
    {
        
        parent::_initialize(); // TODO: Change the autogenerated stub
        //站点是否已经关闭
        if (get_system_value('site_closed') == 1) {
            echo "<h1 align='center'>站点已临时关闭！</h1>";exit;
        }
        if (is_mobile()) $this->redirect('mobile/index/index');

        $this->prefix = Config::get('database.prefix');
        $this->theme = get_system_value('site_theme');
        //查询文章分类
        $cate = Db::name('category')->where(['modelid' => 1, 'status' => 1])->select();
        $this->assign('rcate', $cate);
    }

    /*
     * 空操作
     */
    public function _empty()
    {
        abort(404,'页面不存在');
    }
}
