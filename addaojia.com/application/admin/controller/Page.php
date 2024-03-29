<?php
/**
 * 单页控制器
 */
namespace app\admin\controller;

use app\admin\model\Category;
use think\Db;

class Page extends Common
{

    public function __construct()
    {
        parent::__construct();
        //分类
        $catgeroy = Db::name('category')->field('id,pid,name')->where('modelid', 2)->select();
        $all_cat = [];
        //拼接导航 一级二级
        foreach ($catgeroy as $val) {
            if ($val['pid'] == 0) {
                $all_cat[$val['id']] = $val;
            } else {
                $all_cat[$val['pid']]['children'][] = $val;
            }
        }
        $this->assign('page_cat',$all_cat);
    }

    public function index()
    {
        $pages = Db::name('category')->field('name,ename,id')->where('modelid', 2)->select();
        $this->assign('pages', $pages);
        return $this->fetch();
    }

    /*
     * 添加内容
     */
    public function add(){
        if (request()->isAjax()) {
            //新增处理
            $params = input('post.');
            $cid = $params['cid'];
            unset($params['cid']);
            $flag = Category::where('id',$cid)->update($params);
            if ($flag) {
                exit(json_encode(['status' => 1, 'msg' => '添加成功', 'url' => url('page/index')]));
            }else{
                exit(json_encode(['status' => 0, 'msg' => '添加失败', 'url' => '']));
            }
        } else {
            return $this->fetch();
        }
    }

    /**
     * 修改单页面
     */
    public function edit($id){
        if (request()->isAjax()) {
            //新增处理
            $params = input('post.');
            $cid = $params['cid'];
            unset($params['cid']);
            $flag = Category::where('id',$cid)->update($params);
            if ($flag) {
                exit(json_encode(['status' => 1, 'msg' => '修改成功', 'url' => url('page/index')]));
            }else{
                exit(json_encode(['status' => 0, 'msg' => '修改失败', 'url' => '']));
            }
        } else {
            $cat_info = Category::get($id);
            $data = $cat_info->toArray();
            $this->assign('item',$data);
            return $this->fetch();
        }
        
    }

    /**
     * 删除单页面
     */
    public function dele($id){
        $flag = Category::destroy($id);
        if ($flag !== false) {
            exit(json_encode(['status' => 1, 'msg' => '删除成功']));
        }else{
            exit(json_encode(['status' => 0, 'msg' => '删除失败']));
        }
    }
}
