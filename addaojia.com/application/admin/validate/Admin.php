<?php
/**
 * Created by Wang.
 * User: nango
 * Date: 2016-08-30
 * Time: 14:08
 */
namespace app\admin\validate;
use think\Validate;

class Admin extends Validate {
    protected $rule =   [
        'username'  => 'require|max:25',
        'email' => 'email',
        'password' => 'require|min:6',
        'repassword'=>'require|confirm:password'
    ];

    protected $message  =   [
        'username.require' => '管理员名称必须',
        'username.max'     => '管理员名称最多不能超过25个字符',
        'password.require'   => '密码必须',
        'password.min'  => '密码长度至少六位',
        'email'        => '邮箱格式错误',
        'repassword.require' => '确认密码必须',
        'repassword.confirm' => '两次密码必须一致'
    ];

    /**
     * 验证场景
     */
    protected $scene = [
        'edit'  =>  [
            'username' => 'require|max:25', 
            'email' => 'email', 
            'password' => 'min:6', 
            'repassword' => 'confirm:password'
            ],
    ];
}
