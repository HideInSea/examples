/*
 * @Description: 
 * @Author: BMIU
 * @Date: 2020-02-14 09:53:31
 * @LastEditors  : BMIU
 * @LastEditTime : 2020-02-14 10:14:15
 */
// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        c:0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("onLoad"+this.c++);
    },

    onEnable(){
        cc.log("onEnable"+this.c++);  
    },

    start () {  
        cc.log("start"+this.c++);
    },

    update (dt) {
        cc.log("update"+this.c++);
    },

    lateUpdate(){
        cc.log("lateUpdate"+this.c++);
    },

    onDisable(){
        cc.log("onDisable"+this.c++);
    },  

    onDestroy(){
        cc.log("onDestroy"+this.c++);
    }

});
