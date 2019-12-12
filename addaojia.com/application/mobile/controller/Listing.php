<?php
namespace app\mobile\controller;

use think\Db;
use think\View;

class Listing extends Common
{
    public function index($cid)
    {
        $cat_info = Db::name('category')->find($cid);

        $template_list = $cat_info['template_list'];
        if(!$template_list) {
            $template_list = Db::name('model')->where('id',$cat_info['modelid'])->value('template_list');
        }
        $template = 'template/mobile/'. $this->theme .'/'.$template_list;
        $this->assign('cate',$cat_info);
        $this->assign('title',empty($cat_info['seotitle'])?$cat_info['name']:$cat_info['seotitle']);
        $this->assign('keywords',$cat_info['keywords']);
        $this->assign('description',$cat_info['description']);
        $this->assign('cid',$cid);
        $this->assign('qie_id',input('param.qie_id'));
        return $this->fetch($template);
    }

    public function ajax_article()
    {
        $post=input('post.');
        $page_limit=($post['page']-1)*6;
        $this->assign('page_limit',$page_limit);
        $this->assign('cid',$post['id']);
        $template = 'template/mobile/'. $this->theme .'/ajax_article.html';
        return $this->fetch($template);
    }

}
